import Image from "next/image";
import Link from "next/link";
import type { JobBoardEntry } from "../SponsorsSection/types";

/**
 * ジョブボード: the スポンサー-style header followed by a two-column grid of
 * cards, one per participating company. Each card links to that company's job
 * board, so the whole section is driven by `entries` — no copy or styling per
 * company lives here.
 */
export function JobBoardSection({ entries }: { entries: JobBoardEntry[] }) {
  if (entries.length === 0) {
    return null;
  }

  return (
    <div id="job-board" className="font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          ジョブボード
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat max-[900px]:text-[15px]">
          job board
        </p>
      </header>

      {/* Two columns at every width, as in the design. A trailing odd card is
          left-aligned (grid), not centered. */}
      <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
        {entries.map((entry) => (
          <Link
            key={entry.id}
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={entry.name}
            className="flex aspect-[16/9] items-center justify-center rounded-[10px] bg-fk-white transition-opacity duration-200 ease-in-out hover:opacity-70"
          >
            {entry.logo && (
              <Image
                src={entry.logo}
                alt={entry.name}
                width={300}
                height={169}
                className="max-h-[70%] max-w-[70%] object-contain"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
