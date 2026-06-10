import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full max-w-[1140px] mx-auto mt-5 sm:mt-5 min-h-[70px] sm:min-h-[10px] relative grid place-items-center px-3 sm:pt-3">
      <div className="m-0 text-center flex flex-col gap-[6px]">
        <Image
          src="/side-event-logo.svg"
          alt="Frontend Conference Kansai 2026"
          width={670}
          height={380}
          priority
          className="w-[340px] h-auto md:w-[670px]"
        />
      </div>
    </section>
  );
}
