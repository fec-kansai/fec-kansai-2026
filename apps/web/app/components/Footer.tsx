import Image from "next/image";
import Link from "next/link";
import type { FooterLink } from "../constants";
import styles from "../page.module.css";

type FooterProps = {
  sponsorLinks: FooterLink[];
  infoLinks: FooterLink[];
};

export function Footer({ sponsorLinks, infoLinks }: FooterProps) {
  const getLinkProps = (url: string) =>
    url.startsWith("http")
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};
  const socialLinks = [
    {
      href: "https://x.com",
      ariaLabel: "X",
      imageSrc: "/X-icon.svg",
      imageAlt: "X",
    },
    {
      href: "https://github.com",
      ariaLabel: "GitHub",
      imageSrc: "/github-icon.svg",
      imageAlt: "GitHub",
    },
    {
      href: "https://note.com",
      ariaLabel: "Connpass",
      imageSrc: "/note-icon.svg",
      imageAlt: "Note",
    },
  ];

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
            {socialLinks.map((item) => (
              <Link
                key={item.ariaLabel}
                href={item.href}
                aria-label={item.ariaLabel}
                {...getLinkProps(item.href)}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className={styles.footerLinks}>
          <div>
            <h2>スポンサー募集</h2>
            {sponsorLinks.map((item) => (
              <Link key={item.name} href={item.url} {...getLinkProps(item.url)}>
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <h2>お問い合わせ</h2>
            {infoLinks.map((item) => (
              <Link key={item.name} href={item.url} {...getLinkProps(item.url)}>
                {item.name}
              </Link>
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
