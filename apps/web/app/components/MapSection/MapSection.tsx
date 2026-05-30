import Image from "next/image";

export function MapSection() {
  return (
    <div id="access" className="relative font-sans">
      {/* html.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/html.svg')] before:bg-contain before:bg-no-repeat before:right-[-124px] before:top-[-86px] before:h-[150px] before:w-[110px] before:translate-x-[65%] before:-translate-y-[5%] before:rotate-[-7deg]"
        aria-hidden="true"
      />
      {/* css.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/css.svg')] before:bg-contain before:bg-no-repeat before:left-[-87px] before:top-1/2 before:h-[112px] before:w-[110px] before:-translate-x-[68px] before:-translate-y-1/2"
        aria-hidden="true"
      />

      <header className="text-center">
        <h2 className="m-0 text-[28px] leading-[1.1] text-fk-text-main font-extrabold max-[900px]:text-[34px]">
          開催日程
        </h2>
        <p className="mt-1 mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[16px]">
          schedule
        </p>
      </header>

      <div className="mt-[38px] flex justify-center">
        <div>
          <div className="grid grid-cols-[auto_1fr] items-center gap-[14px]">
            <span className="min-w-[86px] bg-fk-green text-fk-white rounded-full text-base font-bold grid justify-center px-5 py-[6px] box-border leading-[15px]">
              開催日
            </span>
            <p className="m-0 text-[18px] leading-[1.3] font-bold max-[900px]:text-[22px]">
              2026/10/12 (月・<span className="text-fk-accent-red">祝</span>)
              10:00 ～ 20:00{" "}
              <small className="text-[18px] font-bold max-[900px]:text-[14px]">
                (予定)
              </small>
            </p>
          </div>
          <div className="grid grid-cols-[auto_1fr] items-center gap-[14px] mt-[14px]">
            <span className="min-w-[86px] bg-fk-green text-fk-white rounded-full text-base font-bold grid justify-center px-5 py-[6px] box-border leading-[15px]">
              会場
            </span>
            <p className="m-0 text-[18px] leading-[1.3] font-bold inline-flex items-center gap-2 max-[900px]:text-[22px]">
              コングレスクエア グラングリーン大阪
              <a
                href="https://www.google.com/maps?q=%E3%82%B3%E3%83%B3%E3%82%B0%E3%83%AC%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E5%A4%A7%E9%98%AA"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Googleマップで会場を開く"
              >
                <Image
                  src="/Vector.svg"
                  alt="Google Maps button"
                  width={18}
                  height={18}
                  aria-hidden
                />
              </a>
            </p>
          </div>
          <p className="mt-[10px] mb-0 ml-[100px] text-fk-text-main text-xs leading-[1.4] max-[900px]:ml-0 max-[900px]:text-[13px]">
            JR「大阪駅」直結 <br /> 阪急・阪神・大阪メトロ「梅田駅」から徒歩圏内
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[6px] border border-[#dbdbdb]">
        <iframe
          className="block w-full h-[420px] border-0 max-[900px]:h-[300px]"
          title="コングレスクエア グラングリーン大阪 マップ"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=%E3%82%B3%E3%83%B3%E3%82%B0%E3%83%AC%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E5%A4%A7%E9%98%AA&z=16&output=embed"
        />
      </div>
    </div>
  );
}
