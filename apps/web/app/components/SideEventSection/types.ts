/**
 * Corner ribbon state: "ended" shows 終了, "upcoming" shows nothing.
 * Normally derived from `endsAt` (see getSideEventStatus); the `status` field is
 * only a manual override.
 */
export type SideEventStatus = "upcoming" | "ended";

/** Lowercase 3-letter weekday shown in the date badge — see getSideEventDate. */
export type Weekday = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

/**
 * Side event card data. The whole card is driven by this structure so that
 * editing an event (or adding a new one) only means changing data in
 * constants.ts — never the markup in SideEventCard.
 */
export type SideEvent = {
  /** Stable id, also used as the anchor target. */
  id: string;
  /**
   * Manual override for the corner ribbon. When omitted, the status is derived
   * from `endsAt` — so leave it out for normal events and only set it to force a
   * specific ribbon (e.g. a cancelled event).
   */
  status?: SideEventStatus;
  /**
   * When the event ends, as an ISO 8601 string WITH timezone offset (JST, +09:00,
   * e.g. "2026-06-22T21:00:00+09:00"). Drives the automatic "ended" ribbon once
   * this instant has passed (see getSideEventStatus) and the date badge on the
   * card (month/day/weekday in JST — see getSideEventDate).
   */
  endsAt: string;
  title: string;
  /** Organiser line, rendered under the title. Include the "主催：" prefix in the value. */
  hosts: string;
  /** Event image. When omitted, a "no image" placeholder is shown instead. */
  image?: string;
  /** Body paragraphs. Each entry becomes its own <p>. */
  description: string[];
  /** Hashtag-style labels (without the leading #). */
  tags: string[];
  /** CTA link. When omitted, the button is hidden (e.g. nothing to sign up to). */
  link?: { url: string; label: string };
};
