import { CATEGORY_LINKS, WA_PRESUPUESTO } from "@/lib/constants";
import { modelsByArea, type HouseModel } from "@/lib/models";
import { getLocation, type Location } from "@/lib/locations";
import type { ModelPick, SeoLanding } from "@/lib/seo-pages";
import {
  breadcrumbSchema,
  faqSchema,
  modelListSchema,
  serviceSchema,
} from "@/lib/seo/schema";

import JsonLd from "@/components/seo/JsonLd";
import LandingHero from "@/components/seo/LandingHero";
import ContentSection from "@/components/seo/ContentSection";
import RelatedModels from "@/components/seo/RelatedModels";
import LocationLinks from "@/components/seo/LocationLinks";
import RelatedLinks from "@/components/seo/RelatedLinks";
import FaqBlock from "@/components/seo/FaqBlock";
import LandingCTA from "@/components/seo/LandingCTA";

function pickModels(pick: ModelPick): HouseModel[] {
  let list = modelsByArea;
  if (pick.groups) {
    list = list.filter((m) => pick.groups!.includes(m.group));
  }
  if (pick.bedrooms !== undefined) {
    list = list.filter(
      (m) => m.bedroomsMin <= pick.bedrooms! && m.bedroomsMax >= pick.bedrooms!
    );
  }

  // Reparte la selección a lo largo del rango de superficies en lugar de
  // mostrar siempre los más chicos.
  if (list.length <= pick.limit) return list;
  const step = (list.length - 1) / (pick.limit - 1);
  return Array.from(
    { length: pick.limit },
    (_, i) => list[Math.round(i * step)]
  );
}

/**
 * Renderiza una landing semántica completa a partir de su definición.
 * Todas las landings comparten estructura; el contenido vive en seo-pages.ts.
 */
export default function SeoLandingPage({ landing }: { landing: SeoLanding }) {
  const models = pickModels(landing.models.pick);
  const path = `/${landing.slug}`;

  const locations: Location[] = (landing.locations?.slugs ?? [])
    .map((slug) => getLocation(slug))
    .filter((l): l is Location => l !== undefined && l.indexable);

  const schemas = [
    breadcrumbSchema(landing.breadcrumbs),
    serviceSchema({
      name: landing.serviceName,
      description: landing.description,
      path,
      areaServed: landing.serviceAreas,
    }),
    modelListSchema(models, {
      name: landing.models.heading,
    }),
    faqSchema(landing.faq),
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <main>
        <LandingHero
          eyebrow={landing.eyebrow}
          h1={landing.h1}
          intro={landing.intro}
          chips={landing.chips}
          breadcrumbs={landing.breadcrumbs}
          primaryCta={{
            label: "Solicitar presupuesto",
            href: WA_PRESUPUESTO,
            external: true,
          }}
          secondaryCta={{ label: "Ver modelos", href: "/modelos" }}
          ctaLocation="landing_cta"
        />

        {landing.sections.map((section, i) => (
          <ContentSection
            key={section.heading}
            id={`seccion-${i + 1}`}
            eyebrow={section.eyebrow}
            heading={section.heading}
            lead={section.lead}
            tone={section.tone}
            columns={section.columns}
            blocks={section.blocks}
          />
        ))}

        <RelatedModels
          models={models}
          eyebrow={landing.models.eyebrow}
          heading={landing.models.heading}
          lead={landing.models.lead}
          tone={landing.models.tone}
        />

        {landing.locations && locations.length > 0 && (
          <LocationLinks
            locations={locations}
            eyebrow={landing.locations.eyebrow}
            heading={landing.locations.heading}
            lead={landing.locations.lead}
            tone={landing.locations.tone}
          />
        )}

        <RelatedLinks
          tone={landing.locations ? "cream" : "white"}
          links={[
            // Landings hermanas: cada categoría queda enlazada desde las otras
            // cinco, no solo desde la home.
            ...CATEGORY_LINKS.filter((l) => l.href !== path),
            { label: "Sistema de construcción", href: "/sistema-de-construccion" },
            { label: "Nuestra trayectoria", href: "/quienes-somos" },
          ]}
        />

        <FaqBlock items={landing.faq} />

        <LandingCTA
          heading={landing.cta.heading}
          body={landing.cta.body}
          whatsappHref={WA_PRESUPUESTO}
          ctaLocation="landing_cta"
        />
      </main>
    </>
  );
}
