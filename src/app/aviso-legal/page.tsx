import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description:
    "Titularidad del sitio, condiciones de uso y alcance de la información publicada por Viviendas Roble.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    heading: "Titular del sitio",
    paragraphs: [
      `${COMPANY.name}. Domicilio: ${COMPANY.address} (${COMPANY.postalCode}), Argentina.`,
      `Contacto: ${COMPANY.email} · ${COMPANY.phone}. Horario de atención: ${COMPANY.hours}.`,
    ],
  },
  {
    heading: "Alcance de la información publicada",
    paragraphs: [
      "Los modelos, planos, superficies, características y especificaciones publicados en este sitio son de carácter informativo y orientativo. Sirven como punto de partida para una consulta, no como oferta contractual.",
      "Toda propuesta comercial —alcance de la obra, materiales, plazos y precio— se formaliza por escrito antes del inicio de obra. Lo que vale es ese documento firmado, no lo publicado en la web.",
      "Las imágenes de obras entregadas corresponden a proyectos reales y pueden incluir terminaciones, ampliaciones o trabajos de terceros que no forman parte del alcance estándar de un modelo.",
    ],
  },
  {
    heading: "Disponibilidad y cobertura",
    paragraphs: [
      "La disponibilidad de modelos y la cobertura geográfica pueden variar. Las zonas indicadas como de consulta requieren una evaluación previa de logística y factibilidad antes de comprometer plazos o precio.",
    ],
  },
  {
    heading: "Propiedad intelectual",
    paragraphs: [
      `Los textos, planos, fotografías, marcas y demás contenidos de este sitio son propiedad de ${COMPANY.name} o se utilizan con autorización. No está permitida su reproducción o uso comercial sin consentimiento previo por escrito.`,
    ],
  },
  {
    heading: "Enlaces a terceros",
    paragraphs: [
      "El sitio incluye enlaces a WhatsApp, redes sociales y un mapa embebido de Google Maps. No somos responsables del contenido ni de las políticas de esos servicios.",
    ],
  },
];

export default function AvisoLegalPage() {
  return (
    <main>
      <section className="bg-roble-dark text-white pt-28 pb-16 sm:pt-32 px-5 sm:px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
            Información legal
          </p>
          <h1 className="font-serif text-[32px] sm:text-5xl font-semibold leading-[1.08]">
            Aviso legal
          </h1>
        </div>
      </section>

      <section className="py-14 sm:py-20 px-5 sm:px-4 bg-roble-cream">
        <div className="max-w-3xl mx-auto space-y-10">
          {sections.map((section) => (
            <article key={section.heading}>
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-roble-text mb-3 leading-snug">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-[15px] text-roble-muted leading-relaxed mb-3 last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          ))}

          <p className="text-sm text-roble-muted leading-relaxed pt-6 border-t border-roble-beige">
            Ver también la{" "}
            <Link
              href="/politica-de-privacidad"
              className="text-roble-dark underline underline-offset-2 hover:text-roble-gold transition-colors"
            >
              política de privacidad
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
