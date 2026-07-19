import Image from "next/image";
import Link from "next/link";
import type { Sponsor, SponsorBadge, SponsorTierId } from "./types";

/** Small external-link glyph shown after the Tech Blog / 採用ページ links. */
const ExternalLinkIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M17.4937 0L11.7562 0.00597656C11.622 0.00597656 11.4932 0.0593135 11.3983 0.154254C11.3033 0.249194 11.25 0.377961 11.25 0.512227V1.68328C11.25 1.75063 11.2634 1.8173 11.2895 1.8794C11.3156 1.94149 11.3538 1.99776 11.4019 2.04491C11.45 2.09205 11.507 2.12913 11.5696 2.15396C11.6322 2.17879 11.6991 2.19089 11.7664 2.18953L14.355 2.09391L14.4274 2.16633L4.62375 11.9704C4.58442 12.0095 4.55321 12.0561 4.53192 12.1074C4.51063 12.1587 4.49967 12.2137 4.49967 12.2692C4.49967 12.3247 4.51063 12.3797 4.53192 12.431C4.55321 12.4822 4.58442 12.5288 4.62375 12.568L5.43234 13.3766C5.47154 13.4159 5.51811 13.4471 5.56939 13.4684C5.62067 13.4897 5.67565 13.5007 5.73117 13.5007C5.7867 13.5007 5.84168 13.4897 5.89295 13.4684C5.94423 13.4471 5.99081 13.4159 6.03 13.3766L15.8337 3.57258L15.9061 3.645L15.8105 6.23355C15.8091 6.30089 15.8212 6.36782 15.846 6.43042C15.8709 6.49302 15.9079 6.55004 15.9551 6.59814C16.0022 6.64623 16.0585 6.68444 16.1206 6.71051C16.1827 6.73659 16.2494 6.75001 16.3167 6.75H17.4878C17.622 6.75 17.7508 6.69666 17.8457 6.60172C17.9407 6.50678 17.994 6.37802 17.994 6.24375L18 0.50625C18 0.371984 17.9467 0.243217 17.8517 0.148277C17.7568 0.0533369 17.628 0 17.4937 0ZM15.1875 10.125H14.625C14.4758 10.125 14.3327 10.1843 14.2273 10.2898C14.1218 10.3952 14.0625 10.5383 14.0625 10.6875V16.1016C14.0625 16.1575 14.0403 16.2112 14.0007 16.2507C13.9612 16.2903 13.9075 16.3125 13.8516 16.3125H1.89844C1.84249 16.3125 1.78884 16.2903 1.74928 16.2507C1.70972 16.2112 1.6875 16.1575 1.6875 16.1016V4.14844C1.6875 4.09249 1.70972 4.03884 1.74928 3.99928C1.78884 3.95972 1.84249 3.9375 1.89844 3.9375H7.3125C7.46168 3.9375 7.60476 3.87824 7.71025 3.77275C7.81574 3.66726 7.875 3.52418 7.875 3.375V2.8125C7.875 2.66332 7.81574 2.52024 7.71025 2.41475C7.60476 2.30926 7.46168 2.25 7.3125 2.25H1.6875C1.23995 2.25 0.810725 2.42779 0.494257 2.74426C0.17779 3.06072 0 3.48995 0 3.9375L0 16.3125C0 16.7601 0.17779 17.1893 0.494257 17.5057C0.810725 17.8222 1.23995 18 1.6875 18H14.0625C14.5101 18 14.9393 17.8222 15.2557 17.5057C15.5722 17.1893 15.75 16.7601 15.75 16.3125V10.6875C15.75 10.5383 15.6907 10.3952 15.5852 10.2898C15.4798 10.1843 15.3367 10.125 15.1875 10.125Z"
      fill="currentColor"
    />
  </svg>
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
