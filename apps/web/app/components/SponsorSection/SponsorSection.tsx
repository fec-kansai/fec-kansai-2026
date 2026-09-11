export function SponsorSection() {
  return (
    <div id="sponsor" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          スポンサー募集
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[15px]">
          sponsor
        </p>
      </header>

      {/* 2次募集は 2026/9/7 に終了したため、プロポーザルと同じ締め切りの表示。
          再募集する場合の案内文と協賛資料／申し込みフォームのボタンは、
          コミット 35b55a7 以前の履歴から戻せる。 */}
      <div className="mt-[38px] grid text-center">
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.75] font-bold">
          9月7日(月)をもちまして、スポンサーの募集を締め切りました。
        </p>
        <p className="mt-[30px] m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.75] font-bold">
          たくさんのご応募をいただき、誠にありがとうございました。
        </p>
      </div>

      {/* js.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/js.svg')] before:bg-contain before:bg-no-repeat before:right-[-110px] before:top-1/2 before:h-[108px] before:w-[110px] before:translate-x-[105px] before:-translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
}
