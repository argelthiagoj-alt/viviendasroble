import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const faqItems = [
  {
    q: "¿Una casa industrializada es tan resistente como una de obra tradicional?",
    a: "Sí. Los sistemas de construcción en seco como el wood frame o la madera estructural superan los estándares antisísmicos y de resistencia al viento exigidos en la región. Son sistemas específicamente diseñados para condiciones climáticas como las de la Patagonia.",
  },
  {
    q: "¿Cuánto tiempo tarda la construcción?",
    a: "Dependiendo del modelo y las condiciones del terreno, el plazo habitual es de 60 a 120 días hábiles desde el inicio de obra. Antes de arrancar te entregamos el cronograma detallado por escrito.",
  },
  {
    q: "¿Puedo personalizar el diseño?",
    a: "Completamente. Los modelos son una base de partida. Trabajamos junto a vos para adaptar distribución, terminaciones, colores y materiales según tu gusto y presupuesto.",
  },
  {
    q: "¿Cuánto cuesta una casa prefabricada en Neuquén?",
    a: "El costo depende del modelo, la superficie y las terminaciones elegidas. Para darte un número real necesitamos conocer tu terreno y necesidades. Pedí tu presupuesto sin compromiso: es gratis y sin obligación.",
  },
  {
    q: "¿Los permisos municipales están incluidos?",
    a: "Sí. Te asesoramos y acompañamos en toda la gestión de planos y habilitación municipal según la ciudad donde construyas. La casa queda en regla y habilitada.",
  },
  {
    q: "¿Necesito tener terreno propio para empezar?",
    a: "Sí. Para iniciar el proyecto necesitás el terreno. Si todavía estás buscando, podemos orientarte sobre los requisitos técnicos que debe cumplir.",
  },
  {
    q: "¿Con qué anticipo empiezan la obra?",
    a: "Trabajamos con un esquema de pagos escalonado vinculado al avance de obra. No pedimos el total por adelantado. Los términos exactos están detallados en la propuesta.",
  },
  {
    q: "¿Trabajan en toda la provincia de Neuquén y Río Negro?",
    a: "Operamos principalmente en Neuquén capital, Cipolletti, General Roca, Centenario y Plottier. Para otras localidades de Neuquén, Río Negro, La Pampa y Chubut consultanos: evaluamos cada caso.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-24 px-4 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll className="text-center mb-14">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15]"
          >
            Lo que más nos preguntan
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <dl>
            {faqItems.map((item, i) => (
              <details
                key={i}
                className="group border-b border-roble-beige"
              >
                <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-roble-text font-medium text-base leading-snug">
                  <span>{item.q}</span>
                  <span
                    className="flex-none w-6 h-6 flex items-center justify-center rounded-full border border-roble-beige text-roble-muted text-lg leading-none group-open:rotate-45 group-open:border-roble-dark group-open:text-roble-dark transition-all duration-200"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-5 pr-10">
                  <p className="text-roble-muted text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </dl>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
