import Image from "next/image";
import type { HouseModel } from "@/lib/models";

interface Props {
  model: HouseModel;
}

export default function ModelCard({ model }: Props) {
  return (
    <article className="group flex flex-col bg-white border border-roble-beige rounded-2xl overflow-hidden transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)]">
      {/* ── Preview ─────────────────────────────── */}
      <div className="relative aspect-[4/3] bg-roble-cream overflow-hidden">
        {model.previewImage ? (
          <Image
            src={model.previewImage}
            alt={`Plano arquitectónico del modelo ${model.name} — ${model.areaLabel} — Viviendas Roble`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <BlueprintPlaceholder />
        )}

        {/* Badge top-left */}
        {model.badge && (
          <span className="absolute top-3 left-3 z-10 bg-roble-gold text-roble-dark text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full">
            {model.badge}
          </span>
        )}

        {/* Area — bottom-right overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        <span className="absolute bottom-3 right-4 font-serif text-white text-xl font-semibold drop-shadow">
          {model.areaLabel}
        </span>
      </div>

      {/* ── Content ─────────────────────────────── */}
      <div className="flex flex-col flex-1 p-6 gap-5">
        {/* Meta + title */}
        <div className="flex-1 space-y-2">
          <p className="text-[11px] tracking-[0.15em] text-roble-muted uppercase font-medium">
            {model.specs}
          </p>
          <h3 className="font-serif text-xl font-semibold text-roble-text leading-snug">
            {model.name}
          </h3>
          <p className="text-sm text-roble-muted leading-relaxed">
            {model.description}
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-roble-beige" />

        {/* CTAs */}
        <div className="flex flex-col gap-2.5">
          <a
            href={model.pdfHref}
            download={model.downloadName}
            className="flex items-center justify-center gap-2.5 bg-roble-dark text-white text-sm font-medium py-3 px-5 rounded-xl transition-colors duration-200 hover:bg-roble-dark-hover"
          >
            <DownloadIcon />
            Descargar plano
          </a>
          <a
            href={model.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 border border-roble-beige text-roble-text text-sm font-medium py-3 px-5 rounded-xl transition-colors duration-200 hover:border-roble-dark hover:bg-roble-cream"
          >
            <WhatsAppIcon />
            Consultar por este modelo
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Sub-components ─────────────────────────────── */

function BlueprintPlaceholder() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-roble-cream">
      <div className="flex flex-col items-center gap-3 text-roble-beige">
        {/* Floor-plan grid icon */}
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.25"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="44" height="44" rx="2" />
          <line x1="4" y1="18" x2="48" y2="18" />
          <line x1="4" y1="34" x2="48" y2="34" />
          <line x1="18" y1="4" x2="18" y2="48" />
          <line x1="34" y1="4" x2="34" y2="48" />
          {/* door arc */}
          <path d="M18 34 Q18 44 28 44" strokeDasharray="2 2" />
        </svg>
        <span className="text-xs tracking-widest text-roble-muted uppercase">
          Plano disponible en PDF
        </span>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
