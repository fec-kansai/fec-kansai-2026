import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SideEventSection } from "./components/SideEventSection/SideEventSection";
import { WaveDivider } from "./components/WaveDivider";
import { infoLinks, navItems } from "./constants";

export default function Page() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
      {/*
        Yellow header band with a decorative SVG drawn on the ::before layer. Mobile: min-h-[145.6vw] 
        keeps the band's height of the viewport width, matching the 375px-wide design mock so the SVG fills the band at 
        100% width without distortion. The SVG is capped to its native 375px andcentered (before:max-w-[375px] / mx-auto); 
        Desktop (md): the cap switches to the SVG's native 1440x744 and centers it, so the art never scales up past 
        its design size on very wide screens.
      */}
      <div className="bg-fk-yellow-band pt-0 px-0 md:px-3 md:pt-6 md:pb-0 min-h-[25.6vw] md:min-h-0">
        <Header navItems={navItems} />
        <Hero />
      </div>
      <WaveDivider />
      <SideEventSection />
      <Footer infoLinks={infoLinks} />
    </main>
  );
}
