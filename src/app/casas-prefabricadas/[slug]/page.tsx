import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  citiesOfProvince,
  getLocation,
  getNearby,
  indexableLocations,
  locationPath,
  locations,
  type Location,
} from "@/lib/locations";
import { modelsByArea, type HouseModel } from "@/lib/models";
import { CATEGORY_LINKS, waLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  modelListSchema,
  serviceSchema,
  type Crumb,
} from "@/lib/seo/schema";

import JsonLd from "@/components/seo/JsonLd";
import LandingHero from "@/components/seo/LandingHero";
import ContentSection from "@/components/seo/ContentSection";
import RelatedModels from "@/components/seo/RelatedModels";
import LocationLinks from "@/components/seo/LocationLinks";
import RelatedLinks from "@/components/seo/RelatedLinks";
import FaqBlock from "@/components/seo/FaqBlock";
import LandingCTA from "@/components/seo/LandingCTA";

type Props = { params: Promise<{ slug: string }> };

/**
 * Se prerenderizan todas las landings definidas, incluidas las que estén
 * marcadas como no indexables: la página existe y funciona, simplemente no
 * entra al sitemap ni al índice de Google.
 */
export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export const dynamicParams = false;

/* ── Helpers ────────────────────────────────────── */

function crumbsFor(location: Location): Crumb[] {
  const base: Crumb[] = [
    { name: "Casas prefabricadas", path: "/casas-prefabricadas" },
  ];

  if (location.kind === "city" && location.provinceSlug) {
    const province = getLocation(location.provinceSlug);
    if (province) {
      base.push({ name: province.name, path: locationPath(province) });
    }
  }

  base.push({ name: location.name, path: locationPath(location) });
  return base;
}

function modelsFor(location: Location): HouseModel[] {
  const list = modelsByArea.filter((m) =>
    location.featuredGroups.includes(m.group)
  );
  if (list.length <= 6) return list;
  const step = (list.length - 1) / 5;
  return Array.from({ length: 6 }, (_, i) => list[Math.round(i * step)]);
}

function heroChips(location: Location): string[] {
  const base =
    location.tier === "principal"
      ? ["Zona de operación habitual", "Precio cerrado"]
      : ["Evaluamos tu proyecto", "Presupuesto sin cargo"];
  return [...base, "Fábrica propia en Plottier"];
}

/* ── Metadata ───────────────────────────────────── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  return buildMetadata({
    title: location.title,
    description: location.description,
    path: locationPath(location),
    index: location.indexable,
  });
}

/* ── Page ───────────────────────────────────────── */

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const crumbs = crumbsFor(location);
  const models = modelsFor(location);
  const nearby = getNearby(location);
  const childCities =
    location.kind === "province" ? citiesOfProvince(location.slug) : [];
  const regionChildren =
    location.kind === "region"
      ? indexableLocations.filter((l) => l.kind === "province")
      : [];

  const whatsappHref = waLink(
    `Hola, quisiera un presupuesto para una vivienda en ${location.name}. ¿Me pueden dar información?`
  );

  const schemas = [
    breadcrumbSchema(crumbs),
    serviceSchema({
      name: `Casas prefabricadas en ${location.name}`,
      description: location.description,
      path: locationPath(location),
      areaServed: [location.name],
    }),
    modelListSchema(models, {
      name: `Modelos disponibles en ${location.name}`,
    }),
    faqSchema(location.faq),
  ];

  const geoLabel =
    location.kind === "city"
      ? `${location.name}, ${location.province}`
      : location.name;

  return (
    <>
      <JsonLd data={schemas} />

      <main>
        <LandingHero
          eyebrow={`Cobertura · ${geoLabel}`}
          h1={location.h1}
          intro={location.intro}
          chips={heroChips(location)}
          breadcrumbs={crumbs}
          primaryCta={{
            label: "Pedir presupuesto",
            href: whatsappHref,
            external: true,
          }}
          secondaryCta={{ label: "Ver modelos", href: "/modelos" }}
          ctaLocation="location_page"
        />

        <ContentSection
          id="contexto"
          eyebrow="La zona"
          heading={`Construir en ${location.name}`}
          tone="cream"
          columns={1}
          blocks={[
            {
              heading:
                location.kind === "city"
                  ? "Cómo es construir acá"
                  : "El panorama de la región",
              body: location.localContext,
            },
            {
              heading: "El clima y la envolvente",
              body: location.climateContext,
            },
            {
              heading: "Nuestra cobertura en la zona",
              body: location.coverageText,
            },
          ]}
        >
          <div className="mt-10 max-w-3xl">
            <p className="text-sm text-roble-muted leading-relaxed">
              Si querés el detalle técnico de los materiales y las aislaciones,
              está en{" "}
              <Link
                href="/construccion-en-seco"
                className="text-roble-dark underline underline-offset-2 hover:text-roble-gold transition-colors"
              >
                construcción en seco
              </Link>{" "}
              y en{" "}
              <Link
                href="/casas-para-patagonia"
                className="text-roble-dark underline underline-offset-2 hover:text-roble-gold transition-colors"
              >
                casas para clima patagónico
              </Link>
              .
            </p>
          </div>
        </ContentSection>

        <RelatedModels
          models={models}
          eyebrow="Modelos"
          heading={`Modelos para ${location.name}`}
          lead="Cada ficha tiene la distribución completa y el plano descargable. Todos son personalizables."
          tone="white"
        />

        {/* Provincia: ciudades que la componen */}
        {childCities.length > 0 && (
          <LocationLinks
            id="ciudades"
            locations={childCities}
            eyebrow="Localidades"
            heading={`Ciudades de ${location.name} donde trabajamos`}
            lead="Entrá a la de tu ciudad para ver el contexto local y nuestra cobertura ahí."
            tone="cream"
          />
        )}

        {/* Región: provincias */}
        {regionChildren.length > 0 && (
          <LocationLinks
            id="provincias"
            locations={regionChildren}
            eyebrow="Provincias"
            heading="Dónde construimos en la Patagonia"
            tone="cream"
          />
        )}

        {/* Localidades cercanas */}
        {nearby.length > 0 && (
          <LocationLinks
            id="cercanas"
            locations={nearby}
            eyebrow="Cerca de acá"
            heading={
              location.kind === "city"
                ? "Otras zonas donde construimos"
                : "Seguí explorando la cobertura"
            }
            tone={childCities.length > 0 || regionChildren.length > 0 ? "white" : "cream"}
          />
        )}

        <RelatedLinks
          heading="Qué construimos"
          tone="cream"
          links={[
            ...CATEGORY_LINKS,
            { label: "Sistema de construcción", href: "/sistema-de-construccion" },
            { label: "Galería de obras", href: "/galeria" },
            { label: "Nuestra trayectoria", href: "/quienes-somos" },
          ]}
        />

        <FaqBlock
          items={location.faq}
          heading={`Preguntas sobre construir en ${location.name}`}
        />

        <LandingCTA
          heading={`¿Tenés terreno en ${location.name}?`}
          body="Contanos dónde está y qué necesitás. Te respondemos con una propuesta concreta, sin cargo y sin compromiso."
          whatsappHref={whatsappHref}
          secondary={{ label: "Ver todos los modelos", href: "/modelos" }}
          ctaLocation="location_page"
        />
      </main>
    </>
  );
}
