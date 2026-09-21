"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ComponentProps } from "react";
import {
  trackFloorplanDownload,
  trackPhoneClick,
  trackQuoteCtaClick,
  trackWhatsAppClick,
  type CtaLocation,
  type TrackedModel,
} from "@/lib/analytics";

/**
 * Enlaces que emiten su evento al ser pulsados.
 *
 * Existen para que el tracking viva en un solo lugar en vez de repetirse
 * en cada uno de los ~25 accesos a WhatsApp del sitio. Son los únicos
 * componentes cliente que agrega la capa de analytics; el resto de la
 * página sigue siendo Server Component.
 *
 * Ninguno hace `preventDefault`: el push al dataLayer es síncrono, así que
 * el evento sale antes de que el navegador siga el enlace y la navegación
 * nunca queda bloqueada esperando a la red.
 */

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

/* ── WhatsApp ────────────────────────────────────── */

type WhatsAppLinkProps = AnchorProps & {
  location: CtaLocation;
  /** Si se pasa, el lead se reporta como `model_whatsapp` con su metadata. */
  model?: TrackedModel;
};

export function WhatsAppLink({
  location,
  model,
  onClick,
  children,
  ...rest
}: WhatsAppLinkProps) {
  return (
    <a
      {...rest}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        trackWhatsAppClick({ location, model });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

/* ── Teléfono ────────────────────────────────────── */

type PhoneLinkProps = AnchorProps & { location: CtaLocation };

export function PhoneLink({
  location,
  onClick,
  children,
  ...rest
}: PhoneLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackPhoneClick({ location });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

/* ── Plano en PDF ────────────────────────────────── */

type FloorplanLinkProps = AnchorProps & {
  model: TrackedModel;
  fileName: string;
};

export function FloorplanLink({
  model,
  fileName,
  onClick,
  children,
  ...rest
}: FloorplanLinkProps) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackFloorplanDownload({ model, fileName });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

/* ── CTA de presupuesto que todavía no es lead ───── */

type QuoteCtaLinkProps = ComponentProps<typeof Link> & {
  location: CtaLocation;
};

export function QuoteCtaLink({
  location,
  onClick,
  children,
  ...rest
}: QuoteCtaLinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        trackQuoteCtaClick({ location });
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
