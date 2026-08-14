import { cn } from "@workspace/ui/lib/utils";
import { SessionCard } from "./SessionCard";
import { TIMETABLE_SURFACES, TRACK_THEMES } from "./theme";
import { timetableSlots, tracks } from "./timetable";
import type { TimetableSlot } from "./types";

/**
 * Desktop layout: a time column plus one column per track.
 *
 * A real table earns its keep here — the cells genuinely are a time × track
 * matrix, colSpan gives the 休憩 / 懇親会 rows their full-width cell for free,
 * and cells in a row are the same height, which is what lines the survey links
 * up across the two columns of a slot. `border-separate` + `border-spacing`
 * produces the 14px gutter the design has between every cell (including a
 * 14px inset all round, so the card's own padding is 14px short of the 50px
 * the design shows).
 */
export function TimetableGrid() {
  return (
    <table className="hidden w-full table-fixed border-separate border-spacing-[14px] lg:table">
      <caption className="sr-only">タイムテーブル</caption>
      <colgroup>
        <col className="w-[100px]" />
        {tracks.map((track) => (
          <col key={track.id} />
        ))}
      </colgroup>

      <thead>
        <tr>
          <th scope="col">
            <span className="sr-only">時間</span>
          </th>
          {tracks.map((track) => (
            <th
              key={track.id}
              scope="col"
              className={cn(
                "rounded-[8px] px-4 py-[10px] text-fk-white",
                TRACK_THEMES[track.id].header,
              )}
            >
              <span className="text-[16px] font-bold leading-[22px]">
                {track.name}
              </span>
              <span className="ml-2 text-[13px] font-bold leading-[22px]">
                {track.hall}
              </span>
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {timetableSlots.map((slot) => (
          <tr key={slot.id}>
            <th
              scope="row"
              className={cn(
                "rounded-[8px] align-middle",
                TIMETABLE_SURFACES.time,
              )}
            >
              <span className="flex flex-col items-center justify-center gap-1 px-2 py-4 font-montserrat text-[15px] font-bold text-fk-text-main">
                <span>{slot.startsAt}</span>
                <span
                  aria-hidden="true"
                  className="block h-3 w-[2px] bg-fk-text-main"
                />
                <span className="sr-only">〜</span>
                <span>{slot.endsAt}</span>
              </span>
            </th>
            <SlotCells slot={slot} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** The track columns of one row — talks, or a single cell spanning them all. */
function SlotCells({ slot }: { slot: TimetableSlot }) {
  if (slot.kind === "break") {
    return (
      <td
        colSpan={tracks.length}
        className={cn(
          "rounded-[8px] px-4 py-4 text-center align-middle text-[14px] font-bold text-fk-text-main",
          TIMETABLE_SURFACES.unavailable,
        )}
      >
        {slot.label}
      </td>
    );
  }

  if (slot.kind === "shared") {
    return (
      <td
        colSpan={tracks.length}
        className="rounded-[8px] border-2 border-fk-green bg-fk-white px-4 py-3 text-center align-middle"
      >
        <span className="block text-[14px] font-bold text-fk-text-main">
          {slot.label}
        </span>
        {slot.note && (
          <span className="mt-1 block text-[12px] font-bold text-fk-text-main">
            {slot.note}
          </span>
        )}
      </td>
    );
  }

  return (
    <>
      {tracks.map((track) => {
        const session = slot.sessions[track.id];

        if (!session) {
          return (
            <td
              key={track.id}
              className={cn(
                "rounded-[8px] px-4 py-4 text-center align-middle text-[14px] font-bold text-fk-text-main",
                TIMETABLE_SURFACES.unavailable,
              )}
            >
              セッションなし
            </td>
          );
        }

        return (
          // h-px + h-full on the card is the standard way to make a cell's
          // child fill the row height in every browser; the row still grows to
          // fit its content. Without it the card would not stretch and the
          // survey link could not sit on the card's bottom edge.
          <td key={track.id} className="h-px p-0 align-top">
            <SessionCard
              session={session}
              trackId={track.id}
              className="h-full"
            />
          </td>
        );
      })}
    </>
  );
}
