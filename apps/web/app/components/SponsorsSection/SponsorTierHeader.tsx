import Image from "next/image";
import { TakoyanSilver } from "./TakoyanSilver";

/** Shared icon sizing so both mascots render identically. */
const ICON_CLASS = "h-[40px] w-auto sm:h-[48px] sm:w-[56px]";

/**
 * Mascot per tier. "gold" is a distinct shape (the gold asset); the rest share
 * the TakoyanSilver shape, tinted to the variant's colour.
 */
export type SponsorMascot = "gold" | "silver" | "bronze" | "red";

/** Body colour for the TakoyanSilver shape, keyed by variant (gold unused). */
const MASCOT_COLOR: Record<SponsorMascot, string> = {
  gold: "#E0B22C",
  silver: "#C0C0C0",
  bronze: "#CD7F32",
  red: "#E54839",
};

/**
 * Centered tier heading with a horizontal rule on each side and the takoyan
 * mascot next to the label. `variant` selects both the mascot shape and its
 * colour, so no separate colour prop is needed.
 */
export function SponsorTierHeader({
  heading,
  variant = "gold",
}: {
  heading: string;
  /** Mascot shape + colour for this tier. */
  variant?: SponsorMascot;
}) {
  return (
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="h-0.5 flex-1 bg-fk-green" />
      <div className="flex shrink-0 items-center gap-2">
        <h2 className="m-0 font-montserrat text-[24px] font-bold leading-none text-fk-green">
          {heading}
        </h2>
        {variant === "gold" ? (
          <Image
            src="/takoyan-gold.svg"
            alt=""
            aria-hidden
            width={60}
            height={49}
            className={ICON_CLASS}
          />
        ) : (
          <TakoyanSilver color={MASCOT_COLOR[variant]} />
        )}
      </div>
      <span className="h-0.5 flex-1 bg-fk-green" />
    </div>
  );
}
