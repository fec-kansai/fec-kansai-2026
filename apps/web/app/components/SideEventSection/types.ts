/** Controls the corner ribbon: "ended" shows 終了, "upcoming" shows nothing. */
export type SideEventStatus = "upcoming" | "ended";

/**
 * Side event card data. The whole card is driven by this structure so that
 * editing an event (or adding a new one) only means changing data in
 * constants.ts — never the markup in SideEventCard.
 */
export type SideEvent = {
  /** Stable id, also used as the anchor target. */
  id: string;
  status: SideEventStatus;
  /** Date badge, e.g. { month: 6, day: 22, weekday: "mon" }. */
  date: { month: number; day: number; weekday: string };
  title: string;
  /** Organiser line, rendered under the title (主催: …). */
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
