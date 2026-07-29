import Image from "next/image";
import type { Sponsor } from "./types";

/**
 * A single compact logo slot (16:9). Stays an empty box until the sponsor has a
 * logo — used by the LP showcase tiers and the shared option section.
 */
export function SponsorSlot({ sponsor }: { sponsor?: Sponsor }) {
  const box =
    "flex aspect-[16/9] w-full items-center justify-center rounded-[8px] bg-fk-white shadow-[0_2px_10px_rgba(51,51,51,0.06)]";

  if (!sponsor?.logo) {
    return <div className={box} aria-hidden="true" />;
  }

  return (
    <div className={box}>
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        width={220}
        height={124}
        className="max-h-[80%] max-w-[80%] object-contain"
      />
    </div>
  );
}

/**
 * Center-aligned, wrapping row of logo slots. `basis` (a Tailwind flex-basis)
 * sets the max columns; the column count grows with the number of sponsors.
 */
export function SponsorSlotRow({
  sponsors,
  basis,
}: {
  sponsors: Sponsor[];
  basis: string;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
      {sponsors.map((sponsor) => (
        <div key={sponsor.id} className={basis}>
          <SponsorSlot sponsor={sponsor} />
        </div>
      ))}
    </div>
  );
}
