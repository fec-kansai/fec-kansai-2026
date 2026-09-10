import Image from "next/image";
import Link from "next/link";
import type { Sponsor } from "./types";

/**
 * How much of the slot a logo may fill. Gold slots are the biggest, so their
 * logos looked lost inside the white box at the shared 80% — they get more of
 * it. Everything below stays at 80%. `Sponsor.logoScale` then nudges a single
 * logo around that budget.
 */
const LOGO_FILL = {
  large: { width: 92, height: 86 },
  default: { width: 80, height: 80 },
} as const;

export type SponsorSlotFill = keyof typeof LOGO_FILL;

/** Keeps floating-point noise out of the rendered style attribute. */
const round = (value: number) => Math.round(value * 10) / 10;

/**
 * A single compact logo slot (16:9). Stays an empty box until the sponsor has a
 * logo — used by the LP showcase tiers.
 */
export function SponsorSlot({
  sponsor,
  fill = "default",
}: {
  sponsor?: Sponsor;
  fill?: SponsorSlotFill;
}) {
  const box =
    "flex aspect-[16/9] w-full items-center justify-center rounded-[8px] bg-fk-white shadow-[0_2px_10px_rgba(51,51,51,0.06)]";

  if (!sponsor?.logo) {
    return <div className={box} aria-hidden="true" />;
  }

  const budget = LOGO_FILL[fill];
  const scale = sponsor.logoScale ?? 1;
  const logo = (
    <Image
      src={sponsor.logo}
      alt={sponsor.name}
      width={220}
      height={124}
      className="object-contain"
      style={{
        maxWidth: `${round(budget.width * scale)}%`,
        maxHeight: `${round(budget.height * scale)}%`,
      }}
    />
  );

  // Links to that sponsor's card on the sponsor page (not to their own site),
  // so the anchor can also be shared on social media.
  return (
    <Link
      href={`/sponsors#${sponsor.id}`}
      aria-label={`${sponsor.name}の詳細をみる`}
      className={`${box} transition-opacity duration-200 ease-in-out hover:opacity-70`}
    >
      {logo}
    </Link>
  );
}

/**
 * Center-aligned, wrapping row of logo slots. `basis` (a Tailwind flex-basis)
 * sets the max columns; the column count grows with the number of sponsors.
 */
export function SponsorSlotRow({
  sponsors,
  basis,
  fill,
}: {
  sponsors: Sponsor[];
  basis: string;
  fill?: SponsorSlotFill;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
      {sponsors.map((sponsor) => (
        <div key={sponsor.id} className={basis}>
          <SponsorSlot sponsor={sponsor} fill={fill} />
        </div>
      ))}
    </div>
  );
}
