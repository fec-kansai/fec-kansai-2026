import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ExternalLinkIcon } from "../ExternalLinkIcon";
import { TIMETABLE_SURFACES, TRACK_THEMES } from "./theme";
import type { Session, TrackId } from "./types";

type SessionCardProps = {
  session: Session;
  /** Selects the border and room-label colour. */
  trackId: TrackId;
  /**
   * Room label rendered beside the category badge. Only passed on mobile, where
   * the list has no track columns to convey which room a talk is in.
   */
  hall?: string;
  className?: string;
};

/**
 * A single talk. Shared by both layouts, so it stretches to whatever height the
 * container gives it and keeps the survey link pinned to the bottom — that is
 * what lines the links up across the two desktop columns of a slot.
 */
export function SessionCard({
  session,
  trackId,
  hall,
  className,
}: SessionCardProps) {
  const theme = TRACK_THEMES[trackId];
  const { category, title, speaker, speakerImage, url, surveyUrl } = session;

  return (
    <article
      className={cn(
        "flex flex-col rounded-[8px] border bg-fk-white px-4 py-[14px]",
        theme.border,
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
        <span
          className={cn(
            "rounded-full px-3 py-[5px] text-[12px] font-bold leading-none text-fk-text-main",
            TIMETABLE_SURFACES.badge,
          )}
        >
          {category}
        </span>
        {hall && (
          <span className={cn("text-[12px] font-bold", theme.text)}>
            {hall}
          </span>
        )}
      </div>

      <h3 className="m-0 mt-2.5 text-[15px] font-bold leading-[1.5] text-fk-text-main">
        {url ? (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-[3px] transition-opacity duration-200 ease-in-out hover:opacity-70"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      {speaker && (
        <p className="m-0 mt-2 flex items-center gap-2 text-[13px] leading-none text-fk-text-light">
          <span>{speaker}</span>
          {speakerImage ? (
            <Image
              src={speakerImage}
              alt={speaker}
              width={18}
              height={18}
              className="size-[18px] shrink-0 rounded-full object-cover"
            />
          ) : (
            <span
              aria-hidden="true"
              className="size-[18px] shrink-0 rounded-full bg-[#b3b3b3]"
            />
          )}
        </p>
      )}

      {surveyUrl && (
        // mt-auto pushes the link to the bottom of a stretched card.
        <p className="m-0 mt-auto pt-5 text-right">
          <Link
            href={surveyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-fk-text-main transition-opacity duration-200 ease-in-out hover:opacity-70"
          >
            アンケートに回答する
            <ExternalLinkIcon className="size-[13px]" />
          </Link>
        </p>
      )}
    </article>
  );
}
