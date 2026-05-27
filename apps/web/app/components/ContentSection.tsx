import styles from "../page.module.css";

import { MapSection } from "./MapSection/MapSection";
import { OfficialCharacterSection } from "./OfficialCharacterSection/OfficialCharacterSection";
import { ProposalSection } from "./ProposalSection/ProposalSection";
import { SponsorSection } from "./SponsorSection/SponsorSection";
import { TicketSection } from "./TicketSection/TicketSection";
import { UnboundedSection } from "./UnboundedSection";

export function ContentSection() {
  return (
    <section className={styles.content}>
      <div className={styles.contentWrapper}>
        <UnboundedSection />
        <MapSection />
        <ProposalSection />
        <SponsorSection />
        <TicketSection />
        <OfficialCharacterSection />
      </div>
    </section>
  );
}
