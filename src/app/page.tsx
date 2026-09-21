import type { Metadata } from "next";
import { models } from "@/lib/models";
import { faqItems } from "@/components/sections/FAQSection";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  modelListSchema,
  organizationSchema,
} from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

import JsonLd from "@/components/seo/JsonLd";
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
import CategoriesSection from "@/components/sections/CategoriesSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactFormSection from "@/components/sections/ContactFormSection";

/* ── Metadata ───────────────────────────────────── */

export const metadata: Metadata = buildMetadata({
  // El template `%s | Viviendas Roble` del layout raíz no se aplica al
  // mismo segmento donde está definido, así que la home lleva la marca
  // escrita en el title.
  title: "Casas Prefabricadas en Neuquén y Río Negro | Viviendas Roble",
  description:
    "Casas prefabricadas y viviendas industrializadas en Neuquén, Río Negro y Patagonia. 21 modelos de 15 a 90 m², con precio cerrado y entrega planificada.",
  path: "/",
});

/* ── JSON-LD ────────────────────────────────────── */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Viviendas Roble",
  inLanguage: "es-AR",
  publisher: { "@id": `${SITE_URL}/#business` },
};

const schemas = [
  organizationSchema(),
  websiteSchema,
  modelListSchema(
    models.filter((m) => m.featured),
    {
      name: "Modelos destacados de casas prefabricadas — Viviendas Roble",
      description:
        "Selección de modelos de vivienda industrializada disponibles en Neuquén, Río Negro y Patagonia.",
    }
  ),
  breadcrumbSchema([]),
  faqSchema(faqItems),
];

/* ── Page ────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <JsonLd data={schemas} />

      <main>
        <HeroSection />
        <TrustBar />
        <PainPointsSection />
        <GalleryPreviewSection />
        <PlanosSection />
        <CategoriesSection />
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
