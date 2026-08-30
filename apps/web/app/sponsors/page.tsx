import { Header } from "../components/Header";
import { SponsorPageHero } from "../components/SponsorPageHero";
import { SponsorsSection } from "../components/SponsorsSection/SponsorsSection";
import { WaveDivider } from "../components/WaveDivider";
import {
  individualSponsors,
  navItems,
  optionSponsorCategories,
  sponsorTiers,
} from "../constants";

/**
 * /sponsors — the full sponsor list, driven by the real data in constants.ts.
 * The nav link is still commented out while sponsor info keeps arriving, so the
 * page is reachable by direct URL only.
 */
export default function SponsorsPage() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
      <div className="bg-fk-yellow-band pt-0 px-0 md:px-3 md:pt-6 md:pb-0 min-h-[25.6vw] md:min-h-0">
        <Header navItems={navItems} />
        <SponsorPageHero />
      </div>
      <WaveDivider />
      <SponsorsSection
        tiers={sponsorTiers}
        optionCategories={optionSponsorCategories}
        individualSponsors={individualSponsors}
      />
    </main>
  );
}
