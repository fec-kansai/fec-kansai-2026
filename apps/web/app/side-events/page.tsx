import { Header } from "../components/Header";
import { SideEventHero } from "../components/SideEventHero";
import { SideEventSection } from "../components/SideEventSection/SideEventSection";
import { WaveDivider } from "../components/WaveDivider";
import { navItems } from "../constants";

/**
 * Re-render on the server at most once an hour so the date-driven "ended" ribbon
 * (see getSideEventStatus) flips automatically after an event ends — no redeploy
 * needed. Without this the page is fully static and the date would freeze at build time.
 */
export const revalidate = 3600;

export default function SideEventsPage() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
      <div className="bg-fk-yellow-band pt-0 px-0 md:px-3 md:pt-6 md:pb-0 min-h-[25.6vw] md:min-h-0">
        <Header navItems={navItems} />
        <SideEventHero />
      </div>
      <WaveDivider />
      <SideEventSection />
    </main>
  );
}
