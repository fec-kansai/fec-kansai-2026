import { SESSION_CATEGORIES } from "./types";
import type { SessionCategory, TrackId } from "./types";

/**
 * Per-track colour theme. Track A uses the site's green, track B the brown
 * accent — the same pairing the design applies to the column header, the card
 * border and the room label, so a card always reads as belonging to one track.
 * `border` carries the width too: both tracks use a 2px border.
 */
export const TRACK_THEMES: Record<
  TrackId,
  { header: string; border: string; text: string }
> = {
  a: {
    header: "bg-fk-green",
    border: "border-2 border-fk-green",
    text: "text-fk-green",
  },
  b: {
    header: "bg-fk-accent-brown",
    border: "border-2 border-fk-accent-brown",
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
} as const;

/**
 * Category badge fill, keyed by the badge text. The design reuses the two track
 * colours here — 主催者 matches the track A header, スポンサーセッション the
 * track B one — so those two follow the site tokens rather than repeating a hex.
 * The gold and purple are timetable-only, so they stay literals.
 */
export const CATEGORY_BADGES: Record<SessionCategory, string> = {
  [SESSION_CATEGORIES.organizer]: "bg-fk-green",
  [SESSION_CATEGORIES.regular]: "bg-[#e1a937]",
  [SESSION_CATEGORIES.sponsor]: "bg-fk-accent-brown",
  [SESSION_CATEGORIES.lightning]: "bg-[#64407b]",
};
