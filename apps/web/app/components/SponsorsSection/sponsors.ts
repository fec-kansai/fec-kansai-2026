import type { OptionSponsorCategory, SponsorTier } from "./types";

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

/**
 * Option (協賛メニュー) sponsors, grouped by category. The categories are fixed;
 * each `sponsors` list holds only the companies that took that option (empty =
 * none yet). Placeholder entries below mirror the design mock — replace with
 * real names/logos as they are decided. 学生支援 is a tier (see sponsorTiers),
 * not an option category, so it is intentionally absent here.
 */
export const optionSponsorCategories: OptionSponsorCategory[] = [
  {
    id: "makuai-cm",
    heading: "幕間CM",
    sponsors: [
      { id: "makuai-cm-1", name: "企業名が入ります", description: [] },
    ],
  },
  {
    id: "back-panel",
    heading: "バックパネル",
    sponsors: [
      { id: "back-panel-1", name: "企業名が入ります", description: [] },
    ],
  },
  {
    id: "name-card",
    heading: "ネームカード",
    sponsors: [
      { id: "name-card-1", name: "企業名が入ります", description: [] },
    ],
  },
  {
    id: "session-room-naming",
    heading: "セッションルームネーミングライツ",
    sponsors: [
      {
        id: "session-room-naming-1",
        name: "企業名が入ります",
        description: [],
      },
    ],
  },
  {
    id: "sponsor-booth",
    heading: "スポンサーブース",
    sponsors: [
      { id: "sponsor-booth-1", name: "企業名が入ります", description: [] },
    ],
  },
  {
    id: "sponsor-session",
    heading: "スポンサーセッション",
    sponsors: [
      { id: "sponsor-session-1", name: "企業名が入ります", description: [] },
    ],
  },
  {
    id: "lunch",
    heading: "ランチ",
    sponsors: [{ id: "lunch-1", name: "企業名が入ります", description: [] }],
  },
  {
    id: "party",
    heading: "懇親会",
    sponsors: [{ id: "party-1", name: "企業名が入ります", description: [] }],
  },
  {
    id: "coffee",
    heading: "コーヒー",
    sponsors: [{ id: "coffee-1", name: "企業名が入ります", description: [] }],
  },
];
