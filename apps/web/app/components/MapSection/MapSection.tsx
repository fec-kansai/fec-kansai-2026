import Image from "next/image";
import styles from "./MapSection.module.css";

export function MapSection() {
  return (
    <div id="access" className={styles.mapSection}>
      <span className={styles.decorMap} aria-hidden="true" />
      <span className={styles.decorCSS} aria-hidden="true" />

      <header className={styles.header}>
        <h2 className={styles.title}>開催日程</h2>
        <p className={styles.subtitle}>schedule</p>
      </header>

      <div className={styles.info}>
        <div className={styles.row}>
          <span className={styles.badge}>開催日</span>
          <p className={styles.text}>
            2026/10/12 (月・<span className={styles.holiday}>祝</span>) 10:00 ～
            20:00 <small>(予定)</small>
          </p>
        </div>
        <div className={styles.row}>
          <span className={styles.badge}>会場</span>
          <p className={`${styles.text} ${styles.venue}`}>
            コングレスクエア グラングリーン大阪
            <a
              href="https://www.google.com/maps?q=%E3%82%B3%E3%83%B3%E3%82%B0%E3%83%AC%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E5%A4%A7%E9%98%AA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Googleマップで会場を開く"
            >
              <Image
                src="/Vector.svg"
                alt=""
                width={18}
                height={18}
                aria-hidden
              />
            </a>
          </p>
        </div>
        <p className={styles.access}>
          JR「大阪駅」直結 <br /> 阪急・阪神・大阪メトロ「梅田駅」から徒歩圏内
        </p>
      </div>

      <div className={styles.mapWrap}>
        <iframe
          className={styles.map}
          title="コングレスクエア グラングリーン大阪 マップ"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=%E3%82%B3%E3%83%B3%E3%82%B0%E3%83%AC%E3%82%B9%E3%82%AF%E3%82%A8%E3%82%A2%20%E3%82%B0%E3%83%A9%E3%83%B3%E3%82%B0%E3%83%AA%E3%83%BC%E3%83%B3%E5%A4%A7%E9%98%AA&z=16&output=embed"
        />
      </div>
    </div>
  );
}
