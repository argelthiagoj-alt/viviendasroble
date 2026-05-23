import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const blocks = [
  {
    img: "/assets/gallery/casa-4.jpeg",
    title: "Estructura resistente",
    desc: "Sistema constructivo pensado para resistir el uso diario y las condiciones de la región.",
  },
  {
    img: "/assets/gallery/casa-7.jpeg",
    title: "Aislación térmica",
    desc: "Mayor confort en invierno y verano, con materiales adecuados para Patagonia.",
  },
  {
    img: "/assets/gallery/casa-9.jpeg",
    title: "Terminaciones listas para habitar",
    desc: "Espacios cálidos, funcionales y preparados para mudarse.",
  },
];

export default function ClimateSection() {
  return (
    <section
      className="py-14 sm:py-24 px-5 sm:px-4 bg-roble-beige/40"
      aria-labelledby="clima-heading"
      style={{
        backgroundImage:
          "linear-gradient(rgba(232,221,204,0.4), rgba(232,221,204,0.4)), repeating-linear-gradient(0deg, transparent, transparent 38px, rgba(138,90,50,0.04) 38px, rgba(138,90,50,0.04) 39px), repeating-linear-gradient(90deg, transparent, transparent 38px, rgba(138,90,50,0.04) 38px, rgba(138,90,50,0.04) 39px)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            Pensadas para la región
          </p>
          <h2
            id="clima-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-5"
          >
            Casas modernas, funcionales y adaptadas a la vida en Patagonia
          </h2>
          <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
            Calidad, durabilidad y confort térmico pensados para los inviernos
            de Neuquén y Río Negro. Casas para vivir todo el año, no solo para
            mirar en un plano.
          </p>
        </AnimateOnScroll>

        {/* Mobile: carrusel horizontal */}
        <div className="md:hidden -mx-5 px-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {blocks.map((b) => (
            <article
              key={b.title}
              className="snap-start shrink-0 w-[80%] bg-white rounded-2xl overflow-hidden border border-roble-beige flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={b.img}
                  alt={b.title}
                  fill
                  sizes="80vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-base font-semibold text-roble-text mb-2 leading-snug">
                  {b.title}
                </h3>
                <p className="text-sm text-roble-muted leading-relaxed">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <AnimateOnScroll key={b.title} delay={i * 90}>
              <article className="bg-white rounded-2xl overflow-hidden border border-roble-beige h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={b.img}
                    alt={b.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1">
                  <h3 className="font-serif text-xl font-semibold text-roble-text mb-2.5 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-sm text-roble-muted leading-relaxed">{b.desc}</p>
                </div>
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
