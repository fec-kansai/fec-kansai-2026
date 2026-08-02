import { notFound } from "next/navigation";

/**
 * The /sponsors page is not public yet (placeholder data). The nav link is
 * commented out, but the route is still reachable by direct URL — so return 404
 * until the real sponsor data lands. To re-enable, delete this and restore the
 * implementation below. Meanwhile the page can be previewed in Storybook
 * (Sponsors/SponsorsSection).
 */
export default function SponsorsPage() {
  notFound();
}

// import { Header } from "../components/Header";
// import { SponsorPageHero } from "../components/SponsorPageHero";
// import { SponsorsSection } from "../components/SponsorsSection/SponsorsSection";
// import { individualSponsors, optionSponsorCategories, sponsorTiers } from "../constants";
// import { WaveDivider } from "../components/WaveDivider";
// import { navItems } from "../constants";
//
// export default function SponsorsPage() {
//   return (
//     <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
//       <div className="bg-fk-yellow-band pt-0 px-0 md:px-3 md:pt-6 md:pb-0 min-h-[25.6vw] md:min-h-0">
//         <Header navItems={navItems} />
//         <SponsorPageHero />
//       </div>
//       <WaveDivider />
//       <SponsorsSection
//         tiers={sponsorTiers}
//         optionCategories={optionSponsorCategories}
//         individualSponsors={individualSponsors}
//       />
//     </main>
//   );
// }
