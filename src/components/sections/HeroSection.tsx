import Link from "next/link";
import { WA_PRESUPUESTO } from "@/lib/constants";
import { galleryImages } from "@/lib/gallery";
import HeroVisual, { type HeroVisualImage } from "@/components/ui/HeroVisual";
import { WhatsAppLink } from "@/components/analytics/TrackedLinks";

/* Las tres que mejor entran en 4:3 sin recorte y comparten luz cálida.
   No se pisan con las cuatro de GalleryPreviewSection más abajo. */
const HERO_SRCS = [
  "/assets/gallery/casa-5.jpeg",
  "/assets/gallery/casa-11.jpeg",
  "/assets/gallery/casa-8.jpeg",
];

// Los alt salen de gallery.ts para no mantener dos descripciones por foto.
const heroImages: HeroVisualImage[] = HERO_SRCS.flatMap((src) => {
  const image = galleryImages.find((i) => i.src === src);
  return image ? [image] : [];
});

const TRUST_CHIPS = [
  "Precio cerrado",
  "Entrega planificada",
  "Certificado PROCREAR",
];

/**
 * Hero a dos columnas desde `lg` (1024px): la copy ocupa ~57 % y el
 * carrusel ~43 %, alineados por su centro vertical.
 *
 * Es Server Component: el H1 y los CTA viajan en el HTML inicial y sólo
 * el carrusel es cliente.
 */
export default function HeroSection() {
  return (
    <section
      className="relative bg-roble-dark overflow-hidden"
      aria-label="Hero — Viviendas Roble"
    >
      {/* Warm radial accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 80% 30%, rgba(200,168,107,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      {/* En pantallas grandes el contenedor se ensancha para que el
          carrusel no quede diminuto frente al H1. */}
      <div className="relative z-10 max-w-6xl xl:max-w-[82rem] mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-11 lg:gap-10 xl:gap-14 items-center">
          {/* ── Copy ──────────────────────────── */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-3.5 py-1.5 mb-5 sm:mb-7 backdrop-blur-sm">
              <span
                className="w-1.5 h-1.5 rounded-full bg-roble-gold"
                aria-hidden="true"
              />
              <span className="text-white/80 text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold">
                Viviendas industrializadas en{" "}
                <span className="text-roble-gold">toda la Patagonia</span>
              </span>
            </div>

            {/* H1 — baja de tamaño en lg porque la columna se angosta */}
            <h1 className="font-serif text-[34px] sm:text-5xl md:text-[52px] lg:text-[46px] xl:text-[54px] font-semibold text-white leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6">
              Casas prefabricadas en Neuquén y Río Negro,{" "}
              <span className="text-roble-gold">
                con precio cerrado y entrega planificada.
              </span>
            </h1>

            {/* Subtitle — versión mobile más corta vía clases responsive */}
            <p className="hidden sm:block text-white/65 text-lg xl:text-xl leading-relaxed mb-8 sm:mb-9 lg:max-w-xl">
              Si estás pensando en construir tu casa en Neuquén o Río Negro,
              te ofrecemos modelos de casas pensados para tu terreno y tu
              familia, con presupuesto cerrado y entrega planificada. Más de
              40 años acompañando a quienes quieren construir su vivienda en
              Patagonia.
            </p>
            <p className="sm:hidden text-white/70 text-base leading-relaxed mb-7">
              Modelos de casas pensados para tu terreno y tu familia.
              Más de 40 años construyendo viviendas en Patagonia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center lg:justify-start gap-2.5 sm:gap-3 mb-7 sm:mb-10">
              <WhatsAppLink
                href={WA_PRESUPUESTO}
                location="hero"
                className="inline-flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold px-7 py-3.5 sm:py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
              >
                Solicitar presupuesto
              </WhatsAppLink>
              <Link
                href="/modelos"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-3.5 sm:py-4 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
              >
                Ver modelos
              </Link>
            </div>

            {/* Trust chips */}
            <ul className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-5 gap-y-2 text-white/55 text-[11px] sm:text-xs">
              {TRUST_CHIPS.map((chip) => (
                <li key={chip} className="flex items-center gap-1.5">
                  <span className="text-roble-gold" aria-hidden="true">
                    ✓
                  </span>
                  {chip}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Carrusel ──────────────────────── */}
          <div className="w-full max-w-xl mx-auto lg:max-w-none 2xl:-mr-8">
            <HeroVisual
              images={heroImages}
              interval={5000}
              ariaLabel="Viviendas entregadas por Viviendas Roble"
              aspect="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3]"
              // Sobre el fold en desktop: es candidata a LCP, así que la
              // primera se precarga. Las otras dos quedan en lazy.
              priority
              sizes="(max-width: 1023px) 100vw, 580px"
            />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-roble-cream to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
