import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { models } from "@/lib/models";
import { faqItems } from "@/components/sections/FAQSection";

import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import PainPointsSection from "@/components/sections/PainPointsSection";
import PlanosSection from "@/components/sections/PlanosSection";
import ProcessSection from "@/components/sections/ProcessSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import CTABanner from "@/components/sections/CTABanner";
import CoverageSection from "@/components/sections/CoverageSection";
import TrustGuaranteeSection from "@/components/sections/TrustGuaranteeSection";
import GalleryPreviewSection from "@/components/sections/GalleryPreviewSection";
import ClimateSection from "@/components/sections/ClimateSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

/* ── Metadata ───────────────────────────────────── */

export const metadata: Metadata = {
  title: "Viviendas Industrializadas en Neuquén y Río Negro",
  description:
    "Viviendas industrializadas y casas prefabricadas con precio cerrado y entrega planificada en Neuquén, Río Negro y toda la Patagonia. Modelos familiares, primera vivienda e inversión. Más de 40 años de trayectoria.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Viviendas Industrializadas en Neuquén y Río Negro | Viviendas Roble",
    description:
      "Casas prefabricadas y viviendas industrializadas con precio cerrado y entrega planificada en Neuquén, Río Negro y Patagonia.",
    type: "website",
    locale: "es_AR",
    url: "https://viviendasroble.com",
  },
  keywords: [
    // Industrializadas / prefabricadas
    "viviendas industrializadas Neuquén",
    "casas prefabricadas Neuquén",
    "viviendas industrializadas Río Negro",
    "casas prefabricadas Río Negro",
    "casas industrializadas Patagonia",
    "viviendas modulares Patagonia",
    "casas modulares Neuquén",
    "construcción industrializada Patagonia",
    "viviendas con precio cerrado Neuquén",
    "casas llave en mano Neuquén",
    "viviendas Procrear Neuquén",
    "construcción en seco Neuquén",
    "steel frame Neuquén",
    "wood frame Neuquén",
    "casas prefabricadas Cipolletti",
    "casas prefabricadas General Roca",
    "casas prefabricadas Allen",
    "casas prefabricadas Villa Regina",
    // Búsquedas amplias
    "casas en Neuquén",
    "casas en Río Negro",
    "construir casa en Neuquén",
    "construir casa en Río Negro",
    "constructora de casas en Neuquén",
    "constructora de viviendas en Río Negro",
    "empresa de casas prefabricadas en Neuquén",
    "construir casa en terreno propio",
    "construcción de casas en Neuquén",
    "construcción de casas en Río Negro",
    "modelos de casas",
    "casas modernas Patagonia",
    "casas familiares",
    "casas económicas",
    "casas de rápida construcción",
    "primera vivienda Neuquén",
    "presupuesto para construir casa",
    "cuánto cuesta construir una casa en Patagonia",
  ],
};

/* ── JSON-LD schemas ─────────────────────────────── */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
  "@id": "https://viviendasroble.com/#business",
  name: COMPANY.name,
  legalName: COMPANY.name,
  alternateName: ["Viviendas Roble Neuquén", "Roble Viviendas"],
  description:
    "Empresa de viviendas industrializadas y casas prefabricadas con más de 40 años de trayectoria. +15.000 casas entregadas en Neuquén, Río Negro y toda la Patagonia. Precio cerrado, entrega planificada y acompañamiento real.",
  slogan: "Viviendas industrializadas con precio cerrado y entrega planificada.",
  url: "https://viviendasroble.com",
  logo: "https://viviendasroble.com/assets/branding/logo.png",
  image: [
    "https://viviendasroble.com/assets/gallery/hero-casa-roble.jpeg",
    "https://viviendasroble.com/assets/gallery/casa-roble-2.jpeg",
    "https://viviendasroble.com/assets/gallery/casa-3.jpeg",
  ],
  telephone: "+540299440353",
  email: COMPANY.email,
  foundingDate: String(COMPANY.founded),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aguado 2345",
    addressLocality: "Neuquén",
    addressRegion: "Neuquén",
    postalCode: COMPANY.postalCode,
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.9516,
    longitude: -68.0591,
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -38.9516,
      longitude: -68.0591,
    },
    geoRadius: "800000",
  },
  areaServed: [
    { "@type": "State", name: "Neuquén" },
    { "@type": "State", name: "Río Negro" },
    { "@type": "State", name: "La Pampa" },
    { "@type": "State", name: "Chubut" },
    { "@type": "City", name: "Neuquén Capital" },
    { "@type": "City", name: "Cipolletti" },
    { "@type": "City", name: "General Roca" },
    { "@type": "City", name: "Centenario" },
    { "@type": "City", name: "Plottier" },
    { "@type": "City", name: "Allen" },
    { "@type": "City", name: "Villa Regina" },
  ],
  knowsAbout: [
    "Viviendas industrializadas",
    "Casas prefabricadas",
    "Construcción en seco",
    "Steel frame",
    "Wood frame",
    "Construcción industrializada",
    "Viviendas modulares",
    "Construcción de casas",
    "Constructora de casas",
    "Casas llave en mano",
    "Casas familiares",
    "Casas modernas",
    "Casas para terreno propio",
    "Primera vivienda",
    "Modelos de casas",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Construcción de viviendas industrializadas",
        serviceType: "Construcción industrializada",
        areaServed: "Neuquén, Río Negro y Patagonia",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Casas prefabricadas llave en mano",
        serviceType: "Construcción llave en mano",
        areaServed: "Neuquén, Río Negro y Patagonia",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Viviendas modulares aptas Procrear",
        serviceType: "Construcción modular",
        areaServed: "Neuquén, Río Negro y Patagonia",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Construcción de casas familiares en terreno propio",
        serviceType: "Construcción de viviendas",
        areaServed: "Neuquén, Río Negro y Patagonia",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Modelos de casas modernas con presupuesto cerrado",
        serviceType: "Diseño y construcción",
        areaServed: "Neuquén, Río Negro y Patagonia",
      },
    },
  ],
  hasCredential: COMPANY.certificacion,
  sameAs: [COMPANY.instagram],
};

const modelsItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Modelos de viviendas industrializadas — Viviendas Roble",
  itemListElement: models
    .filter((m) => m.featured)
    .map((m, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: `${m.name} — ${m.areaLabel}`,
        description: m.description,
        category: "Vivienda industrializada",
        url: `https://viviendasroble.com/planos#${m.id}`,
        brand: { "@type": "Brand", name: "Viviendas Roble" },
        image: m.photo
          ? `https://viviendasroble.com${m.photo}`
          : `https://viviendasroble.com${m.previewImage ?? ""}`,
      },
    })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: "https://viviendasroble.com/",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

/* ── Page ────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(modelsItemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        <HeroSection />
        <TrustBar />
        <PainPointsSection />
        <GalleryPreviewSection />
        <PlanosSection />
        <ClimateSection />
        <ComparisonSection />
        <ProcessSection />
        <DifferentialsSection />
        <TrustGuaranteeSection />
        <CoverageSection />
        <CTABanner />
        <FAQSection />
        <ContactFormSection />
      </main>
    </>
  );
}
