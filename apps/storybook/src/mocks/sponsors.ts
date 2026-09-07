import type {
  IndividualSponsor,
  JobBoardEntry,
  SponsorTier,
} from "../../../web/app/components/SponsorsSection/types";

/**
 * Dummy sponsor data for Storybook only — lets the sponsor stories render a
 * populated layout while the app itself ships empty data (see constants.ts).
 * Adjust freely to tune the visuals;
 */
export const sponsorTiers: SponsorTier[] = [
  {
    id: "gold",
    heading: "Gold Sponsors",
    badgeLabel: "Gold Sponsor",
    sponsors: [
      {
        id: "gold-1",
        name: "企業名が入ります",
        description: [
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
        ],
        techBlogUrl: "#",
        recruitUrl: "#",
        sns: [{ platform: "x", url: "https://x.com/fec_kansai" }],
      },
    ],
  },
  {
    id: "silver",
    heading: "Silver Sponsors",
    badgeLabel: "Silver Sponsor",
    sponsors: [
      {
        id: "silver-1",
        name: "企業名が入ります",
        description: [
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
        ],
        techBlogUrl: "#",
        recruitUrl: "#",
        sns: [{ platform: "x", url: "https://x.com/fec_kansai" }],
      },
    ],
  },
  {
    id: "bronze",
    heading: "Bronze Sponsors",
    badgeLabel: "Bronze Sponsor",
    sponsors: [
      {
        id: "bronze-1",
        name: "企業名が入ります",
        description: [
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
        ],
        techBlogUrl: "#",
        recruitUrl: "#",
        sns: [{ platform: "x", url: "https://x.com/fec_kansai" }],
      },
    ],
  },
  {
    id: "student",
    heading: "学生支援",
    badgeLabel: "学生支援",
    sponsors: [
      {
        id: "student-1",
        name: "企業名が入ります",
        description: [
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
          "紹介テキスト入ります。紹介テキスト入ります。紹介テキスト入ります。",
        ],
        techBlogUrl: "#",
        recruitUrl: "#",
        sns: [{ platform: "x", url: "https://x.com/fec_kansai" }],
      },
    ],
  },
];

/** Five empty job board cards, matching the placeholder grid in the design. */
export const jobBoardEntries: JobBoardEntry[] = [
  { id: "job-board-1", name: "企業名が入ります", url: "#" },
  { id: "job-board-2", name: "企業名が入ります", url: "#" },
  { id: "job-board-3", name: "企業名が入ります", url: "#" },
  { id: "job-board-4", name: "企業名が入ります", url: "#" },
  { id: "job-board-5", name: "企業名が入ります", url: "#" },
];

export const individualSponsors: IndividualSponsor[] = [
  { id: "individual-1", name: "スポンサー名入ります" },
  { id: "individual-2", name: "スポンサー名入ります" },
  { id: "individual-3", name: "スポンサー名入ります" },
  { id: "individual-4", name: "スポンサー名入ります" },
  { id: "individual-5", name: "スポンサー名入ります" },
];
