import type {
  IndividualSponsor,
  OptionSponsorCategory,
  SponsorTier,
} from "../../../web/app/components/SponsorsSection/types";

/**
 * Dummy sponsor data for Storybook only — lets the sponsor stories render a
 * populated layout while the app itself ships empty data (see constants.ts).
 * Adjust freely to tune the visuals; nothing here reaches production.
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

export const individualSponsors: IndividualSponsor[] = [
  { id: "individual-1", name: "スポンサー名入ります" },
  { id: "individual-2", name: "スポンサー名入ります" },
  { id: "individual-3", name: "スポンサー名入ります" },
  { id: "individual-4", name: "スポンサー名入ります" },
  { id: "individual-5", name: "スポンサー名入ります" },
];
