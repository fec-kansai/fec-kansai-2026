import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import type { SponsorMascot } from "../SponsorsSection/ColoredTakoyan";
import { SponsorTierHeader } from "../SponsorsSection/SponsorTierHeader";

// 個人スポンサー — a simple name list under the 個人スポンサー heading.
const individualSponsors: { id: string; name: string }[] = [
  { id: "individual-1", name: "スポンサー名入ります" },
  { id: "individual-2", name: "スポンサー名入ります" },
  { id: "individual-3", name: "スポンサー名入ります" },
  { id: "individual-4", name: "スポンサー名入ります" },
  { id: "individual-5", name: "スポンサー名入ります" },
];

// 「スポンサー一覧はこちら」の遷移先。専用ページ公開時に差し替え。
const sponsorListLink = "#";

type Sponsor = {
  name: string;
  logoSrc: string;
  url?: string;
};

type OptionGroup = {
  key: string;
  title: string;
  /** Tailwind grid column classes for this group's slot grid. */
  columns: string;
  /** Number of empty slots to render while sponsors are not yet published. */
  placeholderCount: number;
  /** Extra classes on each slot box (e.g. to constrain the width of a lone card). */
  slotClassName?: string;
  /** Fixed sponsors, once announced. Falls back to placeholder slots when empty. */
  sponsors?: Sponsor[];
};

type SponsorGroup = OptionGroup & {
  /** Takoyan mascot shape + colour shown next to the tier heading. */
  variant: SponsorMascot;
};

// メインスポンサー（Gold / Silver / Bronze）
const mainTiers: SponsorGroup[] = [
  {
    key: "gold",
    title: "Gold Sponsors",
    variant: "gold",
    columns: "grid-cols-1 sm:grid-cols-2",
    placeholderCount: 5,
  },
  {
    key: "silver",
    title: "Silver Sponsors",
    variant: "silver",
    columns: "grid-cols-2 sm:grid-cols-3",
    placeholderCount: 5,
  },
  {
    key: "bronze",
    title: "Bronze Sponsors",
    variant: "bronze",
    columns: "grid-cols-3 sm:grid-cols-4",
    placeholderCount: 6,
  },
];

// オプションスポンサー
const optionGroups: OptionGroup[] = [
  {
    key: "makuai-cm",
    title: "幕間CM",
    columns: "grid-cols-3 sm:grid-cols-4",
    placeholderCount: 6,
  },
  {
    key: "back-panel",
    title: "バックパネル",
    columns: "grid-cols-3 sm:grid-cols-4",
    placeholderCount: 4,
  },
  {
    key: "name-card",
    title: "ネームカード",
    columns: "grid-cols-1 justify-items-center",
    placeholderCount: 1,
    slotClassName: "max-w-[320px]",
  },
  {
    key: "session-room-naming",
    title: "セッションルームネーミングライツ",
    columns: "grid-cols-[repeat(2,minmax(0,320px))] justify-center",
    placeholderCount: 2,
  },
  {
    key: "sponsor-booth",
    title: "スポンサーブース",
    columns: "grid-cols-3 sm:grid-cols-4",
    placeholderCount: 12,
  },
  {
    key: "sponsor-session",
    title: "スポンサーセッション",
    columns: "grid-cols-3 sm:grid-cols-4",
    placeholderCount: 12,
  },
  {
    key: "lunch",
    title: "ランチ",
    columns: "grid-cols-[repeat(2,minmax(0,320px))] justify-center",
    placeholderCount: 2,
  },
  {
    key: "party",
    title: "懇親会",
    columns: "grid-cols-3 sm:grid-cols-4",
    placeholderCount: 4,
  },
  {
    key: "coffee",
    title: "コーヒー",
    columns: "grid-cols-1 justify-items-center",
    placeholderCount: 1,
    slotClassName: "max-w-[320px]",
  },
  {
    key: "student-support",
    title: "学生支援",
    columns: "grid-cols-2 sm:grid-cols-3",
    placeholderCount: 5,
  },
];

function SponsorSlot({
  sponsor,
  className = "",
}: {
  sponsor?: Sponsor;
  /** Extra classes on the slot box (e.g. to constrain the width of a lone card). */
  className?: string;
}) {
  const box = `flex aspect-[16/9] w-full items-center justify-center rounded-[8px] bg-fk-white shadow-[0_2px_10px_rgba(51,51,51,0.06)] ${className}`;

  if (!sponsor) {
    return <div className={box} aria-hidden="true" />;
  }

  const logo = (
    <Image
      src={sponsor.logoSrc}
      alt={sponsor.name}
      width={220}
      height={124}
      className="max-h-[80%] max-w-[80%] object-contain"
    />
  );

  if (sponsor.url) {
    return (
      <Link
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={sponsor.name}
        className={`${box} transition-opacity hover:opacity-80`}
      >
        {logo}
      </Link>
    );
  }

  return <div className={box}>{logo}</div>;
}

function SponsorGroupBlock({ group }: { group: SponsorGroup }) {
  const slots: (Sponsor | undefined)[] =
    group.sponsors && group.sponsors.length > 0
      ? group.sponsors
      : Array.from({ length: group.placeholderCount });

  return (
    <div>
      <SponsorTierHeader heading={group.title} variant={group.variant} />

      <div className={`mt-8 grid gap-4 sm:gap-5 ${group.columns}`}>
        {slots.map((sponsor, index) => (
          <SponsorSlot
            key={sponsor ? sponsor.name : `${group.key}-slot-${index}`}
            sponsor={sponsor}
          />
        ))}
      </div>
    </div>
  );
}

export function SponsorsShowcaseSection() {
  return (
    <div id="sponsor" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          スポンサー
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[15px]">
          sponsor
        </p>
      </header>

      <div className="mt-[38px] text-center">
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          X月XX日(金)をもちまして、スポンサー募集を終了いたしました。
        </p>
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          ご応募いただいた企業の皆さま、誠にありがとうございます！
        </p>
      </div>

      {/* メインスポンサー */}
      <div className="mt-[44px] flex flex-col gap-12 sm:gap-14">
        {mainTiers.map((group) => (
          <SponsorGroupBlock key={group.key} group={group} />
        ))}
      </div>

      {/* オプションスポンサー */}
      <div className="mt-16 sm:mt-[72px]">
        <SponsorTierHeader heading="オプションスポンサー" variant="red" />

        <div className="mt-10 flex flex-col gap-12 sm:gap-14">
          {optionGroups.map((group) => (
            <div key={group.key}>
              <p className="m-0 mb-5 text-center font-montserrat text-fk-green text-[14px] sm:text-[16px] font-bold">
                {group.title}
              </p>
              <div className={`grid gap-4 sm:gap-5 ${group.columns}`}>
                {Array.from({ length: group.placeholderCount }).map(
                  (_, index) => (
                    <SponsorSlot
                      key={`${group.key}-slot-${index}`}
                      className={group.slotClassName}
                    />
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 個人スポンサー */}
      <div className="mt-16 sm:mt-[72px]">
        <SponsorTierHeader heading="個人スポンサー" variant="red" />

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 p-0">
          {individualSponsors.map((sponsor) => (
            <li
              key={sponsor.id}
              className="list-none font-montserrat text-[16px] font-bold text-fk-text-main sm:text-[18px]"
            >
              {sponsor.name}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="fkSolid"
            className="min-w-0 h-12 px-10 text-[15px] sm:text-[16px]"
          >
            <Link href={sponsorListLink} aria-label="スポンサー一覧はこちら">
              スポンサー一覧はこちら
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
