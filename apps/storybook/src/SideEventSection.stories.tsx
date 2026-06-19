import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { SideEventSection } from "../../web/app/components/SideEventSection/SideEventSection";

/**
 * The full side-events list section, rendering the real `sideEvents` data.
 *
 * Unlike the SideEventCard stories, the section captures the real current date
 * internally, so the 終了 ribbon reflects the live status. This is therefore a
 * layout/visual story plus a smoke check that the list renders — the precise
 * ribbon behaviour is asserted in SideEventCard.stories.tsx with a fixed `now`.
 */
const meta = {
  title: "SideEvent/SideEventSection",
  component: SideEventSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SideEventSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // The section renders at least the first event's card.
    expect(
      await canvas.findByText(/Kansai Frontend Meetup #1/),
    ).toBeInTheDocument();
  },
};
