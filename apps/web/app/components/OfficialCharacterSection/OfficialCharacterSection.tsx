import Image from "next/image";
import styles from "./OfficialCharacterSection.module.css";

export function OfficialCharacterSection() {
  return (
    <div className={styles.officialCharacterSection}>
      <header className={styles.header}>
        <h2 className={styles.title}>公式キャラクター</h2>
        <p className={styles.subtitle}>official character</p>
      </header>

      <div className={styles.contentRow}>
        <div className={styles.visual}>
          <Image
            src="/tako-character.svg"
            alt="公式キャラクター"
            width={190}
            height={162}
            className={styles.characterImage}
          />
        </div>

        <div className={styles.copy}>
          <h3 className={styles.name}>名前が入ります</h3>
          <p>フロントエンド星から降り立った謎のタコ。</p>
          <p>プロフィールが入ります。</p>
          <p>プロフィールが入ります。プロフィールが入ります。</p>
          <p>プロフィールが入ります。プロフィールが入ります。</p>
        </div>
      </div>

      <span className={styles.decorLrv} />
    </div>
  );
}
