import type { SponsorMascot } from "./ColoredTakoyan";
import { OptionSponsors } from "./OptionSponsors";
import { SponsorCard } from "./SponsorCard";
import { SponsorTierHeader } from "./SponsorTierHeader";
import type {
  IndividualSponsor,
  OptionSponsorCategory,
  SponsorTier,
  SponsorTierId,
} from "./types";

/** Mascot shape + colour per tier (see SponsorTierHeader). */
const TIER_MASCOT: Record<SponsorTierId, SponsorMascot> = {
  gold: "gold",
  silver: "silver",
  bronze: "bronze",
  student: "red",
};

/**
 * Decorative tech-logo icons per tier, attached to that tier's first card as
 * ::before elements that overflow the card edges (see SponsorCard). "right" =
 * after the card, "left" = before it. Adjust per section here.
 */
const TIER_DECORATIONS: Record<SponsorTierId, string[]> = {
  gold: [
    "before:bg-[url('/html.svg')] before:right-[-110px] before:top-[30px] before:h-[150px] before:w-[110px] before:translate-x-[65%] before:rotate-[-7deg]",
    "before:bg-[url('/css.svg')] before:left-[-87px] before:top-1/2 before:h-[112px] before:w-[110px] before:-translate-x-[98px] before:-translate-y-1/2",
  ],
  silver: [
    "before:bg-[url('/Union.svg')] before:right-[-96px] before:top-[40px] before:h-[108px] before:w-[110px] before:translate-x-24",
    "before:bg-[url('/react.svg')] before:left-[-80px] before:top-1/2 before:h-[108px] before:w-[110px] before:-translate-x-[110px] before:-translate-y-1/2",
  ],
  bronze: [
    "before:bg-[url('/js.svg')] before:right-[-110px] before:top-[-20px] before:h-[108px] before:w-[110px] before:translate-x-[105px]",
  ],
  student: [
    "before:bg-[url('/laravel.svg')] before:right-[-90px] before:top-[50px] before:h-[110px] before:w-[120px] before:translate-x-[100px]",
    "before:bg-[url('/vue.svg')] before:left-[-70px] before:top-1/2 before:h-[148px] before:w-[133px] before:-translate-x-[124px] before:-translate-y-1/2",
  ],
};

/**
 * Renders the sponsor showcase: one group per tier (each a heading + its cards),
 * the shared option-sponsor section, then the 個人スポンサー name list.
 */
type SponsorsSectionProps = {
  tiers: SponsorTier[];
  optionCategories: OptionSponsorCategory[];
  individualSponsors: IndividualSponsor[];
};

export function SponsorsSection({
  tiers,
  optionCategories,
  individualSponsors,
}: SponsorsSectionProps) {
  return (
    <section
      id="sponsors"
      className="min-h-[300px] bg-fk-yellow-soft pt-[43px] pb-24 sm:pt-[80px] sm:pb-[200px]"
    >
      <div className="mx-auto flex max-w-[904px] flex-col gap-4 px-4 sm:gap-[100px] min-[904px]:px-0">
        {/* Tiers nobody has taken yet are skipped — an empty tier would render
            as a heading with nothing under it. */}
        {tiers
          .filter((tier) => tier.sponsors.length > 0)
          .map((tier) => (
            <div key={tier.id} className="flex flex-col gap-8 sm:gap-10">
              <SponsorTierHeader
                heading={tier.heading}
                variant={TIER_MASCOT[tier.id]}
              />
              <div className="flex flex-col gap-6 sm:gap-8">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <SponsorCard
                    key={sponsor.id}
                    sponsor={sponsor}
                    tierId={tier.id}
                    badgeLabel={tier.badgeLabel}
                    // Only the tier's first card carries its decorations.
                    decorations={
                      sponsorIndex === 0 ? TIER_DECORATIONS[tier.id] : []
                    }
                  />
                ))}
              </div>
            </div>
          ))}

        {/* オプションスポンサー — shared with the LP showcase (same data). */}
        <OptionSponsors groups={optionCategories} />

        {/* Individual (personal) sponsors — just a name list. */}
        {individualSponsors.length > 0 && (
          <div className="flex flex-col gap-8 sm:gap-10">
            <SponsorTierHeader heading="個人スポンサー" variant="red" />
            <ul className="flex flex-wrap justify-center gap-y-2 p-0">
              {individualSponsors.map((sponsor) => (
                <li
                  key={sponsor.id}
                  className="mx-[6px] list-none font-montserrat text-[16px] font-bold text-fk-text-main sm:text-[18px]"
                >
                  {sponsor.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
