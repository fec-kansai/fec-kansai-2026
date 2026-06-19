import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { SideEventCard } from "../../web/app/components/SideEventSection/SideEventCard";
import { getSideEventStatus } from "../../web/app/components/SideEventSection/status";
import type { SideEvent } from "../../web/app/components/SideEventSection/types";

/**
 * The 終了 ("ended") corner ribbon is driven by `getSideEventStatus(event, now)`:
 * an event counts as ended once its `endsAt` instant has passed. These stories
 * pin a fixed `now` so they are deterministic, and assert in the play function
 * that the ribbon appears only for a past event.
 */
const baseEvent: SideEvent = {
  id: "story-side-event",
  date: { month: 6, day: 22, weekday: "mon" },
  endsAt: "2026-06-22T21:00:00+09:00",
  title: "Kansai Frontend Meetup #1—プロポーザルもくもく会",
  hosts: "主催：フロントエンドカンファレンス関西",
  image: "/side-meetup-event.png",
  description: ["ストーリー用のサンプル説明テキストです。"],
  tags: ["もくもく会", "CFP"],
  link: { url: "https://example.com", label: "詳細・参加申し込みはこちら" },
};

const BEFORE_EVENT = new Date("2026-06-20T12:00:00+09:00");
const AFTER_EVENT = new Date("2026-06-23T00:00:00+09:00");

const meta = {
  title: "SideEvent/SideEventCard",
  component: SideEventCard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof SideEventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** `now` is before `endsAt` → status "upcoming" → no 終了 ribbon. */
export const Upcoming: Story = {
  args: {
    event: baseEvent,
    index: 0,
    status: getSideEventStatus(baseEvent, BEFORE_EVENT),
  },
  play: async ({ canvasElement, args }) => {
    expect(args.status).toBe("upcoming");
    const canvas = within(canvasElement);
    expect(canvas.queryByText("終了")).not.toBeInTheDocument();
  },
};

/** `now` is after `endsAt` → status "ended" → 終了 ribbon is shown. */
export const Ended: Story = {
  args: {
    event: baseEvent,
    index: 0,
    status: getSideEventStatus(baseEvent, AFTER_EVENT),
  },
  play: async ({ canvasElement, args }) => {
    expect(args.status).toBe("ended");
    const canvas = within(canvasElement);
    expect(canvas.getByText("終了")).toBeInTheDocument();
  },
};

/**
 * An explicit `status` in the data overrides the date logic — here the event is
 * already over (AFTER_EVENT), yet a forced "upcoming" hides the ribbon.
 */
export const ManualOverride: Story = {
  args: {
    event: { ...baseEvent, status: "upcoming" },
    index: 0,
    status: getSideEventStatus({ ...baseEvent, status: "upcoming" }, AFTER_EVENT),
  },
  play: async ({ canvasElement, args }) => {
    expect(args.status).toBe("upcoming");
    const canvas = within(canvasElement);
    expect(canvas.queryByText("終了")).not.toBeInTheDocument();
  },
};
