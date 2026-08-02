import { Button } from "@workspace/ui/components/button";
import Link from "next/link";
import { ExternalLinkIcon } from "../ExternalLinkIcon";
import { TimetableGrid } from "./TimetableGrid";
import { TimetableList } from "./TimetableList";
import { forteeLink, timetableIntro } from "./timetable";

/**
 * Decorative tech-logo icons flanking the timetable card, in the same style as
 * the ContentSection / SideEventCard decorations. They sit outside the card on
 * purpose — the page <main> has overflow-hidden so they never cause horizontal
 * scroll — and only appear from xl up, where there is room beside the card.
 */
const DECORATIONS: string[] = [
  "bg-[url('/html.svg')] right-[-190px] top-[16px] h-[138px] w-[112px] rotate-[-6deg]",
  "bg-[url('/css.svg')] left-[-196px] top-[420px] h-[124px] w-[122px]",
  "bg-[url('/Union.svg')] right-[-178px] bottom-[70px] h-[132px] w-[132px]",
];

/**
 * The timetable itself. Everything is driven by timetable.ts — editing the
 * programme never means touching this markup. Desktop and mobile are two
 * separate layouts (grid vs. chronological list) sharing the SessionCard;
 * only one of them is rendered at any width.
 */
export function TimetableSection() {
  return (
    <section
      id="timetable"
      className="bg-fk-yellow-soft pt-10 pb-24 sm:pt-[70px] sm:pb-[200px]"
    >
      <div className="mx-auto max-w-[900px] px-4">
        <div className="text-[14px] font-bold leading-[1.9] text-fk-text-main sm:text-[16px]">
          {timetableIntro.map((line) => (
            <p key={line} className="m-0">
              {line}
            </p>
          ))}
        </div>

        <div className="relative mt-8 sm:mt-[52px]">
          {DECORATIONS.map((decoration) => (
            <span
              key={decoration}
              aria-hidden="true"
              className={`absolute hidden bg-contain bg-no-repeat xl:block ${decoration}`}
            />
          ))}

          {/* Below lg the padding is the design's 16px; from lg the table adds
              its own 14px border-spacing inset, so 36px here lands on 50px. */}
          <div className="relative rounded-[30px] bg-fk-white px-4 py-8 lg:p-9">
            <TimetableGrid />
            <TimetableList />

            <div className="mt-6 grid place-items-center lg:mt-10">
              <Button asChild variant="fkSolid" size="fkPill">
                <Link
                  href={forteeLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {forteeLink.label}
                  <ExternalLinkIcon className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
