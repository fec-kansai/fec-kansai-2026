import Image from "next/image";

/** Hero for the /timetable route: just the タイムテーブル lockup on the yellow band. */
export function TimetableHero() {
  return (
    <section className="w-full max-w-[1140px] mx-auto mt-5 sm:mt-5 min-h-[70px] sm:min-h-[10px] relative grid place-items-center px-3 sm:pt-3">
      <div className="m-0 text-center flex flex-col gap-[6px]">
        <Image
          src="/timetable-logo.svg"
          alt="タイムテーブル | Frontend Conference Kansai 2026"
          width={590}
          height={89}
          priority
          className="w-[330px] h-auto md:w-[590px]"
        />
      </div>
    </section>
  );
}
