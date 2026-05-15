import type { Metadata } from "next";
import { COMPANY, WA_GENERAL, WA_PRESUPUESTO } from "@/lib/constants";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contactate con Viviendas Roble: oficinas en Aguado 2345, Neuquén Capital. WhatsApp, teléfono y formulario de consulta. Lunes a viernes, 10 a 18 hs.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto — Viviendas Roble",
    description:
      "Oficinas en Aguado 2345, Neuquén Capital. Respondemos consultas por WhatsApp, teléfono y email.",
    type: "website",
    locale: "es_AR",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto — Viviendas Roble",
  url: "https://viviendasroble.com/contacto",
  mainEntity: {
    "@type": "LocalBusiness",
    name: COMPANY.name,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aguado 2345",
      addressLocality: "Neuquén",
      postalCode: COMPANY.postalCode,
      addressCountry: "AR",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "18:00",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -38.955294194336304,
      longitude: -68.0264749288357,
    },
  },
};

const contactChannels = [
  {
    label: "WhatsApp",
    value: "Consultá ahora →",
    href: WA_GENERAL,
    external: true,
    description: "Respuesta rápida en horario comercial",
  },
  {
    label: "Teléfono",
    value: COMPANY.phone,
    href: `tel:+${COMPANY.whatsappNumber}`,
    external: false,
    description: "Llamanos directamente a la oficina",
  },
  {
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    external: false,
    description: "Para consultas con adjuntos o documentación",
  },
  {
    label: "Horario",
    value: COMPANY.hours,
    href: null,
    external: false,
    description: "Fuera de horario respondemos por WhatsApp",
  },
];

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        {/* ── Hero ──────────────────────────────── */}
        <section className="bg-roble-dark text-white pt-36 pb-20 px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-6">
              Viviendas Roble · Contacto
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.1] mb-6">
              Hablemos.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Sin compromiso, sin apuro. Contanos tu proyecto y te respondemos con
              una propuesta real.
            </p>
          </div>
        </section>

        {/* ── Contact channels ─────────────────── */}
        <section className="py-16 px-4 bg-white border-b border-roble-beige">
          <AnimateOnScroll>
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {contactChannels.map((ch) => (
                <div
                  key={ch.label}
                  className="border border-roble-beige rounded-2xl p-6 flex flex-col gap-2"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-roble-muted">
                    {ch.label}
                  </span>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target={ch.external ? "_blank" : undefined}
                      rel={ch.external ? "noopener noreferrer" : undefined}
                      className="font-serif text-base font-semibold text-roble-text hover:text-roble-gold transition-colors duration-200 leading-snug"
                    >
                      {ch.value}
                    </a>
                  ) : (
                    <span className="font-serif text-base font-semibold text-roble-text leading-snug">
                      {ch.value}
                    </span>
                  )}
                  <p className="text-xs text-roble-muted leading-relaxed">{ch.description}</p>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </section>

        {/* ── Form + Map ───────────────────────── */}
        <section className="py-24 px-4 bg-roble-cream">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <AnimateOnScroll>
              <div>
                <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
                  Formulario de consulta
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-roble-text mb-8 leading-snug">
                  Contanos tu proyecto
                </h2>
                <div className="bg-roble-dark rounded-2xl p-8">
                  <ContactForm />
                </div>
              </div>
            </AnimateOnScroll>

            {/* Map + address */}
            <AnimateOnScroll delay={80}>
              <div>
                <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
                  Dónde encontrarnos
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-roble-text mb-8 leading-snug">
                  Oficinas Neuquén
                </h2>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-roble-beige mb-6 aspect-[4/3]">
                  <iframe
                    title="Ubicación Viviendas Roble — Aguado 2345, Neuquén Capital"
                    src="https://maps.google.com/maps?q=-38.955294194336304,-68.0264749288357&t=m&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                {/* Address block */}
                <div className="bg-white border border-roble-beige rounded-2xl p-6 space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-roble-muted block mb-1">
                      Dirección
                    </span>
                    <p className="text-sm text-roble-text font-medium">
                      Aguado 2345, Neuquén Capital (8300)
                    </p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-roble-muted block mb-1">
                      Horario de atención
                    </span>
                    <p className="text-sm text-roble-text font-medium">{COMPANY.hours}</p>
                  </div>
                  <a
                    href={`https://maps.google.com/maps?q=-38.955294194336304,-68.0264749288357`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-roble-dark border-b border-roble-dark/30 pb-0.5 hover:border-roble-dark transition-colors duration-200"
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── WhatsApp CTA ─────────────────────── */}
        <section className="py-16 px-4 bg-roble-dark text-white">
          <AnimateOnScroll className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-4 leading-snug">
              ¿Preferís hablar directamente?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Escribinos por WhatsApp y respondemos en el día.
            </p>
            <a
              href={WA_PRESUPUESTO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-roble-gold text-roble-dark font-semibold px-8 py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm"
            >
              Pedir presupuesto por WhatsApp →
            </a>
          </AnimateOnScroll>
        </section>
      </main>
    </>
  );
}
