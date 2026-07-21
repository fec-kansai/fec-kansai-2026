import { ColoredTakoyan, type SponsorMascot } from "./ColoredTakoyan";

/**
 * Centered tier heading with a horizontal rule on each side and the takoyan
 * mascot next to the label. `variant` selects the mascot's shape and colour —
 * ColoredTakoyan handles that; the header just forwards it.
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
        <ColoredTakoyan variant={variant} />
      </div>
      <span className="h-0.5 flex-1 bg-fk-green" />
    </div>
  );
}
