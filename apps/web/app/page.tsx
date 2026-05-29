import { ContentSection } from "./components/ContentSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WaveDivider } from "./components/WaveDivider";
import { infoLinks, navItems } from "./constants";

export default function Page() {
  return (
    <main className="min-h-svh bg-fk-yellow-soft overflow-hidden font-sans">
      {/* Yellow header band with decorative background SVG */}
      <div className="bg-fk-yellow pt-[30px] px-3 pb-[34px] relative z-[3] before:content-[''] before:absolute before:inset-0 before:bg-[url('/header-bg.svg')] before:bg-contain before:bg-no-repeat before:bg-center">
        <Header navItems={navItems} />
        <Hero />
      </div>
      <WaveDivider />
      <ContentSection />
      <Footer infoLinks={infoLinks} />
    </main>
  );
}
