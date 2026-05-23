import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import FAQList from "@/components/ui/FAQList";

export const faqItems = [
  {
    q: "¿Cómo empiezo a construir mi casa?",
    a: "El primer paso es contarnos qué necesitás, dónde está tu terreno y para cuántas personas estás pensando la casa. Coordinamos una charla sin compromiso, te mostramos modelos compatibles y armamos una propuesta con tiempos y presupuesto cerrado por escrito.",
  },
  {
    q: "¿Qué necesito si ya tengo un terreno?",
    a: "Con el terreno propio podés arrancar el proyecto. Te pedimos los datos básicos del lote (ubicación, dimensiones, accesos y servicios disponibles) para evaluar qué modelo encaja mejor y qué tareas de preparación hacen falta. Si todavía no escrituraste, igual podemos avanzar con la propuesta.",
  },
  {
    q: "¿Construyen casas familiares en Neuquén y Río Negro?",
    a: "Sí. Tenemos modelos pensados para familias en distintas etapas: desde la primera vivienda compacta hasta casas más amplias con varios dormitorios. Trabajamos en Neuquén, Río Negro y otras zonas de Patagonia.",
  },
  {
    q: "¿Puedo elegir entre distintos modelos de casas?",
    a: "Sí. En la landing mostramos los modelos destacados y en la página de planos podés ver todo el catálogo: casas chicas, medianas y grandes, con variantes de distribución. Todos los modelos son personalizables.",
  },
  {
    q: "¿Qué conviene más: obra tradicional o vivienda industrializada?",
    a: "Depende de tus prioridades. Si valorás precio cerrado, plazo definido y menos incertidumbre, la construcción industrializada te da más control. La obra tradicional puede tener flexibilidad pero suele implicar más demoras y desvíos de costo. En la sección de comparativa lo mostramos punto por punto.",
  },
  {
    q: "¿Puedo pedir un presupuesto para construir mi casa?",
    a: "Sí. El presupuesto es sin cargo y sin compromiso. Te lo entregamos por escrito con detalle de qué incluye, cronograma y forma de pago. Podés escribirnos por WhatsApp o usar el formulario de contacto.",
  },
  {
    q: "¿Cuánto cuesta construir una casa con Viviendas Roble?",
    a: "El costo depende del modelo, los metros cuadrados, las terminaciones y la ubicación del terreno. Para darte un número real necesitamos conocer tu proyecto. Pedí el presupuesto sin cargo y te enviamos cifras concretas sobre tu caso.",
  },
  {
    q: "¿Qué diferencia hay entre una casa prefabricada y una vivienda industrializada?",
    a: "Son conceptos cercanos pero no idénticos. Una casa prefabricada se arma con módulos o paneles fabricados en taller y montados en obra. Una vivienda industrializada va un paso más allá: aplica un sistema constructivo planificado de punta a punta, con cronograma, control de calidad y materiales certificados. En Viviendas Roble trabajamos con construcción industrializada para garantizar plazo, precio cerrado y calidad uniforme.",
  },
  {
    q: "¿Una vivienda industrializada es tan resistente como una de obra tradicional?",
    a: "Sí. Los sistemas en seco como wood frame y steel frame cumplen y superan los estándares estructurales, antisísmicos y de resistencia al viento exigidos en la región. Están específicamente pensados para el clima patagónico de Neuquén y Río Negro.",
  },
  {
    q: "¿Cuánto tarda en construirse una vivienda industrializada?",
    a: "Según el modelo y las condiciones del terreno, el plazo habitual va de 60 a 120 días hábiles desde el inicio de obra. Antes de arrancar te entregamos el cronograma detallado por escrito.",
  },
  {
    q: "¿Cuánto cuesta una casa prefabricada en Neuquén o Río Negro?",
    a: "El costo depende del modelo, la superficie y las terminaciones elegidas. Para darte un número real necesitamos conocer tu terreno y tus necesidades. Pedí tu presupuesto sin compromiso: es gratis y sin obligación.",
  },
  {
    q: "¿El presupuesto es cerrado o puede haber sorpresas?",
    a: "El presupuesto se firma cerrado por escrito antes del inicio de obra. Si en el camino vos decidís cambiar materiales o ampliar el proyecto, ajustamos por escrito. No hay adicionales sorpresa por parte nuestra.",
  },
  {
    q: "¿Puedo construir si ya tengo terreno?",
    a: "Sí. Si tenés terreno propio podemos empezar el proyecto. Adaptamos el modelo al terreno, asesoramos en los requisitos técnicos y gestionamos los permisos municipales según la localidad.",
  },
  {
    q: "¿Trabajan en Neuquén, Río Negro y otras zonas de la Patagonia?",
    a: "Sí. Operamos principalmente en Neuquén Capital, Plottier, Centenario, Cipolletti, General Roca, Allen y Villa Regina. También evaluamos proyectos en otras localidades de Neuquén, Río Negro, La Pampa y Chubut. Consultanos por tu zona.",
  },
  {
    q: "¿Las viviendas sirven para el clima patagónico?",
    a: "Sí. Aplicamos aislación térmica, materiales y detalles constructivos pensados para los inviernos fríos y los vientos de la Patagonia. El objetivo es confort real adentro de tu casa todo el año.",
  },
  {
    q: "¿Puedo personalizar el modelo?",
    a: "Completamente. Los modelos son una base de partida. Adaptamos distribución, terminaciones, colores y materiales según tu gusto, tu terreno y tu presupuesto.",
  },
  {
    q: "¿Qué incluye una vivienda de Viviendas Roble?",
    a: "Cada propuesta detalla por escrito qué incluye: estructura, cerramientos, aislaciones, instalaciones, terminaciones interiores y exteriores. También te indicamos qué tareas quedan a tu cargo si las hay (por ejemplo conexiones a servicios) para que no haya zonas grises.",
  },
  {
    q: "¿Qué mantenimiento requiere una vivienda industrializada?",
    a: "Mantenimiento normal de cualquier vivienda: revisión periódica de pinturas exteriores, sellados y desagües. Los sistemas en seco están pensados para durar décadas con cuidados básicos.",
  },
  {
    q: "¿Las casas son aptas para financiación Procrear?",
    a: "Sí. Nuestros modelos son compatibles con líneas de financiación estatales como Procrear. Te asesoramos en la gestión y documentación necesaria.",
  },
  {
    q: "¿Los permisos municipales están incluidos?",
    a: "Te asesoramos y acompañamos en la gestión de planos y habilitación municipal según la ciudad donde construyas. La casa queda en regla y habilitada.",
  },
  {
    q: "¿Cómo empiezo el proceso?",
    a: "Escribinos por WhatsApp o el formulario contándonos qué necesitás y dónde está tu terreno. Coordinamos una primera charla sin compromiso, evaluamos tu proyecto y te enviamos una propuesta con modelos, tiempos y presupuesto cerrado.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-14 sm:py-24 px-5 sm:px-4 bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <AnimateOnScroll className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15]"
          >
            Lo que más nos preguntan
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <FAQList items={faqItems} initial={5} />
        </AnimateOnScroll>
      </div>
    </section>
  );
}

