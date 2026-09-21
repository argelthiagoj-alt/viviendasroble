import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getModelBySlug,
  models,
  relatedModels,
  type HouseModel,
} from "@/lib/models";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  modelProductSchema,
  type Crumb,
  type FaqItem,
} from "@/lib/seo/schema";

import JsonLd from "@/components/seo/JsonLd";
import ModelViewTracker from "@/components/analytics/ModelViewTracker";
import {
  FloorplanLink,
  WhatsAppLink,
} from "@/components/analytics/TrackedLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import RelatedModels from "@/components/seo/RelatedModels";
import FaqBlock from "@/components/seo/FaqBlock";
import LandingCTA from "@/components/seo/LandingCTA";

type Props = { params: Promise<{ slug: string }> };

/* Todas las fichas se prerenderizan en build; un slug desconocido es 404. */
export function generateStaticParams() {
  return models.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

/* ── Copy derivado de los datos del modelo ──────── */

/** "casa prefabricada de 42 m² con 2 dormitorios" */
function modelPhrase(model: HouseModel): string {
  return model.bedroomsMin === 0
    ? `casa prefabricada de ${model.areaLabel} tipo monoambiente`
    : `casa prefabricada de ${model.areaLabel} con ${model.bedroomsLabel}`;
}

/** Recorta en el último espacio antes del límite, para no cortar palabras. */
function clamp(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

function modelFaq(model: HouseModel): FaqItem[] {
  const items: FaqItem[] = [
    {
      q: `¿Cuántos ambientes tiene el ${model.name}?`,
      a: `El ${model.name} tiene ${model.areaLabel} de superficie y se distribuye en: ${model.specs.toLowerCase()}. En la ficha podés descargar el plano en PDF para ver la distribución exacta.`,
    },
    {
      q: `¿Se puede modificar la distribución del ${model.name}?`,
      a: "Sí. Los modelos son una base de partida: adaptamos distribución, terminaciones, colores y materiales según tu gusto, tu terreno y tu presupuesto. También hacemos proyectos completamente a medida.",
    },
    {
      q: `¿Cuánto cuesta el ${model.name}?`,
      a: "El costo depende de las terminaciones elegidas, del sistema constructivo y de la ubicación del terreno. Para darte un número real necesitamos conocer tu proyecto. El presupuesto es sin cargo y se entrega por escrito con el detalle de qué incluye.",
    },
    {
      q: `¿Cuánto tarda la construcción?`,
      a: "Según el modelo y las condiciones del terreno, el plazo habitual va de 60 a 120 días hábiles desde el inicio de obra. El cronograma detallado se entrega por escrito antes de arrancar.",
    },
  ];

  return items;
}

/* ── Metadata ───────────────────────────────────── */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) return {};

  // La descripción se arma con el dato duro del modelo y se completa con
  // su copy hasta el largo que Google muestra sin truncar.
  const head = `${model.name}: ${modelPhrase(model)} y ${model.bathroomsLabel.toLowerCase()}.`;

  return buildMetadata({
    title: `${model.name} — Casa Prefabricada de ${model.areaLabel}`,
    description: clamp(`${head} ${model.description}`, 158),
    path: `/modelos/${model.slug}`,
    image: model.photo ?? model.previewImage,
    imageAlt: `Modelo ${model.name} de Viviendas Roble — ${model.areaLabel}`,
  });
}

/* ── Page ───────────────────────────────────────── */

