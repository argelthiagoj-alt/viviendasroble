import type { Metadata } from "next";
import { WA_PRESUPUESTO } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Sistema de Construcción",
  description:
    "Conocé los sistemas constructivos de Viviendas Roble: Sistema Estándar y Roble Patagónica (CAT N° 2874, apto PROCREAR). Materiales certificados, aislación térmica y garantía completa.",
  alternates: { canonical: "/sistema-de-construccion" },
  openGraph: {
    title: "Sistema de Construcción — Viviendas Roble",
    description:
      "Dos sistemas industrializados, materiales certificados y garantía incluida. Aptos para el clima patagónico.",
    type: "website",
    locale: "es_AR",
  },
  keywords: [
    "wood frame Neuquén",
    "construcción en seco Neuquén",
    "steel frame Patagonia",
    "sistema constructivo prefabricado",
    "vivienda PROCREAR Neuquén",
    "sistema Roble Patagónica",
  ],
};

const sistemaEstandar = [
  { label: "Estructura", value: "Tirantes de Eucalyptus grandis, sistema sig-sag" },
  { label: "Cubierta", value: "Chapa sinusoidal de zinc calibre N° 27 a dos aguas" },
  { label: "Interior", value: "MDF Guillermina 9mm, termoacústico, hidrófugo e ignífugo" },
  { label: "Revestimiento exterior", value: "4 opciones: machimbre pino ½\", machimbre bombé 1\", Superboard 8mm, apto para ladrillo" },
  { label: "Aberturas", value: "Ventanas panorámicas de aluminio blanco" },
  { label: "Puerta principal", value: "Doble chapa inyectada, 0.80 × 2.00 m, cerradura de seguridad" },
  { label: "Eléctrica", value: "Caños y cajas embutidas" },
  { label: "Sanitarios", value: "4 piezas, grifería FV, termofusión Acqua System / SiGas" },
];

const sistemaPatagonica = [
  { label: "Certificación", value: "CAT N° 2874 — Secretaría de Desarrollo Urbano y Vivienda de la Nación. Apto PROCREAR." },
  { label: "Cubierta", value: "Chapa color zinc calibre N° 25 a dos aguas" },
  { label: "Aislación térmica", value: "Telgopor 35mm, densidad 20 kg/m³ — superior al sistema estándar" },
  { label: "Interior", value: "MDF Guillermina 9mm, termoacústico, hidrófugo e ignífugo" },
  { label: "Revestimiento exterior", value: "Machimbre cabañero bombé 1\" o placa cementicia Superboard 10mm" },
  { label: "Puertas interiores", value: "Placa de MDF revestida en PVC" },
  { label: "Galería opcional", value: "Columnas y vigas multilaminadas 3\"×6\", cielorraso en machimbre" },
  { label: "Sanitarios", value: "Idéntico al sistema estándar" },
];

const benefits = [
  {
    title: "Aislación total",
    desc: "Las paredes, el techo y el piso trabajan en conjunto para mantener el calor en invierno y la frescura en verano. Especialmente importante en el clima patagónico.",
  },
  {
    title: "Resistencia al viento",
    desc: "La estructura de madera reforzada en sistema sig-sag está diseñada para resistir los vientos fuertes de la región sin comprometer la integridad del hogar.",
  },
  {
    title: "Materiales ignífugos",
    desc: "Los paneles interiores MDF Guillermina son termoacústicos, hidrófugos e ignífugos. No es un detalle: es un estándar de seguridad que no negociamos.",
  },
  {
    title: "Anclaje profesional",
    desc: "Clavos espiralados en muros, clavos dentados con cabeza plomo en techos, tornillos y adhesivos específicos en la unión platea-muro. Cada punto tiene su técnica.",
  },
];

