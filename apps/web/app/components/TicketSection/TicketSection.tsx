import Image from "next/image";

export function TicketSection() {
  return (
    <div id="ticket" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          チケット情報
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat">
          ticket
        </p>
      </header>

      <div className="mt-[42px] mx-auto max-w-[560px] flex items-end justify-center gap-3 md:gap-7">
        <Image
          src="/coming-soon.png"
          alt="coming soon"
          width={384}
          height={165}
          aria-hidden
          className="w-[220px] h-auto md:w-[min(100%,384px)]"
        />
        <Image
          src="/Octopus.svg"
          alt="octopus"
          width={164}
          height={164}
          aria-hidden
          className="w-[92px] h-auto md:w-[min(100%,164px)]"
        />
      </div>

      {/* vue.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/vue.svg')] before:bg-contain before:bg-no-repeat before:left-[-70px] before:top-1/2 before:h-[148px] before:w-[133px] before:-translate-x-[124px] before:-translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
}
