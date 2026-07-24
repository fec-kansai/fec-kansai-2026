type TicketType =
  | "general"
  | "general-with-social-gathering"
  | "student"
  | "student-with-social-gathering"
  | "personal-sponsor";

type BenefitType = "session" | "social-gathering";

type Benefit = {
  icon: "check" | "smile";
  label: string;
};

export type TicketColor = "red" | "green" | "yellow";

export type Ticket = {
  type: TicketType;
  name: string;
  price: number;
  description: string;
  annotation?: string;
  image: string;
  benefits: BenefitType[];
  color: TicketColor;
  soldOut: boolean;
};

export type BenefitMap = Record<BenefitType, Benefit>;
