import Link from "next/link";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/**
 * Hub de categorías de la home. Es el punto desde el que la home deriva
 * autoridad hacia las landings de producto y sistema constructivo.
 * Cada entrada describe realmente lo que hay del otro lado.
 */
const categories = [
  {
    href: "/casas-prefabricadas",
    title: "Casas prefabricadas",
    desc: "Qué es, qué incluye y cómo se construye una casa prefabricada con precio cerrado.",
  },
  {
    href: "/viviendas-industrializadas",
    title: "Viviendas industrializadas",
    desc: "El sistema constructivo planificado de punta a punta, con cronograma y control de calidad.",
  },
  {
    href: "/casas-modulares",
    title: "Casas modulares",
    desc: "Módulos habitacionales y construcción modular: usos, superficies y montaje.",
  },
  {
    href: "/construccion-en-seco",
    title: "Construcción en seco",
    desc: "Los materiales que usamos, punto por punto: estructura, paneles, cubierta y aislación.",
  },
  {
    href: "/casas-llave-en-mano",
    title: "Casas llave en mano",
    desc: "El proceso completo, de la primera charla a la entrega, con un solo interlocutor.",
  },
  {
    href: "/casas-para-patagonia",
    title: "Casas para clima patagónico",
    desc: "Frío, viento y aislación: qué le exige la región a una vivienda y cómo lo resolvemos.",
  },
];

export default function CategoriesSection() {
  return (
    <section
      id="categorias"
      className="py-14 sm:py-24 px-5 sm:px-4 bg-roble-cream border-y border-roble-beige"
      aria-labelledby="categorias-heading"
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Cómo construimos
          </p>
          <h2
            id="categorias-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Prefabricadas, industrializadas, modulares: qué significa cada cosa
          </h2>
          <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
            Son términos que se usan como sinónimos y no siempre lo son.
            Explicamos cada uno con lo que realmente hacemos en cada caso.
          </p>
        </AnimateOnScroll>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((category, i) => (
            <li key={category.href}>
              <AnimateOnScroll delay={i * 70} className="h-full">
                <Link
                  href={category.href}
                  className="group flex flex-col h-full bg-white border border-roble-beige rounded-2xl p-6 sm:p-7 hover:border-roble-dark transition-colors duration-200"
                >
                  <div
                    className="w-8 h-px bg-roble-gold mb-5"
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-roble-text mb-2.5 leading-snug">
                    {category.title}
                  </h3>
                  <p className="text-sm text-roble-muted leading-relaxed mb-5">
                    {category.desc}
                  </p>
                  <span className="mt-auto text-sm font-medium text-roble-dark inline-flex items-center gap-1.5">
                    Ver más
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </Link>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
