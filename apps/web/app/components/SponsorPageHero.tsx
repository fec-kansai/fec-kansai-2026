import Image from "next/image";

/** Hero for the /sponsors route: just the スポンサー logo on the yellow band. */
export function SponsorPageHero() {
  return (
    <section className="w-full max-w-[1140px] mx-auto mt-5 sm:mt-5 min-h-[70px] sm:min-h-[10px] relative grid place-items-center px-3 sm:pt-3">
      <div className="m-0 text-center flex flex-col gap-[6px]">
        <Image
          src="/sponsor-page-logo.svg"
          alt="スポンサー | Frontend Conference Kansai 2026"
          width={488}
          height={85}
          priority
          className="w-[260px] h-auto md:w-[488px]"
        />
      </div>
    </section>
  );
}
