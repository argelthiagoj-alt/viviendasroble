import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsAppCTA from "@/components/layout/StickyWhatsAppCTA";
import GoogleTagManager, {
  GoogleTagManagerNoScript,
} from "@/components/analytics/GoogleTagManager";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const DEFAULT_TITLE =
  "Casas Prefabricadas en Neuquén y Río Negro | Viviendas Roble";

const DEFAULT_DESCRIPTION =
  "Casas prefabricadas y viviendas industrializadas en Neuquén, Río Negro y Patagonia. 21 modelos de 15 a 90 m², precio cerrado y entrega planificada. Más de 40 años y +15.000 casas entregadas.";

export const metadata: Metadata = {
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  // Consolida todo el sitio bajo el dominio final: cualquier canonical
  // relativo de una página se resuelve contra esta base, nunca contra
  // el dominio de preview del deploy.
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "construction",
  openGraph: {
    siteName: SITE_NAME,
    locale: "es_AR",
    type: "website",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 900,
        alt: "Casa prefabricada de Viviendas Roble entregada en la Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#1F1D1A",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <GoogleTagManager />
      <body className="antialiased">
        <GoogleTagManagerNoScript />
        <Navbar />
        {children}
        <Footer />
        <StickyWhatsAppCTA />
      </body>
    </html>
  );
}
