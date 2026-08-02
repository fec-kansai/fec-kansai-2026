import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { SponsorsShowcaseSection } from "../../web/app/components/SponsorsShowcaseSection/SponsorsShowcaseSection";
import {
  individualSponsors,
  optionSponsorCategories,
  sponsorTiers,
} from "./mocks/sponsors";

/**
 * The full sponsor showcase section: the スポンサー header, the Gold / Silver /
 * Bronze tiers, the オプションスポンサー groups and the 個人スポンサー list + CTA.
 *
 * Everything is driven by the `mainTiers` / `optionGroups` / `individualSponsors`
 * data inside the component, so this is a layout/visual story plus a smoke check
 * that the tiers and option groups render. The wrapper mirrors the yellow-soft
 * background and max-width container the section sits in within `ContentSection`.
 */
const meta = {
  title: "Sponsor/SponsorsShowcaseSection",
  component: SponsorsShowcaseSection,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <section className="bg-fk-yellow-soft pt-16 pb-24 sm:pt-[100px] sm:pb-[200px]">
        <div className="mx-auto max-w-[904px] px-4 min-[904px]:px-0">
          <Story />
        </div>
      </section>
    ),
  ],
} satisfies Meta<typeof SponsorsShowcaseSection>;

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
    // Tier headings and an option group render.
    expect(await canvas.findByText("Gold Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("Silver Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("Bronze Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("オプションスポンサー")).toBeInTheDocument();
    expect(canvas.getByText("幕間CM")).toBeInTheDocument();
    // Individual sponsors block + CTA.
    expect(canvas.getByText("個人スポンサー")).toBeInTheDocument();
    expect(canvas.getByText("スポンサー一覧はこちら")).toBeInTheDocument();
  },
};
