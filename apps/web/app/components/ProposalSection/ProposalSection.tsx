export function ProposalSection() {
  return (
    <div id="proposal" className="relative font-sans">
      {/* Union.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/Union.svg')] before:bg-contain before:bg-no-repeat before:right-[-96px] before:top-[-112px] before:h-[108px] before:w-[110px] before:translate-x-24 before:translate-y-[70px]"
        aria-hidden="true"
      />
      {/* react.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/react.svg')] before:bg-contain before:bg-no-repeat before:left-[-80px] before:top-1/2 before:h-[108px] before:w-[110px] before:-translate-x-[110px] before:-translate-y-1/2"
        aria-hidden="true"
      />

      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          プロポーザル
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[15px]">
          proposal
        </p>
      </header>

      <div className="mt-[38px] grid text-center">
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.75] font-bold">
          プロポーザルの募集を締め切りました。
        </p>
        <p className="mt-[30px] m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.75] font-bold">
          たくさんのご応募をいただき、誠にありがとうございました。
        </p>
      </div>
    </div>
  );
}
