import { WA_PRESUPUESTO } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CTABanner() {
  return (
    <section className="py-20 px-4 bg-roble-cream border-y border-roble-beige">
      <AnimateOnScroll className="max-w-3xl mx-auto text-center">
        <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5">
          El primer paso es gratis
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-roble-text leading-snug mb-5">
          ¿Tenés terreno y no sabés por dónde empezar?
        </h2>
        <p className="text-roble-muted text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Te ayudamos a dar el primer paso. Contanos tu situación y te damos
          orientación sin cargo y sin presión.
        </p>
        <a
          href={WA_PRESUPUESTO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-roble-dark text-white font-semibold px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
        >
          Hablemos por WhatsApp
          <span aria-hidden="true">→</span>
        </a>
      </AnimateOnScroll>
    </section>
  );
}
