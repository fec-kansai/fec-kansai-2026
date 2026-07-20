import type { Meta, StoryObj } from "@storybook/react";

import { TicketCard } from "../../web/app/components/TicketSection/TicketCard";
import type { Ticket } from "../../web/app/components/TicketSection/types";

const meta = {
  title: "Ticket/TicketCard",
  component: TicketCard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof TicketCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const general: Ticket = {
  type: "general",
  name: "一般チケット",
  price: 3000,
  description: "カンファレンスに参加いただける、基本のチケットです。",
  image: "/takoyan-general.svg",
  benefits: ["session"],
  color: "red",
  sold: false,
};

const generalWithSocial: Ticket = {
  type: "general-with-social-gathering",
  name: "懇親会付き一般チケット",
  price: 7000,
  description:
    "セッション参加に加え、イベント終了後の懇親会にもご参加いただけるチケットです。\n登壇者や参加者との交流を楽しみたい方におすすめです！",
  image: "/takoyan-with-beer.svg",
  benefits: ["session", "social-gathering"],
  color: "red",
  sold: false,
};

const student: Ticket = {
  type: "student",
  name: "学生チケット",
  price: 0,
  description:
    "学生の方を対象とした割引チケットです。\n一般チケットの学割版としてご利用いただけます。",
  annotation: "※ ご参加当日、受付にて学生証のご提示をお願い致します。",
  image: "/takoyan-student.svg",
  benefits: ["session"],
  color: "green",
  sold: false,
};

const studentWithSocial: Ticket = {
  type: "student-with-social-gathering",
  name: "懇親会付き学生チケット",
  price: 0,
  description:
    "学生の方を対象とした割引チケットです。\n懇親会付き一般チケットの学割版としてご利用いただけます。",
  annotation: "※ ご参加当日、受付にて学生証のご提示をお願い致します。",
  image: "/takoyan-with-drink.svg",
  benefits: ["session", "social-gathering"],
  color: "green",
  sold: false,
};

const personalSponsor: Ticket = {
  type: "personal-sponsor",
  name: "個人スポンサーチケット",
  price: 20000,
  description:
    "カンファレンスを個人として応援いただける、サポーターチケットです。",
  image: "/takoyan-brighter.svg",
  benefits: ["session", "social-gathering"],
  color: "yellow",
  sold: false,
};

export const General: Story = {
  args: { ticket: general },
};

export const GeneralWithSocialGathering: Story = {
  args: { ticket: generalWithSocial },
};

export const Student: Story = {
  args: { ticket: student },
};

export const StudentWithSocialGathering: Story = {
  args: { ticket: studentWithSocial },
};

export const PersonalSponsor: Story = {
  args: { ticket: personalSponsor },
};

export const SoldOut: Story = {
  args: { ticket: { ...general, sold: true } },
};
