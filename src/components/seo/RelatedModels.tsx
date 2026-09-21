import Link from "next/link";
import Image from "next/image";
import type { HouseModel } from "@/lib/models";

type Props = {
  models: HouseModel[];
  heading: string;
  lead?: string;
  eyebrow?: string;
  /** Enlace al listado completo. */
  allHref?: string;
  allLabel?: string;
  tone?: "cream" | "white";
  id?: string;
};

/**
 * Grilla compacta de modelos que enlaza a la ficha individual.
 * Es el vehículo principal de enlazado interno hacia /modelos/<slug>.
 */
export default function RelatedModels({
  models,
  heading,
  lead,
  eyebrow,
  allHref = "/modelos",
  allLabel = "Ver todos los modelos",
  tone = "white",
  id = "modelos-relacionados",
}: Props) {
  if (models.length === 0) return null;

  const bg = tone === "cream" ? "bg-roble-cream" : "bg-white";
  const cardBg = tone === "cream" ? "bg-white" : "bg-roble-cream";

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 px-5 sm:px-4 ${bg} border-t border-roble-beige`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-10 sm:mb-12">
          {eyebrow && (
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="font-serif text-3xl sm:text-4xl font-semibold text-roble-text leading-[1.15] mb-4"
          >
            {heading}
          </h2>
          {lead && (
            <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
              {lead}
            </p>
          )}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {models.map((model) => (
            <li key={model.slug}>
              <Link
                href={`/modelos/${model.slug}`}
                className={`group flex flex-col h-full ${cardBg} border border-roble-beige rounded-2xl overflow-hidden hover:border-roble-dark transition-colors duration-200`}
              >
                <div className="relative aspect-[4/3] bg-white overflow-hidden">
                  {model.previewImage ? (
                    <Image
                      src={model.previewImage}
                      alt={`Plano del modelo ${model.name}, casa prefabricada de ${model.areaLabel} con ${model.bedroomsLabel.toLowerCase()}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <span className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-roble-muted">
                      Plano en PDF
                    </span>
                  )}
                  <span className="absolute bottom-3 right-4 font-serif text-roble-text/80 text-lg font-semibold">
                    {model.areaLabel}
                  </span>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[11px] tracking-[0.15em] text-roble-muted uppercase font-medium mb-2">
                    {model.bedroomsLabel} · {model.bathroomsLabel}
                  </p>
                  <h3 className="font-serif text-lg font-semibold text-roble-text leading-snug mb-auto">
                    {model.name}
                  </h3>
                  <span className="text-sm font-medium text-roble-dark mt-4 inline-flex items-center gap-1.5">
                    Ver modelo
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {allHref && (
          <div className="mt-10 text-center">
            <Link
              href={allHref}
              className="inline-flex items-center gap-2 border border-roble-dark text-roble-dark text-sm font-medium px-6 py-3 rounded-xl hover:bg-roble-dark hover:text-white transition-colors duration-200"
            >
              {allLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
