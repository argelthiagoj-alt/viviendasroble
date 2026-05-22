import type { Metadata, Viewport } from "next";
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
      "Viviendas Industrializadas en Neuquén y Río Negro | Viviendas Roble",
    template: "%s | Viviendas Roble",
  },
  description:
    "Construí tu casa con Viviendas Roble: viviendas industrializadas y casas prefabricadas con precio cerrado y entrega planificada en Neuquén, Río Negro y Patagonia. Más de 40 años de trayectoria.",
  metadataBase: new URL("https://viviendasroble.com"),
  alternates: { canonical: "/" },
  applicationName: "Viviendas Roble",
  authors: [{ name: "Viviendas Roble" }],
  creator: "Viviendas Roble",
  publisher: "Viviendas Roble",
  category: "construction",
  keywords: [
    // Producto/categoría — industrializadas
    "viviendas industrializadas Neuquén",
    "casas prefabricadas Neuquén",
    "viviendas industrializadas Río Negro",
    "casas prefabricadas Río Negro",
    "casas modulares Neuquén",
    "construcción industrializada Patagonia",
    "viviendas con precio cerrado Neuquén",
    "casas llave en mano Neuquén",
    "viviendas Procrear Neuquén",
    "casas prefabricadas Cipolletti",
    "casas prefabricadas General Roca",
    // Búsquedas amplias — intención general
    "casas en Neuquén",
    "casas en Río Negro",
    "construir casa en Neuquén",
    "construir casa en Río Negro",
    "construir una casa en Patagonia",
    "construir casa en terreno propio",
    "empresa constructora de casas Neuquén",
    "constructora de viviendas en Río Negro",
    "casas familiares",
    "casas para terreno propio",
    "modelos de casas",
    "casas modernas",
    "casas económicas",
    "casas de rápida construcción",
    "primera vivienda",
    "presupuesto para construir casa",
    "cuánto cuesta construir una casa",
  ],
  openGraph: {
    siteName: "Viviendas Roble",
    locale: "es_AR",
    type: "website",
    url: "https://viviendasroble.com",
    title:
      "Viviendas Industrializadas en Neuquén y Río Negro | Viviendas Roble",
    description:
      "Viviendas industrializadas y casas prefabricadas con precio cerrado y entrega planificada en Neuquén, Río Negro y Patagonia.",
    images: [
      {
        url: "/assets/gallery/hero-casa-roble.jpeg",
        width: 1200,
        height: 900,
        alt: "Vivienda industrializada Viviendas Roble entregada en Patagonia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Viviendas Industrializadas en Neuquén y Río Negro | Viviendas Roble",
    description:
      "Viviendas industrializadas y casas prefabricadas con precio cerrado y entrega planificada en Neuquén, Río Negro y Patagonia.",
    images: ["/assets/gallery/hero-casa-roble.jpeg"],
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
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <StickyWhatsAppCTA />
      </body>
    </html>
  );
}
