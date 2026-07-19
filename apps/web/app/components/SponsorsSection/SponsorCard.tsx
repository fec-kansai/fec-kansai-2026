import Image from "next/image";
import Link from "next/link";
import type { Sponsor, SponsorBadge, SponsorTierId } from "./types";

/**
 * External-link glyph after the Tech Blog / 採用ページ links. Reuses the shared
 * /Vector.svg asset as a CSS mask so it can be recoloured — bg-current makes it
 * follow the link's text colour (green) instead of the asset's fixed grey.
 */
const ExternalLinkIcon = () => (
  <span
    aria-hidden
    className="inline-block h-3.5 w-3.5 shrink-0 bg-current [mask-image:url('/Vector.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [-webkit-mask-image:url('/Vector.svg')] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:contain]"
  />
);

/** X (Twitter) glyph for the 公式SNS row. */
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="h-5 w-5 sm:h-[18px] sm:w-[18px]"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/** Tier badge colour, keyed by tier id. */
const TIER_BADGE_CLASS: Record<SponsorTierId, string> = {
  gold: "bg-fk-yellow text-fk-white",
  silver: "bg-[#b7b7b7] text-fk-white",
  bronze: "bg-[#dd8b2c] text-fk-white",
  student: "bg-fk-green text-fk-white",
};

/** Extra-badge colour, keyed by variant. */
const EXTRA_BADGE_CLASS: Record<SponsorBadge["variant"], string> = {
  student: "bg-fk-green text-fk-white",
  option: "bg-fk-text-olive text-fk-white",
};

type SponsorCardProps = {
  sponsor: Sponsor;
  /** Tier the sponsor belongs to — selects the tier badge colour. */
  tierId: SponsorTierId;
  /** Text shown on the tier badge (e.g. "Gold Sponsor"). */
  badgeLabel: string;
  /**
   * Decorative tech-logo classes for this card (see TIER_DECORATIONS). Each is a
   * ::before that overflows the card edge — the page <main> clips it. Empty for
   * cards that carry no decoration.
   */
  decorations?: string[];
};

/**
 * A single sponsor card: logo on the left, badges + name + copy + links on the
 * right. Everything is derived from the `sponsor` data, so copy, logo, links
 * and badges only change in sponsors.ts — never this markup.
 */
export function SponsorCard({
  sponsor,
  tierId,
  badgeLabel,
  decorations = [],
}: SponsorCardProps) {
  const { name, logo, badges, description, techBlogUrl, recruitUrl, sns } =
    sponsor;

  return (
    <article className="relative flex flex-col gap-5 rounded-[20px] bg-fk-white p-5 sm:flex-row sm:gap-7 sm:p-8 font-sans">
      {/* Decorative tech-logo icons, attached via ::before like the side events.
          Hidden below lg where there's no room beside the card. */}
      {decorations.map((decoration) => (
        <span
          key={decoration}
          aria-hidden="true"
          className={`hidden lg:block before:content-[''] before:absolute before:bg-contain before:bg-no-repeat ${decoration}`}
        />
      ))}
      {/* Logo — falls back to a "LOGO" placeholder box when none is provided. */}
      <div className="shrink-0">
        {logo ? (
          <Image
            src={logo}
            alt={name}
            width={300}
            height={169}
            className="h-auto w-full rounded-[6px] sm:w-[300px]"
          />
        ) : (
          <div className="flex h-[169px] w-full items-center justify-center rounded-[6px] bg-[#d9d9d9] sm:w-[300px]">
            <span className="text-[20px] font-bold tracking-[0.12em] text-[#9a9a9a]">
              LOGO
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        {/* Tier badge + optional extra badges */}
        <ul className="flex flex-wrap gap-2 p-0">
          <li
            className={`list-none rounded-full px-3 py-1 text-[12px] font-bold ${TIER_BADGE_CLASS[tierId]}`}
          >
            {badgeLabel}
          </li>
          {badges?.map((badge) => (
            <li
              key={badge.label}
              className={`list-none rounded-full px-3 py-1 text-[12px] font-bold ${EXTRA_BADGE_CLASS[badge.variant]}`}
            >
              {badge.label}
            </li>
          ))}
        </ul>

        <h3 className="m-0 mt-3 font-sans text-[24px] font-bold leading-[1.4] text-fk-text-main">
          {name}
        </h3>

        <div className="mt-3 grid gap-3">
          {description.map((paragraph) => (
            <p
              key={paragraph}
              className="m-0 text-[16px] leading-[1.7] text-fk-text-main"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tech Blog / 採用ページ links */}
        {(techBlogUrl || recruitUrl) && (
          <div className="mt-4 grid gap-1">
            {techBlogUrl && (
              <Link
                href={techBlogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1 font-sans text-[14px] font-normal text-fk-green no-underline transition-opacity duration-200 ease-in-out hover:opacity-70 sm:text-[16px] sm:font-bold"
              >
                Tech Blog
                <ExternalLinkIcon />
              </Link>
            )}
            {recruitUrl && (
              <Link
                href={recruitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1 font-sans text-[14px] font-normal text-fk-green no-underline transition-opacity duration-200 ease-in-out hover:opacity-70 sm:text-[16px] sm:font-bold"
              >
                採用ページ
                <ExternalLinkIcon />
              </Link>
            )}
          </div>
        )}

        {/* Official SNS */}
        {sns && sns.length > 0 && (
          <div className="mt-4">
            <p className="m-0 text-[16px] font-bold text-fk-text-main sm:text-[13px]">
              公式SNS
            </p>
            <div className="mt-2 flex items-center gap-3">
              {sns.map((account) => (
                <Link
                  key={account.url}
                  href={account.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="text-fk-text-main transition-opacity duration-200 ease-in-out hover:opacity-70"
                >
                  <XIcon />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
