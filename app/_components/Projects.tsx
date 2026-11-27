import { ArrowUpRight } from "lucide-react";
import { Github } from "@/components/icons";
import Reveal from "./Reveal";
import DriftDemo from "./DriftDemo";

function RepoLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
    >
      <Github className="size-4" />
      {label}
      <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li key={tag} className="skill-badge px-2.5 py-1 text-xs">
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-12">
          <span className="section-label">02 // projects</span>
          <h2 className="section-title mt-4">Things I&apos;ve built</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Side projects that started with something annoying me.
          </p>
        </Reveal>

        <div className="space-y-8">
          {/* Uptime Monitor */}
          <Reveal className="rounded-2xl border bg-card p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-semibold">Uptime Monitor</h3>
                  <p className="mt-1 text-muted-foreground">
                    Multi-region uptime checks on Cloudflare&apos;s free tier.
                  </p>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  A self-hosted monitor that checks my sites every 5 minutes from Europe,
                  US East and Asia-Pacific, keeps every check in D1, and pings Discord or
                  Slack when something goes down and when it comes back. The status page
                  updates live over WebSockets. The whole thing is one Worker, deployed
                  with one command.
                </p>

                <div className="rounded-xl border-l-2 border-primary bg-primary/5 px-4 py-3">
                  <p className="font-mono text-xs text-primary">the interesting bit</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                    One region having a bad network day shouldn&apos;t page anyone. Each
                    region runs in its own Durable Object, and a check only fails when
                    most regions agree. A site is marked down after two failed runs in a
                    row. The summary is built once per run and pushed to every open page,
                    so traffic never adds database reads.
                  </p>
                </div>

                <Tags
                  tags={["TypeScript", "Cloudflare Workers", "Durable Objects", "D1", "React"]}
                />
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <RepoLink
                    href="https://github.com/miguelcollaco/uptime-monitor"
                    label="uptime-monitor"
                  />
                  <a
                    href="https://uptime.miguelcollaco.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    live status page
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>

              {/* Majority vote */}
              <div className="flex flex-col gap-4 self-center rounded-xl border bg-background/60 p-5 font-mono">
                <p className="text-xs text-muted-foreground">one check, three regions</p>

                <ul className="space-y-2 text-sm">
                  {[
                    { region: "Europe", ok: true, detail: "142 ms" },
                    { region: "US East", ok: true, detail: "98 ms" },
                    { region: "Asia-Pacific", ok: false, detail: "timed out" },
                  ].map(({ region, ok, detail }) => (
                    <li key={region} className="flex items-baseline justify-between gap-4">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        <span
                          aria-hidden
                          className={`size-2 rounded-full ${ok ? "bg-primary" : "bg-muted-foreground/40"}`}
                        />
                        {region}
                      </span>
                      <span className={`tabular-nums ${ok ? "text-foreground" : "text-muted-foreground"}`}>
                        {ok ? "up" : "fail"} · {detail}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline justify-between border-t pt-3 text-sm">
                  <span className="text-muted-foreground">verdict (2/3 up)</span>
                  <span className="text-primary">up · 120 ms</span>
                </div>

                <div className="space-y-1.5">
                  <p className="text-xs text-muted-foreground">last 30 days</p>
                  <div className="flex gap-0.5" aria-hidden>
                    {Array.from({ length: 30 }, (_, i) => (
                      <span
                        key={i}
                        className={`h-6 flex-1 rounded-sm ${i === 17 ? "bg-muted-foreground/25" : "bg-primary/70"}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="text-primary">$</span> latency is the median of the
                  regions that succeeded.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Watch Party */}
          <Reveal className="rounded-2xl border bg-card p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-semibold">Watch Party for Stremio</h3>
                  <p className="mt-1 text-muted-foreground">
                    Watch together, with no server and no account.
                  </p>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  A cross-browser extension that syncs playback, chat and voice on
                  Stremio Web. Peers talk to each other directly over WebRTC and find
                  each other through public Nostr relays, so there is no backend to run
                  and nothing to sign up for.
                </p>

                <div className="rounded-xl border-l-2 border-primary bg-primary/5 px-4 py-3">
                  <p className="font-mono text-xs text-primary">the interesting bit</p>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                    Players drift apart. Seeking to fix every small gap makes the video
                    stutter for everyone, so small gaps are closed by quietly speeding
                    up or slowing down by at most 5%. Only gaps over 3 seconds trigger
                    a seek. Try knocking the players out of sync.
                  </p>
                </div>

                <Tags tags={["JavaScript", "WebRTC", "Nostr", "Browser extension"]} />
                <RepoLink
                  href="https://github.com/miguelcollaco/watch-party-for-stremio"
                  label="watch-party-for-stremio"
                />
              </div>

              <DriftDemo />
            </div>
          </Reveal>

          {/* FLIP */}
          <Reveal className="rounded-2xl border bg-card p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
              <div className="space-y-5">
                <div>
                  <h3 className="text-2xl font-semibold">FLIP</h3>
                  <p className="mt-1 text-muted-foreground">
                    NOVA&apos;s student portal, minus the waiting.
                  </p>
                </div>

                <p className="leading-relaxed text-muted-foreground">
                  NOVA&apos;s student portal is slow, and looking something up can take
                  more than 20 clicks. FLIP is a cross-platform desktop app I
                  co-built that gets you there in one.
                </p>

                <p className="leading-relaxed text-muted-foreground">
                  I wrote the Rust side: the portal parser and the session layer, which
                  keeps credentials in the OS keyring, logs back in silently when a
                  session expires, and runs under a strict CSP. I also built course-file
                  search and download, schedule export to PNG, and a good part of the
                  Vue interface.
                </p>

                <Tags tags={["Rust", "Tauri", "Vue.js", "TypeScript"]} />
                <RepoLink href="https://github.com/miguelflor/FLIP" label="miguelflor/FLIP" />
              </div>

              {/* Before / after */}
              <div className="flex flex-col gap-4 self-center rounded-xl border bg-background/60 p-5 font-mono">
                <p className="text-xs text-muted-foreground">clicks to find one thing</p>

                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-muted-foreground">student portal</span>
                    <span className="tabular-nums text-foreground">20+</span>
                  </div>
                  <div className="flex gap-1" aria-hidden>
                    {Array.from({ length: 20 }, (_, i) => (
                      <span key={i} className="h-6 flex-1 rounded-sm bg-muted-foreground/25" />
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="text-muted-foreground">FLIP</span>
                    <span className="tabular-nums text-primary">1</span>
                  </div>
                  <div className="flex gap-1" aria-hidden>
                    <span className="h-6 flex-1 rounded-sm bg-primary" />
                    {Array.from({ length: 19 }, (_, i) => (
                      <span key={i} className="h-6 flex-1" />
                    ))}
                  </div>
                </div>

                <p className="text-xs leading-relaxed text-muted-foreground">
                  <span className="text-primary">$</span> plus a session that stays logged
                  in, and files you can actually search.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
