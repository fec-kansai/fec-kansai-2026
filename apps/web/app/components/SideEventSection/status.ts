import type { SideEvent, SideEventStatus } from "./types";

/**
 * Resolves the corner-ribbon status for an event.
 *
 * An explicit `status` in the data always wins (manual override). Otherwise the
 * event counts as "ended" once `endsAt` has passed relative to `now`. Both sides
 * are absolute instants — `endsAt` carries its own JST offset — so the comparison
 * is correct no matter what timezone the server runs in.
 *
 * `now` is passed in (rather than read here) so a whole list shares one timestamp
 * and the function stays pure/testable. With ISR (`revalidate`) the page re-renders
 * on the server periodically, which is what makes the ribbon flip without a deploy.
 */
export function getSideEventStatus(
  event: SideEvent,
  now: Date,
): SideEventStatus {
  if (event.status) return event.status;
  return Date.parse(event.endsAt) <= now.getTime() ? "ended" : "upcoming";
}
