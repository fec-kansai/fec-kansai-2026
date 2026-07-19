import type { SponsorTier } from "./types";

/**
 * Placeholder sponsor data matching the design mock. Every visible part of the
 * showcase is derived from here — to add, remove or edit a sponsor (or swap the
 * placeholders for real logos/copy/links), change this file only.
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
    iconColor: "#C0C0C0",
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
    iconColor: "#CD7F32",
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
    iconColor: "#E54839",
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

/**
 * Individual (personal) sponsors — rendered as a simple name list under the
 * 個人スポンサー heading. `id` is only a stable React key; `name` is shown.
 */
export const individualSponsors: { id: string; name: string }[] = [
  { id: "individual-1", name: "スポンサー名入ります" },
  { id: "individual-2", name: "スポンサー名入ります" },
  { id: "individual-3", name: "スポンサー名入ります" },
  { id: "individual-4", name: "スポンサー名入ります" },
  { id: "individual-5", name: "スポンサー名入ります" },
];
