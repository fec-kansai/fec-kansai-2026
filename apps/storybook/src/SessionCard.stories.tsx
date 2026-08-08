import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { SessionCard } from "../../web/app/components/TimetableSection/SessionCard";
import type { Session } from "../../web/app/components/TimetableSection/types";

/**
 * A single talk card, shared by the desktop grid and the mobile list. The
 * variants below cover the optional parts of `Session`: `url` turns the title
 * into a link, `surveyUrl` adds the アンケート link, `speakerImage` replaces
 * the grey placeholder avatar, and `hall` (mobile only) names the room.
 */
const baseSession: Session = {
  category: "レギュラートーク",
  title: "ストーリー用のサンプルセッションタイトルです",
  speaker: "スピーカー名",
  url: "https://example.com/session",
  surveyUrl: "https://example.com/survey",
};

const meta = {
  title: "Timetable/SessionCard",
  component: SessionCard,
  parameters: { layout: "padded" },
} satisfies Meta<typeof SessionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Track A theme with both links: linked title plus the survey link. */
export const Default: Story = {
  args: {
    session: baseSession,
    trackId: "a",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByRole("link", { name: baseSession.title });
    expect(title).toHaveAttribute("href", baseSession.url);
    expect(
      canvas.getByRole("link", { name: /アンケートに回答する/ }),
    ).toHaveAttribute("href", baseSession.surveyUrl);
  },
};

/**
 * No `url` / `surveyUrl` (e.g. オープニングトーク): the title renders as plain
 * text and the survey link row disappears.
 */
export const WithoutLinks: Story = {
  args: {
    session: {
      category: "主催者",
      title: "オープニングトーク",
      speaker: "スピーカー名",
    },
    trackId: "a",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("オープニングトーク")).toBeInTheDocument();
    expect(canvas.queryByRole("link")).not.toBeInTheDocument();
    expect(canvas.queryByText(/アンケートに回答する/)).not.toBeInTheDocument();
  },
};

/**
 * Mobile usage: `hall` is passed because the list layout has no track columns
 * to convey the room. Track B selects the alternate colour theme.
 */
export const WithHallTrackB: Story = {
  args: {
    session: baseSession,
    trackId: "b",
    hall: "グランホール2",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText("グランホール2")).toBeInTheDocument();
  },
};
