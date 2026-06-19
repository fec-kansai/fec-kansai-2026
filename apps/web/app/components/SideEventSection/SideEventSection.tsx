import { SideEventCard } from "./SideEventCard";
import { sideEvents } from "./sideEvents";
import { getSideEventStatus } from "./status";

/**
 * Renders the list of side-event cards. The section is purely a loop over
 * `sideEvents` data — to add, remove or edit an event, change sideEvents.ts only.
 *
 * `now` is captured once here so every card resolves its status against the same
 * instant. This runs on the server; the page sets `revalidate` so the date-driven
 * "ended" ribbon flips automatically over time.
 */
export function SideEventSection() {
  const now = new Date();

  return (
    <section
      id="side_events"
      className="min-h-[300px] bg-fk-yellow-soft pt-[43px] pb-24 sm:pt-[100px] sm:pb-[200px]"
    >
      <div className="mx-auto flex max-w-[904px] flex-col gap-16 px-4 sm:gap-[100px] min-[904px]:px-0">
        {sideEvents.map((event, index) => (
          <SideEventCard
            key={event.id}
            event={event}
            index={index}
            status={getSideEventStatus(event, now)}
          />
        ))}
      </div>
    </section>
  );
}
