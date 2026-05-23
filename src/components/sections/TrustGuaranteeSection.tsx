import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const guarantees = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Garantía estructural",
    desc: "Garantizamos la estructura portante. El documento de garantía forma parte del contrato firmado.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Materiales certificados",
    desc: "Trabajamos con proveedores homologados. Madera, acero y aislantes con certificación de calidad.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Permisos y habilitación",
    desc: "Asesoramos y acompañamos toda la gestión de planos y habilitación municipal. La casa queda en regla.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Equipo técnico propio",
    desc: "No tercerizamos la construcción. Nuestro equipo está presente en cada etapa de la obra, sin intermediarios.",
  },
];

export default function TrustGuaranteeSection() {
  return (
    <section
      className="py-14 sm:py-24 px-5 sm:px-4 bg-roble-cream"
      aria-labelledby="garantias-heading"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Tranquilidad incluida
          </p>
          <h2
            id="garantias-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Construido para durar. Respaldado para tranquilizarte.
          </h2>
          <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
            Más de 40 años de trayectoria respaldan cada casa que entregamos.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {guarantees.map((g, i) => (
            <AnimateOnScroll key={g.title} delay={i * 80}>
              <article className="flex gap-5 bg-white border border-roble-beige rounded-2xl p-7">
                <div className="flex-none w-11 h-11 flex items-center justify-center rounded-xl bg-roble-cream text-roble-dark mt-0.5">
                  {g.icon}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-roble-text mb-2 leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-sm text-roble-muted leading-relaxed">
                    {g.desc}
                  </p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>

        {/* PROCREAR badge */}
        <AnimateOnScroll delay={300} className="mt-10">
          <div className="flex items-center justify-center gap-4 bg-white border border-roble-beige rounded-2xl py-5 px-8 max-w-lg mx-auto">
            <div className="w-10 h-10 flex-none flex items-center justify-center rounded-full bg-roble-gold/15">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A86B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-sm text-roble-text">
              <span className="font-semibold">Certificado PROCREAR</span> — Apto para financiación
              estatal. Te asesoramos en la gestión.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
