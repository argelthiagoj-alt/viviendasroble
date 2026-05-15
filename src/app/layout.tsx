import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWhatsAppCTA from "@/components/layout/StickyWhatsAppCTA";

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

export const metadata: Metadata = {
  title: {
    default:
      "Viviendas Roble | Casas Prefabricadas en Neuquén y Patagonia",
    template: "%s | Viviendas Roble",
  },
  description:
    "Más de 40 años construyendo casas prefabricadas en Neuquén, Río Negro, La Pampa y Chubut. +15.000 casas entregadas. Certificado PROCREAR. Presupuesto sin cargo.",
  metadataBase: new URL("https://viviendasroble.com"),
  openGraph: {
    siteName: "Viviendas Roble",
    locale: "es_AR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <StickyWhatsAppCTA />
      </body>
    </html>
  );
}
