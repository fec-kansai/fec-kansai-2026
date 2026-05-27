import { ContentSection } from "./components/ContentSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WaveDivider } from "./components/WaveDivider";
import { infoLinks, navItems, sponsorLinks } from "./constants";
import styles from "./page.module.css";

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.headerWrapper}>
        <Header navItems={navItems} />
        <Hero />
      </div>
      <WaveDivider />
      <ContentSection />
      <Footer sponsorLinks={sponsorLinks} infoLinks={infoLinks} />
    </main>
  );
}
