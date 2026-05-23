import Link from "next/link";
import { galleryImages } from "@/lib/gallery";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GalleryPreviewGrid from "@/components/ui/GalleryPreviewGrid";

const preview = galleryImages.slice(0, 4);

export default function GalleryPreviewSection() {
  return (
    <section className="py-14 sm:py-24 px-5 sm:px-4 bg-white" aria-labelledby="galeria-preview-heading">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-3">
              Casas reales
            </p>
            <h2
              id="galeria-preview-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15] mb-4"
            >
              Casas reales, pensadas para vivir mejor.
            </h2>
            <p className="text-roble-muted text-base md:text-lg leading-relaxed">
              Conocé terminaciones, fachadas y proyectos entregados en la región.
            </p>
          </div>
          <Link
            href="/galeria"
            className="shrink-0 text-sm font-medium text-roble-dark border-b border-roble-dark/30 pb-0.5 hover:border-roble-dark transition-colors duration-200"
          >
            Ver galería completa →
          </Link>
        </AnimateOnScroll>

        <GalleryPreviewGrid images={preview} />

        <AnimateOnScroll delay={300} className="mt-8 text-center">
          <Link
            href="/galeria"
            className="inline-flex items-center gap-2 border border-roble-dark text-roble-dark text-sm font-medium px-7 py-3.5 rounded-xl hover:bg-roble-cream transition-colors duration-200"
          >
            Ver los {galleryImages.length} proyectos →
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
