import styles from "./UnboundedSection.module.css";

export function UnboundedSection() {
  return (
    <div id="message" className={styles.unbounded} data-unbounded>
      <div className={styles.left}>
        <h2 className={styles.title}>Frontend, Unbounded.</h2>
        <p className={styles.subtitle}>フロントエンドは、みんなの話やで。</p>
      </div>

      <div className={styles.divider} aria-hidden="true" />

      <div className={styles.right}>
        <p className={styles.line}>UIを描く人。体験を設計する人。</p>
        <p className={styles.line}>コードを書く人。プロダクトを問う人。</p>
        <p className={styles.line}>
          画面の向こうに立つすべての人へ、関西から。
        </p>
        <p className={styles.caption}>
          フロントエンドカンファレンス関西2026
          <br />
          実行委員長 いずりー
        </p>
      </div>
    </div>
  );
}
