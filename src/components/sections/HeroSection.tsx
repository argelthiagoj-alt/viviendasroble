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

      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="text-center">
          <div className="text-left sm:text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-1.5 mb-7 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-roble-gold" aria-hidden="true" />
              <span className="text-white/80 text-[11px] tracking-[0.18em] uppercase font-semibold">
                Viviendas industrializadas en{" "}
                <span className="text-roble-gold">toda la Patagonia</span>
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-serif text-[44px] sm:text-5xl md:text-6xl lg:text-[64px] font-semibold text-white leading-[1.05] mb-6">
              Viviendas industrializadas en Neuquén y Río Negro,{" "}
              <span className="text-roble-gold">con precio cerrado y entrega planificada.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white/65 text-lg md:text-xl leading-relaxed max-w-2xl sm:mx-auto mb-9">
              Si estás pensando en construir tu casa en Neuquén o Río Negro,
              te ofrecemos modelos de casas pensados para tu terreno y tu
              familia, con presupuesto cerrado y entrega planificada. Más de
              40 años acompañando a quienes quieren construir su vivienda en
              Patagonia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-3 mb-10">
              <a
                href={WA_PRESUPUESTO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold px-7 py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
              >
                Solicitar presupuesto
              </a>
              <a
                href="/#modelos"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-4 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
              >
                Ver modelos
              </a>
            </div>

            {/* Trust chips */}
            <ul className="flex flex-wrap items-center sm:justify-center gap-x-5 gap-y-2 text-white/55 text-xs">
              {[
                "Precio cerrado, sin adicionales",
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
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-roble-cream to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
