import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyContact } from "@/components/ContactButtons";
import { site } from "@/lib/site";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-cormorant", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · Prise en charge funéraire 24 h/24`, template: `%s · ${site.name}` },
  description:
    "Prise en charge complète du défunt à Dakar et au Sénégal, de l'hôpital à l'inhumation : démarches administratives, lavage mortuaire, corbillard, cimetière. Familles musulmanes et chrétiennes, diaspora. 24 h/24 au 77 796 86 57.",
  openGraph: { type: "website", locale: "fr_SN", siteName: site.name },
};

export const viewport: Viewport = { themeColor: "#14233b", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FuneralHome",
  name: site.name,
  telephone: site.phoneIntl,
  email: site.email,
  address: { "@type": "PostalAddress", streetAddress: "Cité Damel", addressLocality: "Dakar", addressCountry: "SN" },
  openingHours: "Mo-Su 00:00-23:59",
  areaServed: "Sénégal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-dvh">
        <a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <StickyContact />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
