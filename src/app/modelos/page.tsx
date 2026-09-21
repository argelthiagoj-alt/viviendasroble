import type { Metadata } from "next";
import Link from "next/link";

import {
  modelsByArea,
  modelsWithBedrooms,
  AREA_MIN,
  AREA_MAX,
  models,
  WHATSAPP_CUSTOM,
  type ModelGroup,
} from "@/lib/models";
import { WA_PRESUPUESTO } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  modelListSchema,
  type Crumb,
  type FaqItem,
} from "@/lib/seo/schema";

import JsonLd from "@/components/seo/JsonLd";
import { WhatsAppLink } from "@/components/analytics/TrackedLinks";
import LandingHero from "@/components/seo/LandingHero";
import RelatedModels from "@/components/seo/RelatedModels";
import FaqBlock from "@/components/seo/FaqBlock";
import LandingCTA from "@/components/seo/LandingCTA";

const crumbs: Crumb[] = [{ name: "Modelos", path: "/modelos" }];

export const metadata: Metadata = buildMetadata({
  title: `${models.length} Modelos de Casas Prefabricadas de ${AREA_MIN} a ${AREA_MAX} m²`,
  description: `Catálogo completo de modelos de casas prefabricadas de Viviendas Roble: ${models.length} diseños de ${AREA_MIN} a ${AREA_MAX} m², de monoambiente a 4 dormitorios. Ficha, distribución y plano de cada uno.`,
  path: "/modelos",
});

const GROUPS: { key: ModelGroup; title: string; lead: string; id: string }[] = [
  {
    key: "compacto",
    title: "Modelos compactos — hasta 25 m²",
    lead: "Monoambientes y viviendas de un dormitorio. Se eligen para primera vivienda, unidad de renta o módulo complementario dentro de un terreno.",
    id: "compactos",
  },
  {
    key: "mediano",
    title: "Modelos medianos — de 30 a 49 m²",
    lead: "De uno a dos dormitorios. Es la franja más pedida para pareja o familia chica, con variantes de distribución en las superficies de 36, 42 y 49 m².",
    id: "medianos",
  },
  {
    key: "grande",
    title: "Modelos grandes — de 56 a 90 m²",
    lead: "De dos a cuatro dormitorios, con opciones de dos baños. Casas familiares completas para quien ya tiene el terreno y quiere resolverlo de una vez.",
    id: "grandes",
  },
];

const faq: FaqItem[] = [
  {
    q: "¿Qué superficies ofrecen?",
    a: `El catálogo va de ${AREA_MIN} a ${AREA_MAX} m². En las superficies más pedidas —36, 42, 49, 64 y 72 m²— hay más de una variante de distribución para el mismo metraje.`,
  },
  {
    q: "¿Qué diferencias hay entre los modelos?",
    a: "Básicamente superficie y distribución: cantidad de dormitorios, cantidad de baños y cómo se reparten los espacios sociales. El sistema constructivo, los materiales y las terminaciones base son los mismos en todos.",
  },
  {
    q: "¿Qué significan las variantes A y B de un mismo metraje?",
    a: "Son distribuciones alternativas para la misma superficie. Por ejemplo, en 42 m² tenemos tres disposiciones distintas de los ambientes. Conviene mirar los tres planos y ver cuál se adapta mejor a la orientación y la forma de tu terreno.",
  },
  {
    q: "¿Se pueden adaptar los modelos?",
    a: "Sí. Cada modelo es una base de partida: adaptamos distribución, terminaciones, colores y materiales según tu gusto, tu terreno y tu presupuesto. También hacemos proyectos completamente a medida.",
  },
  {
    q: "¿Dónde descargo los planos?",
    a: "Cada ficha de modelo tiene su plano en PDF descargable, sin registro. También podés verlos todos juntos en la página de planos.",
  },
];

