import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { JobBoardSection } from "../JobBoardSection/JobBoardSection";
import type { SponsorMascot } from "../SponsorsSection/ColoredTakoyan";
import { SponsorSlotRow } from "../SponsorsSection/SponsorLogoGrid";
import { SponsorTierHeader } from "../SponsorsSection/SponsorTierHeader";
import type {
  IndividualSponsor,
  JobBoardEntry,
  OptionSponsorCategory,
  SponsorTier,
  SponsorTierId,
} from "../SponsorsSection/types";

// 「スポンサー一覧はこちら」の遷移先。
const sponsorListLink = "/sponsors";

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

type SponsorsShowcaseSectionProps = {
  tiers: SponsorTier[];
  optionCategories: OptionSponsorCategory[];
  individualSponsors: IndividualSponsor[];
  jobBoardEntries: JobBoardEntry[];
};

export function SponsorsShowcaseSection({
  tiers,
  optionCategories,
  individualSponsors,
  jobBoardEntries,
}: SponsorsShowcaseSectionProps) {
  const tierById = new Map(tiers.map((tier) => [tier.id, tier]));

  // 学生支援 is a tier in the data, but on the LP it is shown inside the option
  // section — append it as one more group after the option categories.
  const studentTier = tiers.find((tier) => tier.id === "student");
  const optionGroups = studentTier
    ? [...optionCategories, studentTier]
    : optionCategories;
  const hasOptionSponsors = optionGroups.some(
    (group) => group.sponsors.length > 0,
  );

  return (
    // The 募集 block above keeps id="sponsor" (the /#sponsor nav anchor), so
    // this one gets its own id.
    <div id="sponsors" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          スポンサー
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[15px]">
          sponsor
        </p>
      </header>

      {/* 二次募集中のため一旦コメントアウト。募集終了後に日付を入れて戻す。 */}
      {/* <div className="mt-[38px] text-center">
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          X月XX日(金)をもちまして、スポンサー募集を終了いたしました。
        </p>
        <p className="m-0 text-fk-text-main text-[14px] sm:text-base leading-[1.65] sm:leading-[1.9] font-bold">
          ご応募いただいた企業の皆さま、誠にありがとうございます！
        </p>
      </div> */}

      {/* メインスポンサー */}
      <div className="mt-[44px] flex flex-col gap-12 sm:gap-14">
        {/* Tiers nobody has taken yet are skipped. */}
        {tierSections
          .filter(({ id }) => (tierById.get(id)?.sponsors.length ?? 0) > 0)
          .map(({ id, variant }) => {
            const tier = tierById.get(id);
            return (
              <div key={id}>
                <SponsorTierHeader
                  heading={tier?.heading ?? ""}
                  variant={variant}
                />
                <div className="mt-8">
                  <SponsorSlotRow
                    sponsors={tier?.sponsors ?? []}
                    basis={TIER_CARD_BASIS[variant]}
                  />
                </div>
              </div>
            );
          })}
      </div>

      {/* 個人スポンサー。一覧が空でも「スポンサー一覧はこちら」は残す。 */}
      <div className="mt-16 sm:mt-[72px]">
        {individualSponsors.length > 0 && (
          <>
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
          </>
        )}

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

      {/* ジョブボード — 掲載企業がいない間は非表示。 */}
      {jobBoardEntries.length > 0 && (
        <div className="mt-16 sm:mt-[72px]">
          <JobBoardSection entries={jobBoardEntries} />
        </div>
      )}
    </div>
  );
}
