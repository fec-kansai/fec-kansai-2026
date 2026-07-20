import { Button } from "@workspace/ui/components/button";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import { TicketCard } from "./TicketCard";
import { TICKETS } from "./tickets";

const ticketLink = "https://peatix.com/event/5023766";

export function TicketSection() {
  return (
    <div id="ticket" className="relative font-sans">
      <header className="text-center">
        <h2 className="m-0 text-[24px] sm:text-[28px] leading-[1.1] text-fk-text-main font-extrabold">
          チケット情報
        </h2>
        <p className="mt-[6px] mb-0 text-fk-yellow text-[18px] font-bold tracking-[0.03em] font-montserrat">
          ticket
        </p>
      </header>

      <div className="grid max-[900px]:grid-cols-1 grid-cols-2 max-[900px]:gap-4 gap-6 mt-6">
        {TICKETS.map((ticket) => (
          <TicketCard key={ticket.type} ticket={ticket} />
        ))}
      </div>

      <footer className="mt-10 text-center">
        <Button asChild variant="fkSolid" size="fkPill">
          <Link
            href={ticketLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="チケット購入リンクを開く"
          >
            チケット購入はこちら
            <ExternalLinkIcon />
          </Link>
        </Button>
      </footer>

      {/* vue.svg 装飾 */}
      <span
        className="before:content-[''] before:absolute before:bg-[url('/vue.svg')] before:bg-contain before:bg-no-repeat before:left-[-70px] before:top-1/2 before:h-[148px] before:w-[133px] before:-translate-x-[124px] before:-translate-y-1/2"
        aria-hidden="true"
      />
    </div>
  );
}
