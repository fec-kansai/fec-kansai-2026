import Image from "next/image";
import type { FooterLink } from "../constants";
import styles from "../page.module.css";

type FooterProps = {
  sponsorLinks: FooterLink[];
  infoLinks: FooterLink[];
};

export function Footer({ sponsorLinks, infoLinks }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <Image
            src="/footer-logo.svg"
            alt="Frontend Conference Kansai 2026"
            width={228}
            height={42}
          />
          <div className={styles.socials}>
            <a href="https://x.com" aria-label="X">
              <Image src="/X-icon.svg" alt="X" width={24} height={24} />
            </a>
            <a href="https://github.com" aria-label="GitHub">
              <Image
                src="/github-icon.svg"
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
            <a href="https://note.com" aria-label="Connpass">
              <Image src="/note-icon.svg" alt="Note" width={24} height={24} />
            </a>
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h2>スポンサー募集</h2>
            {sponsorLinks.map((item) => (
              <a key={item.name} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
          <div>
            <h2>お問い合わせ</h2>
            {infoLinks.map((item) => (
              <a key={item.name} href={item.url}>
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>
          <strong className="mr-[10px]">運営団体</strong> 一般社団法人
          関西経済文化会議
        </p>
        <p>
          © 2026 フロントエンドカンファレンス関西実行委員会. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