export default function SistemaDeConstruccionPage() {
  return (
    <main>
      {/* ── Hero ──────────────────────────────── */}
      <section className="bg-roble-dark text-white pt-36 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-6">
            Viviendas Roble · Cómo construimos
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.1] mb-6">
            Sistemas de construcción industrializada
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            No tercerizamos la fabricación. Construimos con sistemas propios,
            materiales certificados y un equipo técnico que supervisa cada detalle.
          </p>
        </div>
      </section>

      {/* ── Two systems ───────────────────────── */}
      <section className="py-24 px-4 bg-roble-cream" aria-labelledby="sistemas-heading">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
              Dos sistemas disponibles
            </p>
            <h2
              id="sistemas-heading"
              className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15]"
            >
              Elegís según tu terreno, tu clima y tu presupuesto
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sistema Estándar */}
            <AnimateOnScroll>
              <article className="bg-white border border-roble-beige rounded-2xl overflow-hidden h-full">
                <div className="bg-roble-beige/50 px-8 py-6 border-b border-roble-beige">
                  <h3 className="font-serif text-2xl font-semibold text-roble-text">
                    Sistema Estándar
                  </h3>
                  <p className="text-roble-muted text-sm mt-1">
                    La base sólida con todo lo necesario para vivir bien.
                  </p>
                </div>
                <dl className="divide-y divide-roble-beige">
                  {sistemaEstandar.map(({ label, value }) => (
                    <div key={label} className="px-8 py-4 grid grid-cols-5 gap-4">
                      <dt className="col-span-2 text-xs font-semibold text-roble-muted uppercase tracking-wide pt-0.5">
                        {label}
                      </dt>
                      <dd className="col-span-3 text-sm text-roble-text leading-relaxed">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </AnimateOnScroll>

            {/* Sistema Roble Patagónica */}
            <AnimateOnScroll delay={80}>
              <article className="bg-roble-dark rounded-2xl overflow-hidden h-full relative">
                {/* Premium badge */}
                <span className="absolute top-5 right-5 text-[10px] font-bold tracking-widest uppercase bg-roble-gold text-roble-dark px-3 py-1 rounded-full">
                  PROCREAR
                </span>

                <div className="px-8 py-6 border-b border-white/10">
                  <h3 className="font-serif text-2xl font-semibold text-white">
                    Roble Patagónica
                  </h3>
                  <p className="text-white/50 text-sm mt-1">
                    Sistema certificado con aislación térmica superior.
                  </p>
                </div>
                <dl className="divide-y divide-white/8">
                  {sistemaPatagonica.map(({ label, value }) => (
                    <div key={label} className="px-8 py-4 grid grid-cols-5 gap-4">
                      <dt className="col-span-2 text-xs font-semibold text-white/40 uppercase tracking-wide pt-0.5">
                        {label}
                      </dt>
                      <dd className="col-span-3 text-sm text-white/80 leading-relaxed">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── Guarantee ──────────────────────────── */}
      <section className="py-16 px-4 bg-white border-y border-roble-beige">
        <AnimateOnScroll className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-xl font-semibold text-roble-text mb-3">
            Garantía incluida en ambos sistemas
          </p>
          <p className="text-roble-muted text-sm leading-relaxed max-w-xl mx-auto">
            Viviendas Roble garantiza el 100 % de seguridad en la entrega: calidad
            de materiales, detalles de terminación y servicio posventa. El documento
            de garantía es parte del contrato.
          </p>
        </AnimateOnScroll>
      </section>

      {/* ── Why industrialized ─────────────────── */}
      <section className="py-24 px-4 bg-roble-cream" aria-labelledby="ventajas-heading">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-14">
            <h2
              id="ventajas-heading"
              className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15]"
            >
              Por qué la construcción en seco es una decisión inteligente
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={b.title} delay={i * 80}>
                <article className="bg-white border border-roble-beige rounded-2xl p-7 h-full">
                  <div className="w-8 h-px bg-roble-gold mb-6" aria-hidden="true" />
                  <h3 className="font-serif text-lg font-semibold text-roble-text mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-roble-muted leading-relaxed">{b.desc}</p>
                </article>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="py-20 px-4 bg-white border-t border-roble-beige">
        <AnimateOnScroll className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-roble-text mb-5">
            ¿Querés saber cuál sistema se adapta a tu proyecto?
          </h2>
          <p className="text-roble-muted text-lg leading-relaxed mb-10">
            Te asesoramos sin cargo. Contanos tu terreno, tu zona y tu presupuesto
            y te recomendamos la mejor opción.
          </p>
          <a
            href={WA_PRESUPUESTO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-roble-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
          >
            Consultá por WhatsApp →
          </a>
        </AnimateOnScroll>
      </section>
    </main>
  );
}
