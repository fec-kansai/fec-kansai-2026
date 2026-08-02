import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { SponsorsSection } from "../../web/app/components/SponsorsSection/SponsorsSection";
import {
  individualSponsors,
  optionSponsorCategories,
  sponsorTiers,
} from "./mocks/sponsors";

/**
 * The full sponsors showcase, rendering placeholder `sponsorTiers` /
 * `optionSponsorCategories` / `individualSponsors` data passed in as props —
 * the same content shown on the /sponsors route.
 */
const meta = {
  title: "Sponsors/SponsorsSection",
  component: SponsorsSection,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SponsorsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tiers: sponsorTiers,
    optionCategories: optionSponsorCategories,
    individualSponsors,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Every tier heading and the individual-sponsor list render.
    expect(await canvas.findByText("Gold Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("Silver Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("Bronze Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("個人スポンサー")).toBeInTheDocument();
  },
};
