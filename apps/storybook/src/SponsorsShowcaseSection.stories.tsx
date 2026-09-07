import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";

import { SponsorsShowcaseSection } from "../../web/app/components/SponsorsShowcaseSection/SponsorsShowcaseSection";
import {
  individualSponsors as realIndividualSponsors,
  jobBoardEntries as realJobBoardEntries,
  sponsorTiers as realSponsorTiers,
} from "../../web/app/constants";
import {
  individualSponsors,
  jobBoardEntries,
  sponsorTiers,
} from "./mocks/sponsors";

/**
 * The full sponsor showcase section: the スポンサー header, the Gold / Silver /
 * Bronze tiers, the 個人スポンサー list + CTA and the ジョブボード grid.
 *
 * Everything is driven by the data passed in as props, so this is a layout /
 * visual story plus a smoke check that each block renders. The wrapper mirrors
 * the yellow-soft background and max-width container the section sits in within
 * `ContentSection`.
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
    individualSponsors,
    jobBoardEntries,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Tier headings render.
    expect(await canvas.findByText("Gold Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("Silver Sponsors")).toBeInTheDocument();
    expect(canvas.getByText("Bronze Sponsors")).toBeInTheDocument();
    // Individual sponsors block + CTA.
    expect(canvas.getByText("個人スポンサー")).toBeInTheDocument();
    expect(canvas.getByText("スポンサー一覧はこちら")).toBeInTheDocument();
    // ジョブボード block.
    expect(canvas.getByText("ジョブボード")).toBeInTheDocument();
  },
};

/**
 * The same section fed with the real sponsor data from the web app's
 * constants.ts. No play assertions: the data changes as sponsors are added.
 */
export const RealData: Story = {
  args: {
    tiers: realSponsorTiers,
    individualSponsors: realIndividualSponsors,
    jobBoardEntries: realJobBoardEntries,
  },
};
