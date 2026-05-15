import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/gallery";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

// Show only the first 4 images as home preview
const preview = galleryImages.slice(0, 4);

export default function GalleryPreviewSection() {
  return (
    <section className="py-24 px-4 bg-white" aria-labelledby="galeria-preview-heading">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-3">
              Obras realizadas
            </p>
            <h2
              id="galeria-preview-heading"
              className="font-serif text-4xl md:text-5xl font-semibold text-roble-text leading-[1.15]"
            >
              Proyectos entregados
            </h2>
          </div>
          <Link
            href="/galeria"
            className="shrink-0 text-sm font-medium text-roble-dark border-b border-roble-dark/30 pb-0.5 hover:border-roble-dark transition-colors duration-200"
          >
            Ver galería completa →
          </Link>
        </AnimateOnScroll>

        {/* Grid — asymmetric editorial layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Large image — first one spans 2 rows on desktop */}
          <AnimateOnScroll className="col-span-2 md:col-span-2 row-span-1 relative overflow-hidden rounded-2xl bg-roble-beige aspect-[16/9] md:aspect-[4/3] group">
            <Image
              src={preview[0].src}
              alt={preview[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 66vw"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white text-xs font-medium">
              {preview[0].location}
            </span>
          </AnimateOnScroll>

          {/* Second image — stacked right on desktop */}
          <AnimateOnScroll delay={60} className="col-span-2 md:col-span-1 relative overflow-hidden rounded-2xl bg-roble-beige aspect-[16/9] md:aspect-[4/3] group">
            <Image
              src={preview[1].src}
              alt={preview[1].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 33vw"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white text-xs font-medium">
              {preview[1].location}
            </span>
          </AnimateOnScroll>

          {/* Bottom two images — equal width */}
          {preview.slice(2, 4).map((img, i) => (
            <AnimateOnScroll
              key={img.src}
              delay={(i + 2) * 60}
              className="col-span-1 relative overflow-hidden rounded-2xl bg-roble-beige aspect-[4/3] group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-3 left-4 text-white text-xs font-medium">
                {img.location}
              </span>
            </AnimateOnScroll>
          ))}
        </div>

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
