import { StaffCard } from "./StaffCard";
import { eventDayStaffList } from "./event-day-staff";

export function EventDayStaffSection() {
  return (
    <div id="event-day-staff" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-green font-extrabold">
          当日スタッフ
        </h2>
      </header>

      <div className="mt-[44px] flex flex-wrap justify-center gap-6">
        {eventDayStaffList.map((staff) => (
          <div
            key={staff.displayName}
            className="basis-[calc((100%-3rem)/3)] md:basis-[calc((100%-7.5rem)/6)]"
          >
            <StaffCard staff={staff} />
          </div>
        ))}
      </div>
    </div>
  );
}