export default async function ModeloPage({ params }: Props) {
  const { slug } = await params;
  const model = getModelBySlug(slug);
  if (!model) notFound();

  const related = relatedModels(model, 3);
  const faq = modelFaq(model);

  const crumbs: Crumb[] = [
    { name: "Modelos", path: "/modelos" },
    { name: model.name, path: `/modelos/${model.slug}` },
  ];

  const specs = [
    { label: "Superficie", value: model.areaLabel },
    { label: "Dormitorios", value: model.bedroomsLabel },
    { label: "Baños", value: model.bathroomsLabel },
    { label: "Distribución", value: model.specs },
  ];

  return (
    <>
      <ModelViewTracker model={model} />

      <JsonLd
        data={[
          modelProductSchema(model),
          breadcrumbSchema(crumbs),
          faqSchema(faq),
        ]}
      />

      <main>
        {/* ── Hero ──────────────────────────────── */}
        <section className="bg-roble-dark text-white pt-28 pb-14 sm:pt-32 sm:pb-16 px-5 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <Breadcrumbs items={crumbs} className="mb-7 sm:mb-9" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                {model.badge && (
                  <span className="inline-block bg-roble-gold text-roble-dark text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-5">
                    {model.badge}
                  </span>
                )}
                <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-4">
                  Modelo · {model.areaLabel}
                </p>
                <h1 className="font-serif text-[32px] sm:text-5xl md:text-[52px] font-semibold leading-[1.08] mb-5">
                  {model.name}
                </h1>
                <p className="text-white/65 text-base sm:text-lg leading-relaxed mb-8">
                  {model.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <WhatsAppLink
                    href={model.whatsappMessage}
                    location="model_page"
                    model={model}
                    className="inline-flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold px-7 py-3.5 sm:py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
                  >
                    Consultar por el {model.name}
                  </WhatsAppLink>
                  <FloorplanLink
                    href={model.pdfHref}
                    download={model.downloadName}
                    model={model}
                    fileName={model.downloadName}
                    className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-3.5 sm:py-4 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
                  >
                    Descargar plano en PDF
                  </FloorplanLink>
                </div>
              </div>

              {/* Plano */}
              <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-white/10">
                {model.previewImage ? (
                  <Image
                    src={model.previewImage}
                    alt={`Plano del modelo ${model.name}, ${modelPhrase(model)} de Viviendas Roble`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-6"
                    priority
                  />
                ) : (
                  <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-roble-muted">
                    Plano disponible en PDF
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── Ficha técnica ─────────────────────── */}
        <section
          className="py-14 sm:py-20 px-5 sm:px-4 bg-roble-cream"
          aria-labelledby="ficha-heading"
        >
          <div className="max-w-6xl mx-auto">
            <h2
              id="ficha-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-roble-text leading-[1.15] mb-8 sm:mb-10"
            >
              Características del {model.name}
            </h2>

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-white border border-roble-beige rounded-2xl p-5"
                >
                  <dt className="text-[10px] font-bold uppercase tracking-widest text-roble-muted mb-2">
                    {spec.label}
                  </dt>
                  <dd className="font-serif text-base sm:text-lg font-semibold text-roble-text leading-snug">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <article className="bg-white border border-roble-beige rounded-2xl p-7">
                <div className="w-8 h-px bg-roble-gold mb-6" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-roble-text mb-3">
                  Cómo se construye
                </h3>
                <p className="text-sm text-roble-muted leading-relaxed mb-4">
                  El {model.name} se construye con nuestro sistema de{" "}
                  <Link
                    href="/construccion-en-seco"
                    className="text-roble-dark underline underline-offset-2 hover:text-roble-gold transition-colors"
                  >
                    construcción en seco
                  </Link>
                  : estructura de madera, paneles interiores termoacústicos e
                  hidrófugos, instalación eléctrica embutida y sanitarios
                  completos.
                </p>
                <p className="text-sm text-roble-muted leading-relaxed">
                  Podés elegir entre el Sistema Estándar y{" "}
                  <Link
                    href="/casas-para-patagonia"
                    className="text-roble-dark underline underline-offset-2 hover:text-roble-gold transition-colors"
                  >
                    Roble Patagónica
                  </Link>
                  , que suma aislación reforzada y cuenta con certificación CAT
                  N° 2874, apto Procrear.
                </p>
              </article>

              <article className="bg-white border border-roble-beige rounded-2xl p-7">
                <div className="w-8 h-px bg-roble-gold mb-6" aria-hidden="true" />
                <h3 className="font-serif text-xl font-semibold text-roble-text mb-3">
                  Personalización y plazos
                </h3>
                <p className="text-sm text-roble-muted leading-relaxed mb-4">
                  Este modelo es una base de partida. Adaptamos distribución,
                  terminaciones, colores y materiales según tu terreno y tu
                  presupuesto.
                </p>
                <p className="text-sm text-roble-muted leading-relaxed">
                  El plazo habitual va de 60 a 120 días hábiles desde el inicio
                  de obra, con precio cerrado y cronograma entregados por
                  escrito antes de arrancar.
                </p>
              </article>
            </div>

            {/* Foto de obra, si existe */}
            {model.photo && (
              <figure className="mt-10">
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-roble-beige">
                  <Image
                    src={model.photo}
                    alt={`Vivienda ${model.name} de ${model.areaLabel} construida por Viviendas Roble en Patagonia`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="text-xs text-roble-muted mt-3">
                  Obra entregada. Mirá más proyectos en la{" "}
                  <Link
                    href="/galeria"
                    className="underline underline-offset-2 hover:text-roble-text transition-colors"
                  >
                    galería
                  </Link>
                  .
                </figcaption>
              </figure>
            )}
          </div>
        </section>

        {/* ── Enlaces contextuales ──────────────── */}
        <section className="py-12 px-5 sm:px-4 bg-white border-t border-roble-beige">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5">
              Seguí explorando
            </h2>
            <ul className="flex flex-wrap gap-3">
              {[
                { label: "Casas prefabricadas", href: "/casas-prefabricadas" },
                {
                  label: "Viviendas industrializadas",
                  href: "/viviendas-industrializadas",
                },
                { label: "Casas en Neuquén", href: "/casas-prefabricadas/neuquen" },
                {
                  label: "Casas en Río Negro",
                  href: "/casas-prefabricadas/rio-negro",
                },
                { label: "Sistema de construcción", href: "/sistema-de-construccion" },
                { label: "Planos en PDF", href: "/planos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center bg-roble-cream border border-roble-beige rounded-xl px-4 py-2.5 text-sm text-roble-text hover:border-roble-dark transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <RelatedModels
          models={related}
          eyebrow="También te puede interesar"
          heading="Modelos relacionados"
          lead={`Otros modelos con superficies cercanas a los ${model.areaLabel} del ${model.name}.`}
          tone="cream"
        />

        <FaqBlock items={faq} heading={`Preguntas sobre el ${model.name}`} />

        <LandingCTA
          heading={`¿Te interesa el ${model.name}?`}
          body="Contanos dónde está tu terreno y te armamos una propuesta con tiempos y precio cerrado. Sin cargo y sin compromiso."
          whatsappHref={model.whatsappMessage}
          whatsappLabel="Consultar por este modelo"
          secondary={{ label: "Ver todos los modelos", href: "/modelos" }}
          ctaLocation="model_page"
          model={model}
        />
      </main>
    </>
  );
}
