/**
 * Track identifier. Also selects the colour theme every cell of that track uses
 * — see TRACK_THEMES.
 */
export type TrackId = "a" | "b";

export type Track = {
  id: TrackId;
  /** Track label, e.g. "トラックA". */
  name: string;
  /** Room the track runs in, e.g. "グランホール1". */
  hall: string;
};

/** A single talk, occupying one track of one time slot. */
export type Session = {
  /** Badge above the title, e.g. "レギュラートーク" / "LT". */
  category: string;
  title: string;
  speaker: string;
  /** Speaker avatar in public/. A grey placeholder circle is shown when omitted. */
  speakerImage?: string;
  /** Session detail page. The title is plain text when omitted. */
  url?: string;
  /** Post-session survey. The link is hidden when omitted. */
  surveyUrl?: string;
};

/**
 * One row of the timetable. `startsAt` / `endsAt` are display strings rather
 * than dates — nothing is computed from them, so placeholders like "HH:MM" are
 * fine while the schedule is still being fixed.
 */
export type TimetableSlot = {
  /** Stable key for the row; times are not unique while they are placeholders. */
  id: string;
  /** "HH:MM" in JST. */
  startsAt: string;
  endsAt: string;
} & (
  | {
      kind: "sessions";
      /** Talk per track; `null` renders the greyed-out "セッションなし" cell. */
      sessions: Record<TrackId, Session | null>;
    }
  /** Grey row spanning every track — 休憩 and the like. */
  | { kind: "break"; label: string }
  /** Outlined row spanning every track — 懇親会 and the like. */
  | { kind: "shared"; label: string; note?: string }
);
