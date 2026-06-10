import { sideEvents } from "../../constants";
import { SideEventCard } from "./SideEventCard";

/**
 * Renders the list of side-event cards. The section is purely a loop over
 * `sideEvents` data — to add, remove or edit an event, change constants.ts only.
 */
export function SideEventSection() {
  return (
    <section
      id="side_events"
      className="min-h-[300px] bg-fk-yellow-soft pt-[43px] pb-24 sm:pt-[100px] sm:pb-[200px]"
    >
      <div className="mx-auto flex max-w-[904px] flex-col gap-16 px-4 sm:gap-[100px] min-[904px]:px-0">
        {sideEvents.map((event, index) => (
          <SideEventCard key={event.id} event={event} index={index} />
        ))}
      </div>
    </section>
  );
}
