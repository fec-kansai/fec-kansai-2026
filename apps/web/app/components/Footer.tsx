import Image from "next/image";
import Link from "next/link";
import type { FooterLink } from "../constants";

type FooterProps = {
  policyLinks: FooterLink[];
  contactLinks: FooterLink[];
  organizationLink: FooterLink;
};

export function Footer({
  policyLinks,
  contactLinks,
  organizationLink,
}: FooterProps) {
  const getLinkProps = (url: string) =>
    url.startsWith("http")
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

  const socialLinks = [
    {
      href: "https://x.com/fec_kansai",
      ariaLabel: "X",
      imageSrc: "/X-icon.svg",
      imageAlt: "X",
    },
    {
      href: "https://github.com/fec-kansai",
      ariaLabel: "GitHub",
      imageSrc: "/github-icon.svg",
      imageAlt: "GitHub",
    },
    {
      href: "https://note.com/fec_kansai",
      ariaLabel: "Note",
      imageSrc: "/note-icon.svg",
      imageAlt: "Note",
    },
  ];

  return (
    <footer className="relative bg-fk-green text-fk-white pt-[44px] pb-[53px] px-4 md:px-8 lg:px-12 before:content-[''] before:absolute before:inset-x-0 before:-top-[40px] sm:before:-top-[66px] before:h-[40px] sm:before:h-[70px] before:bg-[url('/footer-wave-tile.svg')] before:bg-[position:73px_0] sm:before:bg-[position:left_-2px_bottom] before:bg-[length:148px_40px] sm:before:bg-[length:220px_70px] before:bg-repeat-x">
      <div className="max-w-[1220px] mx-auto grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="grid gap-[10px] justify-items-center lg:justify-items-start">
          <Image
            src="/footer-logo.svg"
            alt="Frontend Conference Kansai 2026"
            width={228}
            height={42}
          />
          <div className="flex gap-5">
            {socialLinks.map((item) => (
              <Link
                key={item.ariaLabel}
                href={item.href}
                aria-label={item.ariaLabel}
                className="w-7 h-7 text-fk-white no-underline text-[11px] font-bold grid place-items-center transition-opacity duration-200 ease-in-out hover:opacity-70"
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

        <div className="grid grid-cols-1 flex gap-8 lg:grid-cols-[0.7fr_1fr] lg:gap-[30px]">
          <div>
            <h2 className="m-0 mb-[10px] text-lg leading-[1.2] font-semibold">
              お問い合わせ
            </h2>
            {contactLinks.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="block text-[var(--fk-white-92)] no-underline text-sm leading-[1.55] mt-[10px] transition-opacity duration-200 ease-in-out hover:opacity-70"
                {...getLinkProps(item.url)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="m-0 mb-[10px] text-lg leading-[1.2] font-semibold">
              規約・ポリシー
            </h2>
            {policyLinks.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="block text-[var(--fk-white-92)] no-underline text-sm leading-[1.55] mt-[10px] transition-opacity duration-200 ease-in-out hover:opacity-70"
                {...getLinkProps(item.url)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1220px] mx-auto mt-14 grid gap-2 text-center text-[12px] text-[var(--fk-white-90)] sm:text-sm lg:grid-cols-[1fr_auto] lg:items-center lg:text-left">
        <div className="m-0">
          <strong className="mr-[10px]">運営団体</strong>
          <Link
            key={organizationLink.name}
            href={organizationLink.url}
            {...getLinkProps(organizationLink.url)}
          >
            {organizationLink.name}
          </Link>
        </div>
        <p className="m-0 text-[10px] sm:text-sm">
          © 2026 フロントエンドカンファレンス関西実行委員会. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
