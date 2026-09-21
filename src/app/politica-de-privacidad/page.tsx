import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

/**
 * Estas páginas existían enlazadas desde el footer pero no estaban creadas:
 * cada visita generaba un 404. El contenido describe únicamente lo que el
 * sitio hace hoy (formulario de contacto, mapa embebido, enlaces a
 * WhatsApp). No se indexan: no aportan a búsquedas comerciales.
 */
export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo trata Viviendas Roble los datos que dejás en el formulario de contacto del sitio.",
  alternates: { canonical: "/politica-de-privacidad" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    heading: "Responsable del tratamiento",
    paragraphs: [
      `${COMPANY.name}, con domicilio en ${COMPANY.address} (${COMPANY.postalCode}), Argentina. Consultas sobre esta política: ${COMPANY.email}.`,
    ],
  },
  {
    heading: "Qué datos recogemos",
    paragraphs: [
      "Únicamente los que completás voluntariamente en el formulario de contacto: nombre, número de WhatsApp, correo electrónico, ciudad, información sobre tu terreno, plazo estimado y el mensaje que escribas.",
      "Si nos escribís por WhatsApp o por correo electrónico, recibimos los datos que vos decidas enviarnos en esa conversación.",
    ],
  },
  {
    heading: "Para qué los usamos",
    paragraphs: [
      "Exclusivamente para responder tu consulta, evaluar tu proyecto y elaborar la propuesta o el presupuesto que pediste. No vendemos ni cedemos tus datos a terceros con fines comerciales.",
    ],
  },
  {
    heading: "Cookies y analítica",
    paragraphs: [
      "Este sitio no utiliza cookies de seguimiento ni herramientas de analítica de terceros para perfilar a los visitantes.",
      "La página de contacto incluye un mapa embebido de Google Maps. Al cargarlo, Google puede recibir datos técnicos de tu navegador según sus propias políticas, sobre las que no tenemos control.",
    ],
  },
  {
    heading: "Conservación",
    paragraphs: [
      "Conservamos las consultas el tiempo necesario para atenderlas y para dar seguimiento comercial al proyecto. Si preferís que eliminemos tus datos, escribinos y lo hacemos.",
    ],
  },
  {
    heading: "Tus derechos",
    paragraphs: [
      `La Ley 25.326 de Protección de los Datos Personales te reconoce los derechos de acceso, rectificación, actualización y supresión de tus datos. Para ejercerlos, escribinos a ${COMPANY.email}.`,
      "La Agencia de Acceso a la Información Pública, en su carácter de órgano de control de la Ley 25.326, tiene la atribución de atender las denuncias y reclamos que se interpongan con relación al incumplimiento de las normas sobre protección de datos personales.",
    ],
  },
];

export default function PoliticaDePrivacidadPage() {
  return (
    <main>
      <section className="bg-roble-dark text-white pt-28 pb-16 sm:pt-32 px-5 sm:px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
            Información legal
          </p>
          <h1 className="font-serif text-[32px] sm:text-5xl font-semibold leading-[1.08]">
            Política de privacidad
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
            ¿Dudas sobre esta política?{" "}
            <Link
              href="/contacto"
              className="text-roble-dark underline underline-offset-2 hover:text-roble-gold transition-colors"
            >
              Escribinos
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
