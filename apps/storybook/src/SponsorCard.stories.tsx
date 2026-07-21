import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { SponsorCard } from "../../web/app/components/SponsorsSection/SponsorCard";
import type { Sponsor } from "../../web/app/components/SponsorsSection/types";

/**
 * A single sponsor card. The whole card is derived from the `sponsor` data plus
 * the tier (`tierId` selects the badge colour, `badgeLabel` its text). These
 * stories pin sample data so the badge/link/SNS variants are deterministic.
 */
const baseSponsor: Sponsor = {
  id: "story-sponsor",
  name: "企業名が入ります",
  description: [
    "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
    "紹介テキスト入ります。紹介テキスト入ります。",
  ],
  techBlogUrl: "#",
  recruitUrl: "#",
  sns: [{ platform: "x", url: "https://x.com/fec_kansai" }],
};

const meta = {
  title: "Sponsors/SponsorCard",
  component: SponsorCard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof SponsorCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Gold tier, no extra badges — the plainest card. */
export const Gold: Story = {
  args: {
    sponsor: baseSponsor,
    tierId: "gold",
    badgeLabel: "Gold Sponsor",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("Gold Sponsor")).toBeInTheDocument();
    expect(canvas.getByText("Tech Blog")).toBeInTheDocument();
  },
};

/** Extra badges (学生支援 / オプション) render after the tier badge. */
export const WithBadges: Story = {
  args: {
    sponsor: {
      ...baseSponsor,
      badges: [
        { label: "学生支援", variant: "student" },
        { label: "オプション", variant: "option" },
      ],
    },
    tierId: "gold",
    badgeLabel: "Gold Sponsor",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("学生支援")).toBeInTheDocument();
    expect(canvas.getByText("オプション")).toBeInTheDocument();
  },
};
