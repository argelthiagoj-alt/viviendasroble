import { WA_PRESUPUESTO } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-roble-dark overflow-hidden"
      aria-label="Hero — Viviendas Roble"
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      {/* Warm gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(200,168,107,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 pb-16">
        {/* Eyebrow */}
        <p className="text-roble-gold text-[11px] tracking-[0.22em] uppercase font-semibold mb-8">
          Neuquén · Patagonia · Desde 1983
        </p>

        {/* H1 */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-semibold text-white leading-[1.05] mb-6">
          Tu casa propia,{" "}
          <span className="text-roble-gold">entregada en tiempo récord.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Construimos viviendas industrializadas de diseño en Neuquén, Cipolletti,
          General Roca y Río Negro. Sin sorpresas de precio, sin demoras, con un
          equipo que te acompaña desde el primer plano hasta la entrega.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href={WA_PRESUPUESTO}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold px-8 py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
          >
            Solicitá tu presupuesto gratis
          </a>
          <a
            href="/#modelos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
          >
            Ver modelos disponibles
          </a>
        </div>

        {/* Trust chips */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/50 text-xs">
          {[
            "Presupuesto cerrado sin adicionales",
            "Entrega en plazo garantizado",
            "Certificado PROCREAR",
          ].map((chip) => (
            <li key={chip} className="flex items-center gap-1.5">
              <span className="text-roble-gold">✓</span>
              {chip}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-roble-cream to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
