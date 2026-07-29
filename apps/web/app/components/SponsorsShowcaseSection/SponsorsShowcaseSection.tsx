import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import type { SponsorMascot } from "../SponsorsSection/ColoredTakoyan";
import { OptionSponsors } from "../SponsorsSection/OptionSponsors";
import { SponsorSlotRow } from "../SponsorsSection/SponsorLogoGrid";
import { SponsorTierHeader } from "../SponsorsSection/SponsorTierHeader";
import {
  individualSponsors,
  optionSponsorCategories,
  sponsorTiers,
} from "../SponsorsSection/sponsors";
import type { Sponsor, SponsorTierId } from "../SponsorsSection/types";

// 「スポンサー一覧はこちら」の遷移先。専用ページ公開時に差し替え。
const sponsorListLink = "#sponsors";

// メインスポンサー: 表示順とマスコット。列幅（＝1行あたりの最大枚数）は variant で
// 決まる（TIER_CARD_BASIS）— ゴールドほど大きく、1行に少なく。データ側に style は
// 持たせない。
const tierSections: { id: SponsorTierId; variant: SponsorMascot }[] = [
  { id: "gold", variant: "gold" },
  { id: "silver", variant: "silver" },
  { id: "bronze", variant: "bronze" },
];

// variant ごとのカード幅（flex-basis）。中央寄せ flex-wrap で最大列数を決める。
const TIER_CARD_BASIS: Record<SponsorMascot, string> = {
  gold: "basis-full sm:basis-[calc(50%-10px)]",
  silver: "basis-[calc(50%-8px)] sm:basis-[calc(33.333%-14px)]",
  bronze: "basis-[calc(33.333%-11px)] sm:basis-[calc(25%-15px)]",
  red: "basis-[calc(33.333%-11px)] sm:basis-[calc(25%-15px)]",
};

// id → sponsors / heading for the tiers.
const sponsorsById = new Map<string, Sponsor[]>();
const headingById = new Map<string, string>();
for (const tier of sponsorTiers) {
  sponsorsById.set(tier.id, tier.sponsors);
  headingById.set(tier.id, tier.heading);
}

// 学生支援 is a tier in the SSoT, but on the LP it is shown inside the option
// section — append it as one more group after the option categories.
const studentTier = sponsorTiers.find((tier) => tier.id === "student");
const optionGroups = studentTier
  ? [...optionSponsorCategories, studentTier]
  : optionSponsorCategories;

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
        {tierSections.map(({ id, variant }) => (
          <div key={id}>
            <SponsorTierHeader
              heading={headingById.get(id) ?? ""}
              variant={variant}
            />
            <div className="mt-8">
              <SponsorSlotRow
                sponsors={sponsorsById.get(id) ?? []}
                basis={TIER_CARD_BASIS[variant]}
              />
            </div>
          </div>
        ))}
      </div>

      {/* オプションスポンサー（共通コンポーネント） */}
      <div className="mt-16 sm:mt-[72px]">
        <OptionSponsors groups={optionGroups} />
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
            <Link href={sponsorListLink} aria-label="スポンサー一覧をみる">
              スポンサー一覧はこちら
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
