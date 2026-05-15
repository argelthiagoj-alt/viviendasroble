import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/lib/gallery";
import { WA_PRESUPUESTO } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Galería de Obras",
  description:
    "Fotos de viviendas prefabricadas entregadas por Viviendas Roble en Neuquén, Cipolletti y Río Negro. Proyectos reales, terminaciones premium.",
  alternates: { canonical: "/galeria" },
  openGraph: {
    title: "Galería de Obras — Viviendas Roble",
    description:
      "Proyectos reales entregados en Neuquén y Patagonia. Calidad, diseño y terminaciones premium.",
    type: "website",
    locale: "es_AR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galería de Obras — Viviendas Roble",
  description:
    "Proyectos de vivienda industrializada entregados en Neuquén, Río Negro y Patagonia.",
  url: "https://viviendasroble.com/galeria",
};

/* Layout spans for an editorial grid (3-col desktop) */
const spans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
  "md:col-span-3",
];

export default function GaleriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* Hero */}
        <section className="bg-roble-dark text-white pt-32 pb-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
              Viviendas Roble · Obras
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.1] mb-5">
              Proyectos entregados
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
              Cada obra que entregamos tiene nombre y apellido. Estas son algunas
              de las viviendas construidas en Neuquén, Cipolletti, General Roca y
              toda la Patagonia.
            </p>
          </div>
        </section>

        {/* Gallery grid */}
        <section className="py-16 px-4 bg-roble-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((img, i) => (
                <AnimateOnScroll
                  key={img.src}
                  delay={i * 60}
                  className={`relative overflow-hidden rounded-2xl bg-roble-beige group ${
                    spans[i] ?? ""
                  } ${i === 6 ? "aspect-[21/9]" : "aspect-[4/3]"}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    sizes={
                      spans[i]?.includes("col-span-2")
                        ? "(max-width: 768px) 100vw, 66vw"
                        : spans[i]?.includes("col-span-3")
                        ? "100vw"
                        : "(max-width: 768px) 100vw, 33vw"
                    }
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  {/* Overlay with location */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-4 left-5 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.location}
                  </span>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-white border-t border-roble-beige">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-roble-text mb-4">
              ¿Querés una casa así?
            </h2>
            <p className="text-roble-muted text-lg leading-relaxed mb-10">
              Cada proyecto es único. Contanos tu terreno y tus ideas y te
              presentamos una propuesta diseñada para vos.
            </p>
            <a
              href={WA_PRESUPUESTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-roble-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
            >
              Hablemos por WhatsApp →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
