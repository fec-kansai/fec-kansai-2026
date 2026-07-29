import { SponsorSlotRow } from "./SponsorLogoGrid";
import { SponsorTierHeader } from "./SponsorTierHeader";
import { optionSponsorCategories } from "./sponsors";
import type { OptionSponsorCategory } from "./types";

// Shared option layout: centered, up to 4 columns. Column count grows with the
// number of sponsors — no per-category styling is kept.
const OPTION_CARD_BASIS =
  "basis-[calc(33.333%-11px)] sm:basis-[calc(25%-15px)]";

/**
 * オプションスポンサー section: the オプションスポンサー heading followed by one
 * centered logo grid per category. Shared by the LP showcase and the /sponsors
 * page so both render option sponsors identically from the same SSoT data.
 *
 * `groups` defaults to `optionSponsorCategories`; callers can pass a different
 * list (e.g. the landing appends the 学生支援 tier as one more group).
 */
export function OptionSponsors({
  groups = optionSponsorCategories,
}: {
  groups?: OptionSponsorCategory[];
}) {
  return (
    <div>
      <SponsorTierHeader heading="オプションスポンサー" variant="red" />

      <div className="mt-10 flex flex-col gap-12 sm:gap-14">
        {groups.map((group) => (
          <div key={group.id}>
            <p className="m-0 mb-5 text-center font-montserrat text-fk-green text-[14px] sm:text-[16px] font-bold">
              {group.heading}
            </p>
            <SponsorSlotRow
              sponsors={group.sponsors}
              basis={OPTION_CARD_BASIS}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
