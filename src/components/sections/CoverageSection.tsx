import Link from "next/link";
import { CITIES, WA_GENERAL } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CoverageSection() {
  return (
    <section
      id="zonas"
      className="py-24 px-4 bg-white"
      aria-labelledby="zonas-heading"
    >
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Zona de operaciones
          </p>
          <h2
            id="zonas-heading"
            className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Construimos en toda la región
          </h2>
          <p className="text-roble-muted text-lg leading-relaxed">
            Operamos en Neuquén, Río Negro, La Pampa y Chubut. Si estás en la
            Patagonia, llegamos.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {CITIES.map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="group flex items-center justify-between bg-roble-cream border border-roble-beige rounded-xl px-5 py-4 hover:border-roble-dark hover:bg-white transition-colors duration-200"
              >
                <span className="text-sm font-medium text-roble-text">
                  {city.name}
                </span>
                <span
                  className="text-roble-muted group-hover:text-roble-dark transition-colors duration-200 text-sm"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} className="text-center">
          <p className="text-roble-muted text-sm mb-4">
            ¿Estás en otra localidad?
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
