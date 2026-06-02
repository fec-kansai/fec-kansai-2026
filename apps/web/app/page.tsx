import { ContentSection } from "./components/ContentSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WaveDivider } from "./components/WaveDivider";
import { infoLinks, navItems, organizationLink } from "./constants";

export default function Page() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
      {/* Yellow header band with decorative background SVG */}
      <div className="bg-fk-yellow-band pt-0 md:pt-[30px] px-0 md:px-3 pb-[150px] md:pb-0 min-h-[145.6vw] md:min-h-0 relative z-[3] before:content-[''] before:absolute before:inset-0 before:-inset-x-px before:top-0 before:-bottom-px before:bg-[url('/header-bg-mobile.svg')] before:bg-[length:100%_auto] before:bg-no-repeat before:bg-top before:max-w-[375px] before:mx-auto md:before:bg-[url('/header-bg.svg')] md:before:bg-no-repeat md:before:bg-[length:100%_auto] md:before:bg-[position:0_0] md:before:max-w-[1440px] md:before:max-h-[744px] md:before:mx-auto">
        <Header navItems={navItems} />
        <Hero />
      </div>
      <WaveDivider />
      <ContentSection />
      <Footer infoLinks={infoLinks} organizationLink={organizationLink} />
    </main>
  );
}
