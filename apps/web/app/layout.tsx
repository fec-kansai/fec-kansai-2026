import { Barlow, Montserrat, Noto_Sans_JP } from "next/font/google";

import "@workspace/ui/globals.css";

import { Footer } from "./components/Footer";
import { contactLinks, organizationLink, policyLinks } from "./constants";
import { eventJsonLd, htmlLang, metadata } from "./layout.constants";

const fontBarlow = Barlow({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const fontNotoSansJp = Noto_Sans_JP({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const fontMontserrat = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={htmlLang}
      suppressHydrationWarning
      className={`scroll-smooth ${fontBarlow.variable} ${fontNotoSansJp.variable} ${fontMontserrat.variable}`}
    >
      <body className="font-sans antialiased">
        {/* schema.org Event JSON-LD. Non-production deploys are served noindex, so it's safe everywhere. */}
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: required to embed schema.org JSON-LD
          dangerouslySetInnerHTML={{
            // Escape `<` so embedded data can never close the <script> early.
            __html: JSON.stringify(eventJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Footer
          policyLinks={policyLinks}
          contactLinks={contactLinks}
          organizationLink={organizationLink}
        />
      </body>
    </html>
  );
}
