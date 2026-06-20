import type { Metadata } from "next";

export const htmlLang = "ja";

export const siteTitle = "フロントエンドカンファレンス関西2026";

export const siteDescription =
  "Frontend, Unbounded. フロントエンドは、みんなの話やで。2026年10月12日(月・祝)、大阪にて日本最大級のフロントエンドカンファレンス関西2026を開催！";

export const SITE_URL = new URL(
  process.env.SITE_URL ?? process.env.CF_PAGES_URL ?? "http://localhost:3000",
);

export const openGraph = {
  title: siteTitle,
  description: siteDescription,
  images: [{ url: "/logo-ogp.png" }],
};

// schema.org Event structured data (JSON-LD).
// Rendered as a <script type="application/ld+json"> in the root layout so search
// engines can surface the conference's date / venue / organizer as a rich result.
export const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: siteTitle,
  description: siteDescription,
  startDate: "2026-10-12T10:00:00+09:00",
  endDate: "2026-10-12T20:00:00+09:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "コングレスクエア グラングリーン大阪",
    address: {
      "@type": "PostalAddress",
      addressCountry: "JP",
      addressRegion: "大阪府",
      addressLocality: "大阪市",
    },
  },
  image: [new URL("/logo-ogp.png", SITE_URL).toString()],
  url: SITE_URL.toString(),
  organizer: {
    "@type": "Organization",
    name: "一般社団法人 関西開発者会議",
    url: "https://k3jp.org/",
  },
} as const;

export const metadata: Metadata = {
  metadataBase: SITE_URL,
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    ...openGraph,
    url: SITE_URL,
  },
  twitter: {
    ...openGraph,
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.svg",
  },
};
