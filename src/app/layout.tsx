import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingContact } from "@/components/layout/FloatingContact";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/settings";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// TODO: Replace with real Google Search Console and Bing Webmaster Tools verification tokens.
const googleVerification = "TODO";
const bingVerification = "TODO";
export const metadata: Metadata = {
  verification: {
    ...(googleVerification !== "TODO" ? { google: googleVerification } : {}),
    ...(bingVerification !== "TODO" ? { other: { "msvalidate.01": bingVerification } } : {}),
  },
metadataBase: new URL("https://avexcel.net"),
  title: {
    default: "Event Technology & Video Production Addis Ababa | AV Excel",
    template: `%s | ${siteConfig.shortName}`,
  },
  description: "AV Excel offers live streaming, hybrid events, LED screen rental, camera switching, videography, photography and documentary production in Addis Ababa.",
  openGraph: { type: "website", siteName: siteConfig.name, title: siteConfig.name, description: "AV Excel offers live streaming, hybrid events, LED screen rental, camera switching, videography, photography and documentary production in Addis Ababa.",
  url: "https://avexcel.net", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AV Excel Media & Communication" }] },
  twitter: { card: "summary_large_image", images: ["/og-image.png"] },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-white font-semibold rounded"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
