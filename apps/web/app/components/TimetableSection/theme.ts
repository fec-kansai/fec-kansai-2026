import type { TrackId } from "./types";

/**
 * Per-track colour theme. Track A uses the site's green, track B the brown
 * accent — the same pairing the design applies to the column header, the card
 * border and the room label, so a card always reads as belonging to one track.
 */
export const TRACK_THEMES: Record<
  TrackId,
  { header: string; border: string; text: string }
> = {
  a: {
    header: "bg-fk-green",
    border: "border-fk-green",
    text: "text-fk-green",
  },
  b: {
    header: "bg-fk-accent-brown",
    border: "border-fk-accent-brown",
    text: "text-fk-accent-brown",
  },
};

/**
 * Neutral fills taken from the design. They are timetable-only, so they stay
 * here as literals instead of becoming site-wide --fk-* tokens.
 */
export const TIMETABLE_SURFACES = {
  /** Time column / time bar. */
  time: "bg-[#f0f0f0]",
  /** "セッションなし" and 休憩 rows. */
  unavailable: "bg-[#d4d4d4]",
  /** Category badge on a session card. */
  badge: "bg-[#d8b029]",
} as const;
