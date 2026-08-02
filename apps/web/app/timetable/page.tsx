import { Header } from "../components/Header";
import { TimetableHero } from "../components/TimetableHero";
import { TimetableSection } from "../components/TimetableSection/TimetableSection";
import { WaveDivider } from "../components/WaveDivider";
import { navItems } from "../constants";

export default function TimetablePage() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
      <div className="bg-fk-yellow-band pt-0 px-0 md:px-3 md:pt-6 md:pb-0 min-h-[25.6vw] md:min-h-0">
        <Header navItems={navItems} />
        <TimetableHero />
      </div>
      <WaveDivider />
      <TimetableSection />
    </main>
  );
}
