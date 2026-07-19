import Image from "next/image";
import { TakoyanSilver } from "./TakoyanSilver";

/** Shared icon sizing so both mascots render identically. */
const ICON_CLASS = "h-[40px] w-auto sm:h-[48px] sm:w-[56px]";

/**
 * Centered tier heading with a horizontal rule on each side and the takoyan
 * mascot next to the label. Gold uses its own shape; Silver and below share a
 * second shape, each tinted to the tier's colour.
 */
export function SponsorTierHeader({
  heading,
  iconColor = "#E0B22C",
  variant = "gold",
}: {
  heading: string;
  /** Takoyan body colour for this tier. Defaults to gold. */
  iconColor?: string;
  /** Which mascot shape to use. "gold" for the Gold tier, "silver" below it. */
  variant?: "gold" | "silver";
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
          <TakoyanSilver color={iconColor} />
        )}
      </div>
      <span className="h-0.5 flex-1 bg-fk-green" />
    </div>
  );
}
