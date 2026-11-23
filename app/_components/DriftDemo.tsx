"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";

/*
 * A small simulation of how Watch Party keeps two players in sync: small gaps
 * are closed by nudging the lagging player's playback rate (at most ±5%), and
 * only gaps over 3 s fall back to a hard seek. Time runs faster than real time
 * so a correction that takes ~40 s of video plays out in a few seconds.
 */

const SPEEDUP = 8;
const VIDEO_LENGTH = 90; // seconds, loops
const MAX_RATE_DELTA = 0.05;
const SEEK_THRESHOLD = 3;
const DEADBAND = 0.05;
const GAIN = 0.25; // rate change per second of drift, before clamping
const PEER_SKEW = 1.003; // the peer's clock runs slightly fast, like real hardware
const CHECK_EVERY = 0.5; // sim seconds between sync checks
const SAMPLE_EVERY = 0.25; // sim seconds between plotted samples
const HISTORY = 200;
const PLOT_RANGE = 6.5; // y-axis spans ±this many seconds
const INITIAL_DRIFT = -2; // the peer joins two seconds behind

type Sim = {
  host: number;
  peer: number;
  rate: number;
  seeks: number;
  sinceCheck: number;
  sinceSample: number;
  history: number[];
};

function initialSim(): Sim {
  return {
    host: 12,
    peer: 12 + INITIAL_DRIFT,
    rate: 1,
    seeks: 0,
    sinceCheck: CHECK_EVERY,
    sinceSample: 0,
    // In sync until the friend joins two seconds behind.
    history: [...Array<number>(HISTORY - 1).fill(0), INITIAL_DRIFT],
  };
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

/** Advances the simulation in place by `dt` simulated seconds. */
function advance(sim: Sim, dt: number) {
  sim.host += dt;
  sim.peer += dt * sim.rate * PEER_SKEW;
  sim.sinceCheck += dt;
  sim.sinceSample += dt;

  if (sim.sinceCheck >= CHECK_EVERY) {
    sim.sinceCheck = 0;
    const drift = sim.peer - sim.host;

    if (Math.abs(drift) > SEEK_THRESHOLD) {
      sim.peer = sim.host;
      sim.rate = 1;
      sim.seeks += 1;
    } else if (Math.abs(drift) > DEADBAND) {
      sim.rate = 1 - clamp(drift * GAIN, -MAX_RATE_DELTA, MAX_RATE_DELTA);
    } else {
      sim.rate = 1;
    }
  }

  while (sim.sinceSample >= SAMPLE_EVERY) {
    sim.sinceSample -= SAMPLE_EVERY;
    sim.history.push(sim.peer - sim.host);
    if (sim.history.length > HISTORY) sim.history.shift();
  }
}

/** Runs the simulation until the peers settle, for reduced-motion visitors. */
function settle(sim: Sim) {
  for (let t = 0; t < 60; t += SAMPLE_EVERY) {
    advance(sim, SAMPLE_EVERY);
    if (Math.abs(sim.peer - sim.host) <= DEADBAND && sim.rate === 1 && t > 2) break;
  }
}

function formatTime(seconds: number) {
  const s = ((seconds % VIDEO_LENGTH) + VIDEO_LENGTH) % VIDEO_LENGTH;
  const mm = Math.floor(s / 60).toString().padStart(2, "0");
  const ss = (s % 60).toFixed(1).padStart(4, "0");
  return `${mm}:${ss}`;
}

function formatSigned(value: number, digits: number) {
  const fixed = value.toFixed(digits);
  // Avoid printing "-0.00".
  if (Number(fixed) === 0) return (0).toFixed(digits);
  return value > 0 ? `+${fixed}` : fixed.replace("-", "−");
}

const subscribeReducedMotion = (onChange: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getReducedMotionServer = () => false;

type View = { host: number; peer: number; rate: number; seeks: number; history: number[] };

function toView(sim: Sim): View {
  return {
    host: sim.host,
    peer: sim.peer,
    rate: sim.rate,
    seeks: sim.seeks,
    history: sim.history.slice(),
  };
}

const PLOT_W = 400;
const PLOT_H = 120;

function toY(drift: number) {
  return PLOT_H / 2 - (clamp(drift, -PLOT_RANGE, PLOT_RANGE) / PLOT_RANGE) * (PLOT_H / 2 - 4);
}

export default function DriftDemo() {
  // The simulation mutates in place; React only sees immutable snapshots of it.
  const simRef = useRef<Sim>(initialSim());
  const rootRef = useRef<HTMLDivElement>(null);
  const [sim, setView] = useState<View>(() => toView(initialSim()));
  const [visible, setVisible] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  );

  const rerender = useCallback(() => setView(toView(simRef.current)), []);

  // Only animate while on screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      settle(simRef.current);
      rerender();
      return;
    }
    if (!visible) return;

    let raf = 0;
    let last = performance.now();

    const tick = (now: number) => {
      // Cap the step so a backgrounded tab does not jump on return.
      const dt = Math.min(now - last, 64) / 1000;
      last = now;
      advance(simRef.current, dt * SPEEDUP);
      rerender();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, reducedMotion, rerender]);

  const lag = useCallback(
    (seconds: number) => {
      const live = simRef.current;
      live.peer -= seconds;
      live.sinceCheck = 0;
      live.history.push(live.peer - live.host);
      if (live.history.length > HISTORY) live.history.shift();
      if (reducedMotion) settle(live);
      rerender();
    },
    [reducedMotion, rerender],
  );

  const drift = sim.peer - sim.host;
  const ratePct = (sim.rate - 1) * 100;
  const state =
    Math.abs(drift) <= DEADBAND && sim.rate === 1
      ? "in sync"
      : sim.rate > 1
        ? "catching up"
        : sim.rate < 1
          ? "easing off"
          : "checking";

  const points = sim.history
    .map((d, i) => {
      const x = (i / (HISTORY - 1)) * PLOT_W;
      return `${x.toFixed(1)},${toY(d).toFixed(1)}`;
    })
    .join(" ");

  return (
    <div ref={rootRef} className="flex flex-col rounded-xl border bg-background/60 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3 font-mono text-xs text-muted-foreground">
        <span>sync.simulate()</span>
        <span>{reducedMotion ? "settled instantly" : `${SPEEDUP}× speed`}</span>
      </div>

      {/* Two players */}
      <div className="mt-4 space-y-3 font-mono text-xs">
        {[
          { label: "you", time: sim.host },
          { label: "friend", time: sim.peer },
        ].map((player) => {
          const progress =
            ((((player.time % VIDEO_LENGTH) + VIDEO_LENGTH) % VIDEO_LENGTH) / VIDEO_LENGTH) * 100;
          return (
            <div key={player.label} className="grid grid-cols-[3.5rem_1fr_4.5rem] items-center gap-3">
              <span className="text-muted-foreground">{player.label}</span>
              <div className="relative h-1.5 rounded-full bg-secondary">
                <div
                  className="absolute inset-y-0 left-0 rounded-full bg-primary/40"
                  style={{ width: `${progress}%` }}
                />
                <div
                  className="absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                  style={{ left: `${progress}%` }}
                />
              </div>
              <span className="text-right tabular-nums text-foreground">{formatTime(player.time)}</span>
            </div>
          );
        })}
      </div>

      {/* Drift over time */}
      <svg
        viewBox={`0 0 ${PLOT_W} ${PLOT_H}`}
        preserveAspectRatio="none"
        className="mt-5 min-h-28 w-full flex-1 overflow-visible"
        role="img"
        aria-label={`Drift between the two players over time, currently ${formatSigned(drift, 2)} seconds`}
      >
        {[SEEK_THRESHOLD, -SEEK_THRESHOLD].map((t) => (
          <line
            key={t}
            x1={0}
            x2={PLOT_W}
            y1={toY(t)}
            y2={toY(t)}
            className="stroke-destructive/50"
            strokeDasharray="4 4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <line
          x1={0}
          x2={PLOT_W}
          y1={toY(0)}
          y2={toY(0)}
          className="stroke-border"
          vectorEffect="non-scaling-stroke"
        />
        <polyline
          points={points}
          fill="none"
          className="stroke-primary"
          strokeWidth={2}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="mt-1 flex justify-between font-mono text-[11px] text-muted-foreground">
        <span>drift over time</span>
        <span className="text-destructive/80">- - seek at ±{SEEK_THRESHOLD} s</span>
      </div>

      {/* Readout */}
      <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-xs sm:grid-cols-4">
        <div>
          <dt className="text-muted-foreground">drift</dt>
          <dd className="tabular-nums text-foreground">{formatSigned(drift, 2)} s</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">rate</dt>
          <dd className="tabular-nums text-foreground">{formatSigned(ratePct, 1)}%</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">seeks</dt>
          <dd className="tabular-nums text-foreground">{sim.seeks}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">state</dt>
          <dd className="text-primary">{state}</dd>
        </div>
      </dl>

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => lag(1.5)}
          className="rounded-lg border bg-secondary px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          hiccup −1.5 s
        </button>
        <button
          type="button"
          onClick={() => lag(5)}
          className="rounded-lg border bg-secondary px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary"
        >
          stall −5 s
        </button>
      </div>
    </div>
  );
}
