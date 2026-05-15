import type { Metadata } from "next";
import { COMPANY, WA_GENERAL } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Quiénes Somos",
  description:
    "Viviendas Roble: empresa familiar con más de 40 años construyendo casas prefabricadas en Neuquén y la Patagonia. +15.000 casas entregadas desde 1983.",
  alternates: { canonical: "/quienes-somos" },
  openGraph: {
    title: "Quiénes Somos — Viviendas Roble",
    description:
      "Historia, valores y trayectoria de la empresa de construcción industrializada líder en la Patagonia.",
    type: "website",
    locale: "es_AR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Quiénes Somos — Viviendas Roble",
  description:
    "Historia y trayectoria de Viviendas Roble, empresa familiar de construcción industrializada con más de 40 años en la Patagonia.",
  url: "https://viviendasroble.com/quienes-somos",
  mainEntity: {
    "@type": "Organization",
    name: COMPANY.name,
    foundingDate: String(COMPANY.founded),
    foundingLocation: "Buenos Aires, Argentina",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aguado 2345",
      addressLocality: "Neuquén",
      postalCode: COMPANY.postalCode,
      addressCountry: "AR",
    },
  },
};

const milestones = [
  {
    year: "1983",
    title: "El origen",
    desc: "Viviendas Roble nace en Buenos Aires con una convicción: que cada familia merece una casa digna, bien construida y sin vueltas. Desde el primer día, el trabajo es familiar y el compromiso, de largo plazo.",
  },
  {
    year: "1987",
    title: "La Patagonia nos llama",
    desc: "Cuatro años después de la fundación, la empresa abre sus primeras oficinas en Neuquén Capital. La región necesitaba soluciones de vivienda serias, rápidas y confiables. Viviendas Roble llega para quedarse.",
  },
  {
    year: "2004",
    title: "Fábrica propia en Plottier",
    desc: "La empresa da un paso estratégico: instala su fábrica en Plottier, a minutos de la capital neuquina. Fabricación propia significa control total de la calidad, tiempos predecibles y precios más justos para el cliente.",
  },
  {
    year: "2007",
    title: "Radicación definitiva en Neuquén",
    desc: "La empresa traslada todas sus operaciones a Neuquén Capital. Dos oficinas, un equipo consolidado y más de dos décadas de trabajo en la región hacen de Viviendas Roble una referencia indiscutida del sector.",
  },
  {
    year: "Hoy",
    title: "+15.000 familias",
    desc: "Más de quince mil familias en Neuquén, Río Negro, La Pampa y Chubut eligieron construir con nosotros. Cada casa que entregamos es la confirmación de que lo que hacemos vale la pena.",
  },
];

const values = [
  {
    title: "Honestidad ante todo",
    desc: "El presupuesto que firmás es el que pagás. Sin adicionales sorpresa, sin letra chica, sin cambios de último momento.",
  },
  {
    title: "Empresa familiar",
    desc: "Somos una familia que ayuda a otras familias a construir su hogar. Esa cercanía se nota en cada conversación y en cada decisión que tomamos.",
  },
  {
    title: "Patagonia como especialidad",
    desc: "Conocemos el clima, los suelos, los municipios y los proveedores de la región. Nuestros sistemas están diseñados para estas condiciones específicas.",
  },
  {
    title: "Calidad sin concesiones",
    desc: "Trabajamos con materiales de primera calidad y con un equipo técnico que supervisa cada etapa de la construcción, sin tercerizar la obra.",
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* ── Hero ──────────────────────────────── */}
        <section className="bg-roble-dark text-white pt-36 pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-6">
              Viviendas Roble · Desde 1983
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.1] mb-6">
              Más de 40 años construyendo en la Patagonia.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Somos una empresa familiar. Cada casa que entregamos tiene nombre y
              apellido — el de la familia que nos confió el sueño de su hogar propio.
            </p>
          </div>
        </section>

        {/* ── Stats ──────────────────────────────── */}
        <section className="bg-white py-12 px-4 border-b border-roble-beige">
          <AnimateOnScroll>
            <dl className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-roble-beige">
              {[
                { v: "+15.000", l: "Casas entregadas" },
                { v: "40+", l: "Años en la región" },
                { v: "4", l: "Provincias de cobertura" },
                { v: "1983", l: "Año de fundación" },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col items-center text-center lg:px-8">
                  <dt className="font-serif text-3xl md:text-4xl font-semibold text-roble-dark mb-1">
                    {v}
                  </dt>
                  <dd className="text-xs text-roble-muted uppercase tracking-widest font-medium">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimateOnScroll>
        </section>

        {/* ── Timeline ──────────────────────────── */}
        <section className="py-24 px-4 bg-roble-cream" aria-labelledby="historia-heading">
          <div className="max-w-3xl mx-auto">
            <AnimateOnScroll className="mb-14">
              <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
                Nuestra historia
              </p>
              <h2
                id="historia-heading"
                className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15]"
              >
                Un camino de cuatro décadas
              </h2>
            </AnimateOnScroll>

            <ol className="relative border-l border-roble-beige space-y-12">
              {milestones.map((m, i) => (
                <AnimateOnScroll key={m.year} delay={i * 80}>
                  <li className="pl-8">
                    {/* Dot */}
                    <div className="absolute -left-2.5 w-5 h-5 rounded-full bg-white border-2 border-roble-gold flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-roble-gold" />
                    </div>

                    <span className="inline-block text-xs font-semibold text-roble-gold tracking-widest uppercase mb-2">
                      {m.year}
                    </span>
                    <h3 className="font-serif text-xl font-semibold text-roble-text mb-2 leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-roble-muted text-sm leading-relaxed">{m.desc}</p>
                  </li>
                </AnimateOnScroll>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Values ──────────────────────────────── */}
        <section className="py-24 px-4 bg-white" aria-labelledby="valores-heading">
          <div className="max-w-5xl mx-auto">
            <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
                Lo que nos define
              </p>
              <h2
                id="valores-heading"
                className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15]"
              >
                Valores que se ven en cada obra
              </h2>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <AnimateOnScroll key={v.title} delay={i * 80}>
                  <article className="border border-roble-beige rounded-2xl p-7 h-full">
                    <div className="w-8 h-px bg-roble-gold mb-6" aria-hidden="true" />
                    <h3 className="font-serif text-xl font-semibold text-roble-text mb-3 leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-sm text-roble-muted leading-relaxed">{v.desc}</p>
                  </article>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────── */}
        <section className="py-20 px-4 bg-roble-dark text-white">
          <AnimateOnScroll className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-5 leading-snug">
              Queremos ser parte de tu historia
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Si estás pensando en construir en Patagonia, hablemos. Sin compromiso,
              sin apuro. Solo dos personas con ganas de construir algo juntos.
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-roble-gold text-roble-dark font-semibold px-8 py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
            >
              Hablemos por WhatsApp →
            </a>
          </AnimateOnScroll>
        </section>
      </main>
    </>
  );
}
