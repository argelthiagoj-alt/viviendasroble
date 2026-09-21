import type { Metadata } from "next";
import Link from "next/link";
import { galleryImages } from "@/lib/gallery";
import { WA_PRESUPUESTO } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, type Crumb } from "@/lib/seo/schema";
import { absoluteUrl } from "@/lib/seo/site";
import JsonLd from "@/components/seo/JsonLd";
import { WhatsAppLink } from "@/components/analytics/TrackedLinks";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import GalleryFullGrid from "@/components/ui/GalleryFullGrid";

const crumbs: Crumb[] = [{ name: "Galería de obras", path: "/galeria" }];

export const metadata: Metadata = buildMetadata({
  title: "Galería de Obras: Casas Entregadas",
  description:
    "Fotos de casas prefabricadas entregadas por Viviendas Roble en Neuquén, Cipolletti, General Roca y la Patagonia. Proyectos reales, no renders.",
  path: "/galeria",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Galería de Obras — Viviendas Roble",
  description:
    "Proyectos de vivienda industrializada entregados en Neuquén, Río Negro y Patagonia.",
  url: absoluteUrl("/galeria"),
};

export default function GaleriaPage() {
  return (
    <>
      <JsonLd data={[schema, breadcrumbSchema(crumbs)]} />

      <main>
        <section className="bg-roble-dark text-white pt-28 pb-16 sm:pt-32 px-5 sm:px-4">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs items={crumbs} className="mb-7 sm:mb-9" />
            <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
              Viviendas Roble · Obras
            </p>
            <h1 className="font-serif text-[34px] sm:text-5xl md:text-6xl font-semibold leading-[1.08] mb-5">
              Casas prefabricadas que ya entregamos
            </h1>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
              Cada obra que entregamos tiene nombre y apellido. Estas son algunas
              de las viviendas construidas en{" "}
              <Link
                href="/casas-prefabricadas/neuquen-capital"
                className="text-white/85 underline underline-offset-2 hover:text-roble-gold transition-colors"
              >
                Neuquén
              </Link>
              ,{" "}
              <Link
                href="/casas-prefabricadas/cipolletti"
                className="text-white/85 underline underline-offset-2 hover:text-roble-gold transition-colors"
              >
                Cipolletti
              </Link>
              ,{" "}
              <Link
                href="/casas-prefabricadas/general-roca"
                className="text-white/85 underline underline-offset-2 hover:text-roble-gold transition-colors"
              >
                General Roca
              </Link>{" "}
              y toda la Patagonia.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 bg-roble-cream">
          <div className="max-w-6xl mx-auto">
            <GalleryFullGrid images={galleryImages} />
          </div>
        </section>

        <section className="py-20 px-4 bg-white border-t border-roble-beige">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-roble-text mb-4">
              ¿Querés una casa así?
            </h2>
            <p className="text-roble-muted text-lg leading-relaxed mb-6">
              Cada proyecto es único. Contanos tu terreno y tus ideas y te
              presentamos una propuesta diseñada para vos.
            </p>
            <p className="text-roble-muted text-sm leading-relaxed mb-10">
              También podés empezar mirando los{" "}
              <Link
                href="/modelos"
                className="text-roble-dark underline underline-offset-2 hover:text-roble-gold transition-colors"
              >
                21 modelos disponibles
              </Link>
              .
            </p>
            <WhatsAppLink
              href={WA_PRESUPUESTO}
              location="gallery"
              className="inline-flex items-center gap-3 bg-roble-dark text-white font-medium px-8 py-4 rounded-xl hover:bg-roble-dark-hover transition-colors duration-200 text-sm"
            >
              Hablemos por WhatsApp →
            </WhatsAppLink>
          </div>
        </section>
      </main>
    </>
  );
}
