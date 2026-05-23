import { WA_PRESUPUESTO } from "@/lib/constants";

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

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-4 pt-24 pb-14 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-3.5 py-1.5 mb-5 sm:mb-7 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-roble-gold" aria-hidden="true" />
            <span className="text-white/80 text-[10px] sm:text-[11px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold">
              Viviendas industrializadas en{" "}
              <span className="text-roble-gold">toda la Patagonia</span>
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-serif text-[34px] sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-white leading-[1.08] sm:leading-[1.05] mb-4 sm:mb-6">
            Tu casa propia en Neuquén y Río Negro,{" "}
            <span className="text-roble-gold">con precio cerrado y entrega planificada.</span>
          </h1>

          {/* Subtitle — versión mobile más corta vía clases responsive */}
          <p className="hidden sm:block text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-9">
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
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-2.5 sm:gap-3 mb-7 sm:mb-10">
            <a
              href={WA_PRESUPUESTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold px-7 py-3.5 sm:py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
            >
              Solicitar presupuesto
            </a>
            <a
              href="/#modelos"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-3.5 sm:py-4 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
            >
              Ver modelos
            </a>
          </div>

          {/* Trust chips */}
          <ul className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-2 text-white/55 text-[11px] sm:text-xs">
            {[
              "Precio cerrado",
              "Entrega planificada",
              "Certificado PROCREAR",
            ].map((chip) => (
              <li key={chip} className="flex items-center gap-1.5">
                <span className="text-roble-gold">✓</span>
                {chip}
              </li>
            ))}
          </ul>
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
