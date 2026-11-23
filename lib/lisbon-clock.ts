import { useSyncExternalStore } from "react";

const LISBON_TIME = new Intl.DateTimeFormat("pt-PT", {
  timeZone: "Europe/Lisbon",
  hour: "2-digit",
  minute: "2-digit",
});

function subscribeToMinute(onChange: () => void) {
  const now = new Date();
  const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

  let intervalId: ReturnType<typeof setInterval>;
  const timeoutId = setTimeout(() => {
    onChange();
    intervalId = setInterval(onChange, 60_000);
  }, msUntilNextMinute);

  return () => {
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  };
}

// No zone suffix: browsers mostly render Lisbon's as "GMT+0"/"GMT+1", which
// reads worse than the city name the time is always shown next to.
function getLisbonClock() {
  return LISBON_TIME.format(new Date());
}

function getLisbonClockServer() {
  return "";
}

/**
 * Current Lisbon time as "14:32", ticking on the minute boundary.
 * Empty during prerender, so the static HTML never bakes in a stale time.
 */
export function useLisbonClock() {
  return useSyncExternalStore(subscribeToMinute, getLisbonClock, getLisbonClockServer);
}
