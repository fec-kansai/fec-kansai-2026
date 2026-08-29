import Link from "next/link";
import { staffList } from "./staff";

export function StaffSection() {
  return (
    <div id="staff" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          スタッフ
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[15px]">
          staff
        </p>
      </header>

      <div className="mt-[38px] text-center">
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          こんなにもたくさんのスタッフが、イベントを一緒に作っています！
        </p>
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          「関西のフロントエンドを盛り上げたい」その想いのもと、全員でおもてなしします！
        </p>
      </div>

      <div className="mt-[44px] grid grid-cols-6 gap-6">
        {staffList.map(({ displayName, x, icon }) => (
          <Link
            key={displayName}
            href={`/staff/${x}`}
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <img
              src="/takoyan-general.svg"
              alt={displayName}
              className="aspect-square w-32"
            />
            <p className="text-fk-text-main text-[14px] leading-[1.65]">
              {displayName}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
