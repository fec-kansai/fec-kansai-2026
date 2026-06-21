import { Button } from "@workspace/ui/components/button";
import Image from "next/image";
import Link from "next/link";
import type { SideEvent } from "./types";

const WEEKDAY_LABEL: Record<string, string> = {
  mon: "mon",
  tue: "tue",
  wed: "wed",
  thu: "thu",
  fri: "fri",
  sat: "sat",
  sun: "sun",
};

/**
 * Decorative tech-logo icons that stick out of the card edges, matching the
 * pseudo-element decorations used across ContentSection. Each card picks one
 * set by index so consecutive cards don't repeat the same icons. They overflow
 * the card on purpose — the page <main> has overflow-hidden so they never cause
 * horizontal scroll. Hidden below lg where there's no room beside the card.
 */
const DECORATION_SETS: string[][] = [
  [
    "before:bg-[url('/html.svg')] before:right-[-110px] before:top-[40px] before:h-[150px] before:w-[110px] before:translate-x-[65%] before:rotate-[-7deg]",
    "before:bg-[url('/css.svg')] before:left-[-87px] before:top-1/2 before:h-[112px] before:w-[110px] before:-translate-x-[98px] before:-translate-y-1/2",
  ],
  [
    "before:bg-[url('/vue.svg')] before:left-[-70px] before:top-1/2 before:h-[148px] before:w-[133px] before:-translate-x-[124px] before:-translate-y-1/2",
    "before:bg-[url('/Union.svg')] before:right-[-96px] before:top-[60px] before:h-[108px] before:w-[110px] before:translate-x-24",
  ],
  [
    "before:bg-[url('/js.svg')] before:right-[-110px] before:top-[-30px] before:h-[108px] before:w-[110px] before:translate-x-[105px]",
    "before:bg-[url('/react.svg')] before:left-[-80px] before:top-1/2 before:h-[108px] before:w-[110px] before:-translate-x-[110px] before:-translate-y-1/2",
  ],
  [
    "before:bg-[url('/lalavel.svg')] before:right-[-90px] before:top-[64px] before:h-[110px] before:w-[120px] before:translate-x-[100px]",
  ],
];

type SideEventCardProps = {
  event: SideEvent;
  /** Position in the list — picks which decoration set the card uses. */
  index: number;
};

/**
 * A single side-event card. Every visible part is derived from the `event`
 * data, so changes to copy, dates, tags, image or status only touch the data
 * in constants.ts — never this markup.
 */
export function SideEventCard({ event, index }: SideEventCardProps) {
  const { status, date, title, hosts, image, description, tags, link } = event;
  const weekday = WEEKDAY_LABEL[date.weekday] ?? date.weekday;
  const decorations = DECORATION_SETS[index % DECORATION_SETS.length] ?? [];

  return (
    <article
      id={event.id}
      className="relative rounded-[30px] bg-fk-white py-8 px-5 sm:py-[48px] sm:px-[56px] font-sans"
    >
      {/* Decorative tech-logo icons, attached via ::before like ContentSection. */}
      {decorations.map((decoration) => (
        <span
          key={decoration}
          aria-hidden="true"
          className={`hidden lg:block before:content-[''] before:absolute before:bg-contain before:bg-no-repeat ${decoration}`}
        />
      ))}

      {/* 終了 corner ribbon — a filled corner triangle, only for ended events.
          The wrapper clips itself to the rounded card corner (the card no longer
          uses overflow-hidden, so the decorations above can overflow). */}
      {status === "ended" && (
        <span
          className="pointer-events-none absolute left-0 top-0 z-1 grid h-[64px] w-[64px] select-none place-items-center overflow-hidden rounded-tl-[30px] sm:h-[84px] sm:w-[84px]"
          aria-label="終了したイベント"
        >
          {/* Filled triangle: border-trick fills the top-left corner. */}
          <span className="absolute left-0 top-0 h-0 w-0 border-r-[64px] border-t-[64px] border-r-transparent border-t-fk-text-light sm:border-r-[84px] sm:border-t-[84px]" />
          {/* Label, rotated along the hypotenuse and nudged onto the triangle. */}
          <span className="relative -translate-x-[10px] -translate-y-[10px] -rotate-45 text-[16px] font-bold tracking-[0.08em] text-fk-white sm:-translate-x-[14px] sm:-translate-y-[14px] sm:text-[20px]">
            終了
          </span>
        </span>
      )}

      {/* Header: date badge + title + hosts. On mobile the ended-ribbon overlaps
          the corner, so only ended cards get the extra left padding. */}
      <div className="flex items-center gap-4 sm:gap-5">
        <div className="flex h-[70px] w-[70px] sm:h-[88px] sm:w-[88px] shrink-0 flex-col items-center justify-center rounded-full bg-fk-accent-red leading-none text-fk-white">
          <span className="text-[24px] font-extrabold font-montserrat">
            {date.month}.{date.day}
          </span>
          <span className="mt-[3px] text-[14px] font-bold lowercase font-montserrat">
            [{weekday}]
          </span>
        </div>

        {/* Desktop: title + hosts stack in the column beside the date badge.
            Mobile: only the title sits beside the badge; hosts drops below. */}
        <div className="min-w-0 flex-1">
          <h3 className="m-0 text-[18px] sm:text-[24px] font-extrabold leading-[1.45] text-fk-text-main">
            {title}
          </h3>
          <p className="m-0 mt-3 hidden sm:block text-[14px] leading-[1.5] text-fk-text-light">
            {hosts}
          </p>
        </div>
      </div>

      {/* Mobile only: hosts span the full card width below the date badge. */}
      <p className="m-0 mt-4 sm:hidden text-[14px] leading-[1.5] text-fk-text-light">
        {hosts}
      </p>

      <hr className="my-6 sm:my-7 border-0 border-t border-[var(--fk-shadow-header)]" />

      {/* Event image — falls back to a placeholder when none is provided */}
      <div className="mx-auto max-w-[520px]">
        <Image
          src={image ?? "/side-meetup-no-image.png"}
          alt={image ? title : "イベント画像はありません"}
          width={1040}
          height={585}
          className="h-auto w-full rounded-[6px]"
        />
      </div>

      {/* Description */}
      <div className="mt-7 grid gap-5">
        {description.map((paragraph) => (
          <p
            // Paragraphs are static copy with no stable id; index is fine here.
            key={paragraph}
            className="m-0 text-[14px] sm:text-[16px] leading-[1.75] font-bold text-fk-text-main"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2 p-0">
          {tags.map((tag) => (
            <li
              key={tag}
              className="list-none rounded-full bg-[#eaeaea] px-3 py-1 text-[12px] sm:text-[14px] font-bold text-fk-green"
            >
              #{tag}
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {link && (
        <div className="mt-8 grid place-items-center">
          <Button
            asChild
            variant="fkSolid"
            className="h-auto px-[34px] py-3 text-[14px] sm:text-lg gap-2.5 [&_svg]:size-4"
          >
            <Link
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] sm:text-lg"
            >
              {link.label}
              <svg
                width="16"
                height="16"
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
            </Link>
          </Button>
        </div>
      )}
    </article>
  );
}
