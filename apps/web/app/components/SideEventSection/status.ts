import type { SideEvent, SideEventStatus, Weekday } from "./types";

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

const WEEKDAY_BY_SHORT: Record<string, Weekday> = {
  Sun: "sun",
  Mon: "mon",
  Tue: "tue",
  Wed: "wed",
  Thu: "thu",
  Fri: "fri",
  Sat: "sat",
};

/**
 * Derives the date badge (month / day / weekday) shown on a card from `endsAt`.
 *
 * Formatted in Asia/Tokyo so the badge reflects the JST calendar date regardless
 * of the server's timezone — `endsAt` already carries the +09:00 offset, this just
 * makes the read-out timezone-independent too. Events run within a single JST day,
 * so the end instant and the event date share the same month/day.
 */
export function getSideEventDate(endsAt: string): {
  month: number;
  day: number;
  weekday: Weekday;
} {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    month: "numeric",
    day: "numeric",
    weekday: "short",
  }).formatToParts(new Date(endsAt));
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    month: Number(value("month")),
    day: Number(value("day")),
    weekday: WEEKDAY_BY_SHORT[value("weekday")] ?? "mon",
  };
}
