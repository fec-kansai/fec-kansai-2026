import Image from "next/image";
import styles from "./TicketSection.module.css";

export function TicketSection() {
  return (
    <div id="ticket" className={styles.ticketSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>チケット情報</h2>
        <p className={styles.subtitle}>ticket</p>
      </header>

      <div className={styles.visualWrap}>
        <Image
          src="/coming-soon.png"
          alt=""
          width={384}
          height={165}
          aria-hidden
          className={styles.comingSoonImage}
        />
        <Image
          src="/Octopus.svg"
          alt=""
          width={164}
          height={164}
          aria-hidden
          className={styles.octopusImage}
        />
      </div>

      <span className={styles.decorVue} />
    </div>
  );
}
