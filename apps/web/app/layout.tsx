import { Barlow, Montserrat, Noto_Sans_JP } from "next/font/google";

import "@workspace/ui/globals.css";

import { htmlLang, metadata } from "./layout.constants";

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
    <html lang={htmlLang} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${fontBarlow.variable} ${fontNotoSansJp.variable} ${fontMontserrat.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
