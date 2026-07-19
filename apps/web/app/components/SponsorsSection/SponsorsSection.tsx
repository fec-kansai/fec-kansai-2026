import { SponsorCard } from "./SponsorCard";
import { SponsorTierHeader } from "./SponsorTierHeader";
import { individualSponsors, sponsorTiers } from "./sponsors";
import type { SponsorTierId } from "./types";

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
 * Renders the sponsor showcase: one group per tier (each a heading + its cards)
 * followed by the 個人スポンサー name list. The section is purely a loop over
 * `sponsorTiers` / `individualSponsors` data — to add, remove or edit a sponsor,
 * change sponsors.ts only.
 */
export function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="min-h-[300px] bg-fk-yellow-soft pt-[43px] pb-24 sm:pt-[80px] sm:pb-[200px]"
    >
      <div className="mx-auto flex max-w-[904px] flex-col gap-4 px-4 sm:gap-[100px] min-[904px]:px-0">
        {sponsorTiers.map((tier) => (
          <div
            key={tier.id}
            // On mobile only Gold is shown in full; Silver and below collapse
            // into the note card below (they reuse Gold's style, see the mock).
            className={`flex-col gap-8 sm:gap-10 ${
              tier.id === "gold" ? "flex" : "hidden sm:flex"
            }`}
          >
            <SponsorTierHeader
              heading={tier.heading}
              iconColor={tier.iconColor}
              variant={tier.id === "gold" ? "gold" : "silver"}
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

        {/* Mobile only: Silver and below are represented by a single note. */}
        <div className="rounded-[20px] bg-fk-white p-6 sm:hidden">
          <p className="m-0 text-[16px] font-bold leading-[1.7] text-fk-text-main">
            シルバー以下はGoldと同様のスタイルでお願い致します
          </p>
        </div>

        {/* Individual (personal) sponsors — just a name list. */}
        <div className="flex flex-col gap-8 sm:gap-10">
          <SponsorTierHeader
            heading="個人スポンサー"
            iconColor="#E54839"
            variant="silver"
          />
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
      </div>
    </section>
  );
}
