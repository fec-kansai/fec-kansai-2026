import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { TimetableSection } from "../../web/app/components/TimetableSection/TimetableSection";
import { tracks } from "../../web/app/components/TimetableSection/timetable";

/**
 * The full timetable section, rendering the real `timetableSlots` data.
 *
 * Desktop (grid) and mobile (list) layouts are both always in the DOM — CSS
 * shows exactly one of them per viewport — so text assertions here use
 * `getAllByText`. Per-card behaviour (links, hall label, …) is asserted in
 * SessionCard.stories.tsx; this story is a layout/visual story plus a smoke
 * check that the programme renders.
 */
const meta = {
  title: "Timetable/TimetableSection",
  component: TimetableSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof TimetableSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Track headers appear once in the grid and once in the list legend.
    for (const track of tracks) {
      expect(canvas.getAllByText(track.name).length).toBeGreaterThan(0);
    }
    expect(canvas.getAllByText("オープニングトーク").length).toBeGreaterThan(0);
    expect(canvas.getAllByText("懇親会").length).toBeGreaterThan(0);
  },
};

/** Same data through the mobile list layout (viewport-driven). */
export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
