import Image from "next/image";

export function OfficialCharacterSection() {
  return (
    <div id="character" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          公式キャラクター
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[24px]">
          official character
        </p>
      </header>

      <div className="mt-[34px] grid grid-cols-[280px_1fr] items-center max-[900px]:grid-cols-1 max-[900px]:gap-5">
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
          <h3 className=" max-[900px]:text-center text-start m-0 text-[24px] leading-[1.1] font-extrabold max-[900px]:text-[40px]">
            たこやん
          </h3>
          <p className="m-0 mt-[18px] text-base leading-[1.75] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            フロントエンド星から降り立った謎のタコ。
          </p>
          <p className="m-0 text-base leading-[1.75] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            複数の言語を使いこなし、なんかすごいコードを書くらしい。
          </p>
          <p className="m-0 text-base leading-[1.75] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            たまにたこ焼きをかぶっていたり、虹色だったり、
          </p>
          <p className="m-0 text-base leading-[1.75] font-bold max-[900px]:text-[18px] max-[900px]:leading-[1.65]">
            レアなすがたもあるとかないとか。ライバルは Claude Code のタコ。
          </p>
        </div>
      </div>

      {/* laravel.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/laravel.svg')] before:bg-contain before:bg-no-repeat before:right-[-155px] before:top-1/2 before:h-[134px] before:w-[161px] before:translate-x-[105px] before:-translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
}
