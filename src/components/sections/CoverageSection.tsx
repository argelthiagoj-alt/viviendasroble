import Link from "next/link";
import { CITIES, WA_GENERAL } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CoverageSection() {
  return (
    <section
      id="zonas"
      className="py-14 sm:py-24 px-5 sm:px-4 bg-white"
      aria-labelledby="zonas-heading"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Cobertura regional
          </p>
          <h2
            id="zonas-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Constructora de casas en Neuquén, Río Negro y toda la Patagonia
          </h2>
          <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
            Desde nuestra base en Neuquén acompañamos a familias de Neuquén, Río
            Negro, La Pampa y Chubut a construir su casa. Trabajamos con
            modelos industrializados, casas prefabricadas y opciones llave en
            mano para terreno propio.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {CITIES.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="group flex flex-col bg-roble-cream border border-roble-beige rounded-xl px-4 py-3.5 hover:border-roble-dark hover:bg-white transition-colors duration-200"
                aria-label={`Casas prefabricadas en ${city.name}, ${city.province}`}
              >
                <span className="text-sm font-medium text-roble-text leading-tight">
                  {city.name}
                </span>
                <span className="text-[11px] text-roble-muted mt-0.5 tracking-wide">
                  {city.province}
                </span>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="text-center">
          <p className="text-roble-muted text-sm mb-4">
            ¿Estás en otra localidad de Neuquén, Río Negro o Patagonia?
            Consultanos por disponibilidad en tu zona.
          </p>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-roble-dark text-roble-dark text-sm font-medium px-6 py-3 rounded-xl hover:bg-roble-cream transition-colors duration-200"
          >
            Consultanos por tu zona
          </a>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
