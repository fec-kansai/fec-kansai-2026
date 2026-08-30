/**
 * Sponsor tier id. Drives the tier badge colour on each card (see SponsorCard)
 * and groups sponsors into sections (see SponsorsSection).
 */
export type SponsorTierId = "gold" | "silver" | "bronze" | "student";

/**
 * Extra badge shown next to the tier badge on a card (e.g. 学生支援, オプション).
 * `variant` only selects the colour — the visible text is `label`.
 */
export type SponsorBadge = {
  label: string;
  variant: "student" | "option";
};

/** Official SNS link on a card. Currently only X is used in the design. */
export type SponsorSns = {
  platform: "x";
  url: string;
};

/**
 * A single sponsor. The whole card is driven by this structure so that editing
 * a sponsor (or adding a new one) only means changing data in sponsors.ts —
 * never the markup in SponsorCard.
 */
export type Sponsor = {
  /** Stable id, also used as the React key. */
  id: string;
  name: string;
  /** Logo image. When omitted, a "LOGO" placeholder box is shown instead. */
  logo?: string;
  /**
   * Official company site. When set, the logo becomes a link to it (both on the
   * card and in the LP showcase); when omitted, the logo stays static.
   */
  websiteUrl?: string;
  /** Extra badges rendered after the tier badge. */
  badges?: SponsorBadge[];
  /** Body paragraphs. Each entry becomes its own <p>. */
  description: string[];
  /** Tech blog link. When omitted, the row is hidden. */
  techBlogUrl?: string;
  /** Recruitment page link. When omitted, the row is hidden. */
  recruitUrl?: string;
  /** Official SNS links. When empty/omitted, the 公式SNS block is hidden. */
  sns?: SponsorSns[];
};

/**
 * A tier section: a heading, the badge text stamped on every card in the tier,
 * and the sponsors themselves.
 */
export type SponsorTier = {
  id: SponsorTierId;
  /** Section heading (e.g. "Gold Sponsors"). */
  heading: string;
  /** Badge text on each card in this tier (e.g. "Gold Sponsor"). */
  badgeLabel: string;
  sponsors: Sponsor[];
};

/**
 * An option (協賛メニュー) sponsor category — e.g. 幕間CM, スポンサーブース. The set
 * of categories is fixed by the sponsor plan; how many sponsors each holds is
 * not, so only the sponsors that actually took the option are listed (an empty
 * `sponsors` array means "none yet"). Reuses the same `Sponsor` structure as
 * tiers, so both the sponsor page and the LP showcase render option sponsors
 * from this single source — no styling lives here, only data.
 */
export type OptionSponsorCategory = {
  /** Stable id, also used as the React key. */
  id: string;
  /** Category heading (e.g. "幕間CM"). */
  heading: string;
  sponsors: Sponsor[];
};

/**
 * A ジョブボード entry — a sponsor's recruiting page, shown as its own card in
 * the job board grid. Separate from `Sponsor` because a company can take the
 * job board option without being listed in a tier (and vice versa), and the
 * card only ever needs a logo and the link.
 */
export type JobBoardEntry = {
  /** Stable id, also used as the React key. */
  id: string;
  name: string;
  /** Logo image. When omitted, the card stays an empty box. */
  logo?: string;
  /** Where the card links to (the company's job board / recruiting page). */
  url: string;
};

/** A personal (個人) sponsor — only the name is shown; `id` is the React key. */
export type IndividualSponsor = {
  id: string;
  name: string;
};
