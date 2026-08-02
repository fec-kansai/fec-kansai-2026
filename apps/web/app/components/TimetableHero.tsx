import Image from "next/image";

/**
 * Hero for the /timetable route: the タイムテーブル lockup on the yellow band.
 *
 * TODO: swap for the exported lockup. SideEventHero and SponsorPageHero each
 * render a single hand-lettered SVG; the equivalent for this page has not been
 * exported from Figma yet, so the mascots (the real asset, mirrored on the
 * left) are composed here with the title set in the site font. Once
 * public/timetable-logo.svg lands, replace the whole lockup with one <Image>.
 */
export function TimetableHero() {
  return (
    <section className="w-full max-w-[1140px] mx-auto mt-5 sm:mt-5 min-h-[70px] sm:min-h-[10px] relative grid place-items-center px-3 sm:pt-3">
      <div className="flex items-center justify-center gap-3 sm:gap-6">
        <Image
          src="/tako-character.svg"
          alt="公式キャラクターたこやん"
          width={190}
          height={163}
          priority
          className="h-auto w-[56px] -scale-x-100 sm:w-[95px]"
        />
        <h1 className="m-0 text-[28px] font-extrabold leading-none tracking-[0.06em] text-fk-green sm:text-[52px]">
          タイムテーブル
        </h1>
        <Image
          src="/tako-character.svg"
          alt="公式キャラクターたこやん"
          width={190}
          height={163}
          priority
          className="h-auto w-[56px] sm:w-[95px]"
        />
      </div>
    </section>
  );
}
