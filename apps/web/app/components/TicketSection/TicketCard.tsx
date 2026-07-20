import { cn } from "@workspace/ui/lib/utils";
import { CircleCheck, Smile } from "lucide-react";
import Image from "next/image";

import type { Ticket, TicketColor } from "./types";

import { BENEFIT_MAP } from "./tickets";

const TICKET_COLOR_CLASSES: Record<
  TicketColor,
  {
    border: string;
    bg: string;
    text: string;
    secondaryBorder: string;
    secondaryBg: string;
  }
> = {
  red: {
    border: "border-fk-ticket-red-primary",
    text: "text-fk-ticket-red-primary",
    bg: "bg-fk-ticket-red-primary",
    secondaryBg: "bg-fk-ticket-red-secondary",
    secondaryBorder: "border-fk-ticket-red-secondary",
  },
  green: {
    border: "border-fk-ticket-green-primary",
    text: "text-fk-ticket-green-primary",
    bg: "bg-fk-ticket-green-primary",
    secondaryBg: "bg-fk-ticket-green-secondary",
    secondaryBorder: "border-fk-ticket-green-secondary",
  },
  yellow: {
    border: "border-fk-ticket-yellow-primary",
    text: "text-fk-ticket-yellow-primary",
    bg: "bg-fk-ticket-yellow-primary",
    secondaryBg: "bg-fk-ticket-yellow-secondary",
    secondaryBorder: "border-fk-ticket-yellow-secondary",
  },
};

type TicketCardProps = { ticket: Ticket };

export function TicketCard({ ticket }: TicketCardProps) {
  const colors = TICKET_COLOR_CLASSES[ticket.color];

  return (
    <div
      className={cn(
        "flex h-60 flex-col rounded-2xl border-2 px-6 py-4 max-[900px]:h-72 max-[900px]:p-4",
        colors.border,
      )}
    >
      <div className="flex items-center gap-3">
        <Image src={ticket.image} alt={ticket.name} width={60} height={60} />
        <div className="font-bold">
          <p className="text-lg">{ticket.name}</p>
          <p className={cn("flex items-baseline", colors.text)}>
            <span className="font-montserrat text-[14px]">￥</span>
            <span className="font-montserrat text-2xl">
              {ticket.price.toLocaleString()}-
            </span>
            <span className="text-[9px]">(税込)</span>
          </p>
        </div>
      </div>

      <hr className={cn("my-3 border border-dashed", colors.secondaryBorder)} />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-sm whitespace-pre-wrap">{ticket.description}</p>
          <p className="text-xs">{ticket?.annotation}</p>
        </div>
        <ul className="flex items-center gap-2">
          {ticket.benefits.map((benefit) => (
            <li
              key={benefit}
              className={cn(
                "flex items-center gap-0.5 rounded-2xl px-3 py-1",
                colors.secondaryBg,
              )}
            >
              {BENEFIT_MAP[benefit].icon === "check" ? (
                <CircleCheck
                  size={14.4}
                  strokeWidth={2.5}
                  className={colors.text}
                />
              ) : (
                <Smile size={14.4} strokeWidth={2.5} className={colors.text} />
              )}
              <span className={cn("text-xs font-bold", colors.text)}>
                {BENEFIT_MAP[benefit].label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
