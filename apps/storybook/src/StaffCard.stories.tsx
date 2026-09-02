import type { Meta, StoryObj } from "@storybook/react";

import { StaffCard } from "../../web/app/components/StaffSection/StaffCard";

const meta = {
  title: "Staff/StaffCard",
  component: StaffCard,
  parameters: { layout: "centered" },
} satisfies Meta<typeof StaffCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Xアカウントあり */
export const WithX: Story = {
  args: {
    staff: {
      displayName: "フロントエンドカンファレンス関西",
      x: "fec_kansai",
      icon: "/takoyan-general.svg",
    },
  },
};

/** Xアカウントなし・他リンクあり */
export const WithLink: Story = {
  args: {
    staff: {
      displayName: "フロントエンドカンファレンス関西",
      anyLink: "https://note.com/fec_kansai",
      icon: "/takoyan-general.svg",
    },
  },
};

/** Xアカウントなし */
export const WithoutX: Story = {
  args: {
    staff: {
      displayName: "フロントエンドカンファレンス関西",
      icon: "/takoyan-general.svg",
    },
  },
};
