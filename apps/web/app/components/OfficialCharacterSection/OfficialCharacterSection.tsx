import Image from "next/image";

export function OfficialCharacterSection() {
  return (
    <div id="character" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[28px] leading-[1.1] text-fk-text-main font-extrabold max-[900px]:text-[40px]">
          公式キャラクター
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[24px]">
          official character
        </p>
      </header>

      <div className="mt-[34px] grid grid-cols-[280px_1fr] gap-[54px] items-center max-[900px]:grid-cols-1 max-[900px]:gap-5">
        <div className="grid place-items-center">
          <Image
            src="/tako-character.svg"
            alt="公式キャラクター"
            width={190}
            height={162}
            className="w-[min(100%,190px)] h-auto"
          />
        </div>

        <div className="text-fk-text-main">
          <h3 className="m-0 text-[32px] leading-[1.1] font-extrabold max-[900px]:text-[40px]">
            名前が入ります
          </h3>
          <p className="m-0 mt-[18px] text-base leading-[1.5] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            フロントエンド星から降り立った謎のタコ。
          </p>
          <p className="m-0 text-base leading-[1.5] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            プロフィールが入ります。
          </p>
          <p className="m-0 text-base leading-[1.5] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            プロフィールが入ります。プロフィールが入ります。
          </p>
          <p className="m-0 text-base leading-[1.5] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            プロフィールが入ります。プロフィールが入ります。
          </p>
        </div>
      </div>

      {/* lalavel.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/lalavel.svg')] before:bg-contain before:bg-no-repeat before:right-[-87px] before:top-1/2 before:w-[134px] before:h-[161px] before:translate-x-[87px] before:-translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
}
