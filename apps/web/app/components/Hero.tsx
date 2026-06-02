import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full max-w-[1140px] mx-auto mt-5 min-h-[340px] sm:min-h-[560px] relative grid place-items-center px-3 pt-6 pb-0 sm:pb-[150px]">
      <div className="m-0 text-center flex flex-col gap-[6px]">
        <Image
          src="/logo_ol.svg"
          alt="Frontend Conference Kansai 2026"
          width={670}
          height={380}
          priority
          className="w-[340px] h-auto md:w-[670px]"
        />
      </div>

      <div className="absolute bottom-[-30px] sm:bottom-0 left-1/2 -translate-x-1/2 bg-fk-white rounded-[10px] px-5 py-3 sm:px-[50px] box-border max-w-[90vw] sm:max-w-none w-max">
        <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1 text-fk-text-main text-sm sm:text-base font-bold leading-[1.4] [&+&]:mt-2">
          <Image
            src="/calendar-regular.svg"
            alt="calendar regular mark"
            width={45}
            height={35}
            priority
            className="shrink-0 w-[27px] h-[20px] sm:w-[45px] sm:h-[35px]"
          />
          <strong className="hidden sm:inline text-fk-text-main min-w-[42px] shrink-0">
            開催日
          </strong>
          <span>
            2026/10/12 (月・<span className="text-fk-accent-red">祝</span>)
            10:00〜20:00
          </span>
        </p>
        <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1 text-fk-text-main text-sm sm:text-base font-bold leading-[1.4] [&+&]:mt-2">
          <Image
            src="/calendar-loc-mark.svg"
            alt="calendar location mark"
            width={45}
            height={35}
            priority
            className="shrink-0 w-[27px] h-[20px] sm:w-[45px] sm:h-[35px]"
          />
          <strong className="hidden sm:inline text-fk-text-main min-w-[42px] shrink-0">
            会場
          </strong>
          <span>コングレスクエア グラングリーン大阪</span>
        </p>
      </div>

      <div className="sm:hidden absolute left-1/2 -translate-x-1/2 bottom-[-124px] text-center text-fk-accent-brown animate-[scrollGlow_1.15s_ease-in-out_infinite]">
        <p className="m-0 text-[18px] leading-none font-barlow font-black tracking-[-0.03em]">
          scroll
        </p>
        <p className="m-0 mt-[4px] text-[10px] leading-[1.1] font-montserrat font-black">
          ▼<br />▼<br />▼
        </p>
      </div>
    </section>
  );
}
