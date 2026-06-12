import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SideEventHero } from "../components/SideEventHero";
import { SideEventSection } from "../components/SideEventSection/SideEventSection";
import { WaveDivider } from "../components/WaveDivider";
import { infoLinks, navItems, organizationLink } from "../constants";

export default function SideEventsPage() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
      <div className="bg-fk-yellow-band pt-0 px-0 md:px-3 md:pt-6 md:pb-0 min-h-[25.6vw] md:min-h-0">
        <Header navItems={navItems} />
        <SideEventHero />
      </div>
      <WaveDivider />
      <SideEventSection />
      <Footer infoLinks={infoLinks} organizationLink={organizationLink} />
    </main>
  );
}
