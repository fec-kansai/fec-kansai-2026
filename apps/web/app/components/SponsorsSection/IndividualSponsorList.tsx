import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { IndividualSponsor } from "./types";

/** Shown when a sponsor did not submit an icon. */
const FALLBACK_ICON = "/takoyan-general.svg";

type ItemWrapperProps = { href?: string; children: ReactNode };

/** A sponsor without a link is still listed — just not clickable. */
function ItemWrapper({ href, children }: ItemWrapperProps) {
  const className =
    "flex w-[104px] flex-col items-center gap-2 text-center sm:w-[120px]";

  if (!href) return <div className={className}>{children}</div>;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}

type IndividualSponsorListProps = {
  sponsors: IndividualSponsor[];
};

/**
 * 個人スポンサーの一覧。アイコン + 名前を並べ、リンクがある場合はカード全体を
 * 外部リンクにする。LP（SponsorsShowcaseSection）とスポンサーページ
 * （SponsorsSection）の両方から使うため、見た目はここだけで持つ。
 */
export function IndividualSponsorList({
  sponsors,
}: IndividualSponsorListProps) {
  return (
    <ul className="flex flex-wrap justify-center gap-x-4 gap-y-6 p-0 sm:gap-x-6 sm:gap-y-8">
      {sponsors.map((sponsor) => (
        <li key={sponsor.id} className="list-none">
          <ItemWrapper href={sponsor.url}>
            <Image
              src={
                sponsor.icon
                  ? `/individual-sponsor-img/${sponsor.icon}`
                  : FALLBACK_ICON
              }
              alt={sponsor.name}
              width={96}
              height={96}
              className="aspect-square w-[72px] rounded-full border-2 border-fk-white object-cover sm:w-20"
            />
            <span className="font-montserrat text-[13px] font-bold leading-[1.5] text-fk-text-main sm:text-[14px]">
              {sponsor.name}
            </span>
          </ItemWrapper>
        </li>
      ))}
    </ul>
  );
}
