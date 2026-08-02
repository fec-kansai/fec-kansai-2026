import { MapSection } from "./MapSection/MapSection";
import { OfficialCharacterSection } from "./OfficialCharacterSection/OfficialCharacterSection";
import { ProposalSection } from "./ProposalSection/ProposalSection";
import { SponsorSection } from "./SponsorSection/SponsorSection";
// TODO: 実データが揃うまで一時的にコメントアウト
// import { SponsorsShowcaseSection } from "./SponsorsShowcaseSection/SponsorsShowcaseSection";
// import { individualSponsors, optionSponsorCategories, sponsorTiers } from "../constants";
import { TicketSection } from "./TicketSection/TicketSection";
import { UnboundedSection } from "./UnboundedSection/UnboundedSection";

export function ContentSection() {
  return (
    <section className="min-h-[300px] bg-fk-yellow-soft pt-16 pb-24 sm:pt-[100px] sm:pb-[200px]">
      <div className="flex justify-center flex-col mx-auto gap-16 sm:gap-[100px] max-w-[904px] px-4 min-[904px]:px-0">
        <UnboundedSection />

        <div className="bg-fk-white rounded-[10px] py-8 px-5 sm:py-[48px] sm:px-[56px] flex-1 relative">
          <MapSection />
        </div>

        <div className="bg-fk-white rounded-[10px] py-8 px-5 sm:py-[48px] sm:px-[56px] flex-1 relative">
          <ProposalSection />
        </div>

        <div className="bg-fk-white rounded-[10px] py-8 px-5 sm:py-[48px] sm:px-[56px] flex-1 relative">
          <SponsorSection />
        </div>

        {/* TODO: 実データが揃うまで一時的にコメントアウト（揃ったら上の SponsorSection と差し替え） */}
        {/* <div className="flex-1 relative">
          <SponsorsShowcaseSection
            tiers={sponsorTiers}
            optionCategories={optionSponsorCategories}
            individualSponsors={individualSponsors}
          />
        </div> */}

        <div className="bg-fk-white rounded-[10px] py-8 px-5 sm:py-[48px] sm:px-[56px] flex-1 relative">
          <TicketSection />
        </div>

        {/* TODO: Uncomment this when the official character section is ready */}
        <div className="bg-fk-white rounded-[10px] py-8 px-5 sm:py-[48px] sm:px-[56px] flex-1 relative">
          <OfficialCharacterSection />
        </div>
      </div>
    </section>
  );
}
