import Link from "next/link";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import type { Crumb } from "@/lib/seo/schema";
import type { CtaLocation } from "@/lib/analytics";
import { WhatsAppLink } from "@/components/analytics/TrackedLinks";

type Props = {
  eyebrow: string;
  h1: string;
  intro: string;
  breadcrumbs: Crumb[];
  /** CTA principal. Externo (WhatsApp) si `external`. */
  primaryCta: { label: string; href: string; external?: boolean };
  secondaryCta?: { label: string; href: string };
  /** Chips de confianza cortos. Solo datos respaldados por el sitio. */
  chips?: string[];
  /** Dónde se reporta el CTA primario cuando abre WhatsApp. */
  ctaLocation: CtaLocation;
};

/**
 * Hero de las landings SEO. Mantiene el lenguaje visual del hero de home
 * (fondo roble-dark, eyebrow dorado, serif) sin duplicar su composición.
 */
export default function LandingHero({
  eyebrow,
  h1,
  intro,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  chips,
  ctaLocation,
}: Props) {
  return (
    <section className="relative bg-roble-dark overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 80% 30%, rgba(200,168,107,0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-4 pt-28 pb-14 sm:pt-32 sm:pb-20">
        <Breadcrumbs items={breadcrumbs} className="mb-7 sm:mb-9" />

        <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
          {eyebrow}
        </p>

        <h1 className="font-serif text-[32px] sm:text-5xl md:text-[56px] font-semibold text-white leading-[1.08] mb-5 sm:mb-6 max-w-3xl">
          {h1}
        </h1>

        <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-9">
          {intro}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
          {primaryCta.external ? (
            <WhatsAppLink
              href={primaryCta.href}
              location={ctaLocation}
              className="inline-flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold px-7 py-3.5 sm:py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
            >
              {primaryCta.label}
            </WhatsAppLink>
          ) : (
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold px-7 py-3.5 sm:py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
            >
              {primaryCta.label}
            </Link>
          )}

          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white font-medium px-7 py-3.5 sm:py-4 rounded-xl hover:bg-white/8 transition-colors duration-200 text-sm"
            >
              {secondaryCta.label}
            </Link>
          )}
        </div>

        {chips && chips.length > 0 && (
          <ul className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 text-white/55 text-[11px] sm:text-xs mt-7 sm:mt-9">
            {chips.map((chip) => (
              <li key={chip} className="flex items-center gap-1.5">
                <span className="text-roble-gold" aria-hidden="true">
                  ✓
                </span>
                {chip}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-roble-cream to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
