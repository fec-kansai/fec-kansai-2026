import type { Metadata } from "next";

export const htmlLang = "ja";

export const siteTitle = "フロントエンドカンファレンス関西2026";

export const siteDescription = "フロントエンドカンファレンス関西2026";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/logo-ogp.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [{ url: "/logo-ogp.png" }],
  },
  icons: {
    icon: "/favicon.svg",
  },
};
