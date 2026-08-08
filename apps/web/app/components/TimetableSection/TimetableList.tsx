import { cn } from "@workspace/ui/lib/utils";
import { SessionCard } from "./SessionCard";
import { TIMETABLE_SURFACES, TRACK_THEMES } from "./theme";
import { timetableSlots, tracks } from "./timetable";
import type { TimetableSlot } from "./types";

/**
 * Mobile layout: one chronological column instead of track columns. The tracks
 * become a legend at the top and each card names its own room, since there is
 * no column position left to say which track a talk belongs to. Empty tracks
 * are simply left out — the desktop "セッションなし" cell only exists to keep
 * the grid rectangular.
 */
export function TimetableList() {
  return (
    <div className="lg:hidden">
      <ul className="m-0 grid list-none gap-2 p-0">
        {tracks.map((track) => (
          <li
            key={track.id}
            className={cn(
              "flex items-center justify-center gap-2 rounded-[8px] px-4 py-2.5 text-fk-white",
              TRACK_THEMES[track.id].header,
            )}
          >
            <span className="text-[14px] font-bold">{track.name}</span>
            <span className="text-[13px] font-bold">{track.hall}</span>
          </li>
        ))}
      </ul>

      <ol className="m-0 mt-4 grid list-none gap-4 p-0">
        {timetableSlots.map((slot) => (
          <li key={slot.id} className="grid gap-2.5">
            <p
              className={cn(
                "m-0 rounded-[8px] px-3 py-2.5 text-center font-montserrat text-[14px] font-bold text-fk-text-main",
                TIMETABLE_SURFACES.time,
              )}
            >
              {slot.startsAt}
              <span aria-hidden="true"> – </span>
              <span className="sr-only">〜</span>
              {slot.endsAt}
            </p>
            <SlotBody slot={slot} />
          </li>
        ))}
      </ol>
    </div>
  );
}

function SlotBody({ slot }: { slot: TimetableSlot }) {
  if (slot.kind === "break") {
    return (
      <p
        className={cn(
          "m-0 rounded-[8px] px-4 py-3.5 text-center text-[14px] font-bold text-fk-text-main",
          TIMETABLE_SURFACES.unavailable,
        )}
      >
        {slot.label}
      </p>
    );
  }

  if (slot.kind === "shared") {
    return (
      <div className="rounded-[8px] border border-fk-green bg-fk-white px-4 py-3 text-center">
        <p className="m-0 text-[14px] font-bold text-fk-text-main">
          {slot.label}
        </p>
        {slot.note && (
          <p className="m-0 mt-1 text-[12px] font-bold text-fk-text-main">
            {slot.note}
          </p>
        )}
      </div>
    );
  }

  return (
    <>
      {tracks.map((track) => {
        const session = slot.sessions[track.id];
        if (!session) {
          return null;
        }

        return (
          <SessionCard
            key={track.id}
            session={session}
            trackId={track.id}
            hall={track.hall}
          />
        );
      })}
    </>
  );
}
