import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
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
  title: "Casas Prefabricadas en Neuquén | Viviendas Roble",
  description:
    "Viviendas Roble: +40 años construyendo casas prefabricadas en Neuquén y Patagonia. +15.000 casas entregadas. Certificado PROCREAR. Solicitá tu presupuesto gratis.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Casas Prefabricadas en Neuquén — Viviendas Roble",
    description:
      "Construcción industrializada de diseño. Entrega a tiempo, precio cerrado, acompañamiento completo.",
    type: "website",
    locale: "es_AR",
  },
  keywords: [
    "casas prefabricadas Neuquén",
    "casas modulares Neuquén",
    "construcción en seco Neuquén",
    "steel frame Neuquén",
    "wood frame Neuquén",
    "casas prefabricadas Cipolletti",
    "casas prefabricadas General Roca",
    "casas industrializadas Patagonia",
    "viviendas PROCREAR Neuquén",
    "construcción rápida Neuquén",
  ],
};

/* ── JSON-LD schemas ─────────────────────────────── */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ConstructionCompany"],
  name: COMPANY.name,
  description:
    "Empresa familiar de construcción industrializada con más de 40 años de trayectoria. +15.000 casas entregadas en Neuquén, Río Negro, La Pampa y Chubut.",
  url: "https://viviendasroble.com",
  telephone: "+540299440353",
  email: COMPANY.email,
  foundingDate: String(COMPANY.founded),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aguado 2345",
    addressLocality: "Neuquén",
    postalCode: COMPANY.postalCode,
    addressCountry: "AR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.9516,
    longitude: -68.0591,
  },
  areaServed: [
    { "@type": "State", name: "Neuquén" },
    { "@type": "State", name: "Río Negro" },
    { "@type": "State", name: "La Pampa" },
    { "@type": "State", name: "Chubut" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  hasCredential: COMPANY.certificacion,
  sameAs: [COMPANY.instagram],
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
