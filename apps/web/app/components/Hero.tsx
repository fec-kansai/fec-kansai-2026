import Image from "next/image";
import styles from "../page.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.title}>
        <Image
          src="/logo_ol.svg"
          alt="Frontend Conference Kansai 2026"
          width={670}
          height={380}
          priority
        />
      </div>

      <div className={styles.infoCard}>
        <p className={styles.infoRow}>
          <Image
            src="/calendar-regular.svg"
            alt="calendar regular mark"
            width={45}
            height={35}
            priority
          />
          <strong className={styles.infoLabel}>開催日</strong>
          <span>
            2026/10/12 (月・<span className={styles.infoLabelRed}>祝</span>)
            10:00〜20:00
          </span>
        </p>
        <p className={styles.infoRow}>
          <Image
            src="/calendar-loc-mark.svg"
            alt="calendar location mark"
            width={45}
            height={35}
            priority
          />
          <strong className={styles.infoLabel}>会場</strong>
          <span>コングレスクエア グラングリーン大阪</span>
        </p>
      </div>
    </section>
  );
}
