import type { CtaLocation, TrackedModel } from "@/lib/analytics";
import {
  QuoteCtaLink,
  WhatsAppLink,
} from "@/components/analytics/TrackedLinks";

type Props = {
  heading: string;
  body: string;
  whatsappHref: string;
  whatsappLabel?: string;
  /** Enlace secundario interno (contacto, modelos). */
  secondary?: { label: string; href: string };
  /** Dónde se reporta este bloque en analytics. */
  ctaLocation: CtaLocation;
  /** Si el CTA corresponde a un modelo concreto, su metadata. */
  model?: TrackedModel;
};

/** CTA de cierre de las landings SEO. */
export default function LandingCTA({
  heading,
  body,
  whatsappHref,
  whatsappLabel = "Pedir presupuesto por WhatsApp",
  secondary = { label: "Ver formas de contacto", href: "/contacto" },
  ctaLocation,
  model,
}: Props) {
  return (
    <section className="py-16 sm:py-20 px-5 sm:px-4 bg-roble-dark text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5 leading-snug">
          {heading}
        </h2>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-9">
          {body}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-3">
          <WhatsAppLink
            href={whatsappHref}
            location={ctaLocation}
            model={model}
            className="inline-flex items-center justify-center gap-3 bg-roble-gold text-roble-dark font-semibold px-8 py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
          >
            {whatsappLabel}
            <span aria-hidden="true">→</span>
          </WhatsAppLink>
          {secondary && (
            <QuoteCtaLink
              href={secondary.href}
              location={ctaLocation}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-8 py-4 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
            >
              {secondary.label}
            </QuoteCtaLink>
          )}
        </div>
      </div>
    </section>
  );
}