export default function ModelosPage() {
  const byBedrooms = [1, 2, 3].map((n) => ({
    n,
    count: modelsWithBedrooms(n).length,
  }));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(crumbs),
          modelListSchema(modelsByArea, {
            name: "Modelos de casas prefabricadas — Viviendas Roble",
            description: `Catálogo completo de ${models.length} modelos de ${AREA_MIN} a ${AREA_MAX} m².`,
          }),
          faqSchema(faq),
        ]}
      />

      <main>
        <LandingHero
          eyebrow="Catálogo completo"
          h1={`Modelos de casas prefabricadas de ${AREA_MIN} a ${AREA_MAX} m²`}
          intro={`${models.length} diseños, del monoambiente compacto a la casa familiar de cuatro dormitorios. Cada ficha tiene la distribución, las características y el plano descargable en PDF, sin registro.`}
          chips={[
            `${models.length} modelos disponibles`,
            "Todos personalizables",
            "Planos en PDF sin registro",
          ]}
          breadcrumbs={crumbs}
          primaryCta={{
            label: "Solicitar presupuesto",
            href: WA_PRESUPUESTO,
            external: true,
          }}
          secondaryCta={{ label: "Ver planos en PDF", href: "/planos" }}
          ctaLocation="models_index"
        />

        {/* ── Accesos rápidos por dormitorios ───── */}
        <section
          className="py-12 px-5 sm:px-4 bg-white border-b border-roble-beige"
          aria-labelledby="buscar-heading"
        >
          <div className="max-w-5xl mx-auto">
            <h2
              id="buscar-heading"
              className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5"
            >
              Buscar por cantidad de dormitorios
            </h2>
            <ul className="flex flex-wrap gap-3">
              {byBedrooms.map(({ n, count }) => (
                <li key={n}>
                  <a
                    href={`#${n === 1 ? "compactos" : n === 2 ? "medianos" : "grandes"}`}
                    className="inline-flex items-baseline gap-2 bg-roble-cream border border-roble-beige rounded-xl px-5 py-3 text-sm text-roble-text hover:border-roble-dark transition-colors duration-200"
                  >
                    <span className="font-medium">
                      Casas de {n} {n === 1 ? "dormitorio" : "dormitorios"}
                    </span>
                    <span className="text-xs text-roble-muted">
                      {count} modelos
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <Link
                  href="/planos"
                  className="inline-flex items-center bg-roble-cream border border-roble-beige rounded-xl px-5 py-3 text-sm text-roble-text hover:border-roble-dark transition-colors duration-200"
                >
                  Descargar todos los planos →
                </Link>
              </li>
            </ul>
          </div>
        </section>

        {/* ── Catálogo por franja ───────────────── */}
        {GROUPS.map((group, i) => (
          <RelatedModels
            key={group.key}
            id={group.id}
            models={modelsByArea.filter((m) => m.group === group.key)}
            heading={group.title}
            lead={group.lead}
            tone={i % 2 === 0 ? "cream" : "white"}
            allHref={i === GROUPS.length - 1 ? "/casas-prefabricadas" : undefined}
            allLabel="Conocé cómo construimos"
          />
        ))}

        {/* ── Proyecto a medida ─────────────────── */}
        <section className="py-16 px-5 sm:px-4 bg-white border-t border-roble-beige">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5">
              Diseño a medida
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-roble-text mb-5 leading-snug">
              ¿Ninguno encaja del todo?
            </h2>
            <p className="text-roble-muted text-base sm:text-lg leading-relaxed mb-9">
              Todos los modelos son personalizables, y también hacemos proyectos
              completamente a medida según tu terreno, tus necesidades y tu
              presupuesto.
            </p>
            <WhatsAppLink
              href={WHATSAPP_CUSTOM}
              location="models_index"
              className="inline-flex items-center gap-3 bg-roble-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
            >
              Hablemos por WhatsApp
              <span aria-hidden="true">→</span>
            </WhatsAppLink>
          </div>
        </section>

        <FaqBlock items={faq} heading="Preguntas sobre los modelos" />

        <LandingCTA
          heading="¿Ya sabés qué modelo querés?"
          body="Contanos dónde está tu terreno y cuál te interesa. Te respondemos con una propuesta con tiempos y precio cerrado, sin cargo."
          whatsappHref={WA_PRESUPUESTO}
          ctaLocation="models_index"
        />
      </main>
    </>
  );
}
