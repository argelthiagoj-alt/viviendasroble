import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const steps = [
  {
    n: "01",
    title: "Consulta inicial",
    desc: "Nos contás tu terreno, tus necesidades y tu presupuesto. Sin compromiso. Respondemos en menos de 24 horas.",
  },
  {
    n: "02",
    title: "Propuesta y diseño",
    desc: "Te presentamos la propuesta adaptada a tu terreno: planos, materiales, tiempos y precio cerrado por escrito.",
  },
  {
    n: "03",
    title: "Inicio de obra",
    desc: "Aprobado el proyecto, arranca la construcción con cronograma detallado y puntos de control definidos.",
  },
  {
    n: "04",
    title: "Supervisión y avance",
    desc: "Nuestro equipo técnico supervisa cada etapa. Recibís actualizaciones del avance sin tener que pedirlas.",
  },
  {
    n: "05",
    title: "Entrega",
    desc: "Recibís tu casa terminada, revisada y lista para habitar. Estamos en la entrega final junto a vos.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      className="py-24 px-4 bg-white"
      aria-labelledby="proceso-heading"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Cómo trabajamos
          </p>
          <h2
            id="proceso-heading"
            className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Así funciona trabajar con Viviendas Roble
          </h2>
          <p className="text-roble-muted text-lg leading-relaxed">
            Un proceso claro, de principio a fin. Sin vueltas, sin sorpresas.
          </p>
        </AnimateOnScroll>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden md:block absolute left-[2.25rem] top-8 bottom-8 w-px bg-roble-beige"
            aria-hidden="true"
          />

          <ol className="space-y-6">
            {steps.map((step, i) => (
              <AnimateOnScroll key={step.n} delay={i * 90}>
                <li className="flex gap-6 md:gap-8 items-start">
                  {/* Number circle */}
                  <div className="relative flex-none w-[4.5rem] h-[4.5rem] flex items-center justify-center rounded-full border-2 border-roble-beige bg-white z-10 shrink-0">
                    <span className="font-serif text-lg font-semibold text-roble-gold">
                      {step.n}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-3 pb-2">
                    <h3 className="font-serif text-xl font-semibold text-roble-text mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-roble-muted text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </li>
              </AnimateOnScroll>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
