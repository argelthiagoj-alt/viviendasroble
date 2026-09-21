import type { Metadata } from "next";
import Link from "next/link";
import { CATEGORY_LINKS, WA_GENERAL } from "@/lib/constants";
import { WhatsAppLink } from "@/components/analytics/TrackedLinks";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscás no existe o cambió de dirección.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="bg-roble-dark text-white min-h-screen flex items-center px-5 sm:px-4 py-32">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-6">
          Error 404
        </p>
        <h1 className="font-serif text-[34px] sm:text-5xl font-semibold leading-[1.08] mb-5">
          Esta página no existe
        </h1>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-10">
          Puede que el enlace esté mal escrito o que hayamos movido el
          contenido. Estos son los accesos más usados:
        </p>

        <ul className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <li>
            <Link
              href="/modelos"
              className="inline-flex items-center bg-roble-gold text-roble-dark font-semibold rounded-xl px-5 py-3 text-sm hover:bg-roble-gold-light transition-colors duration-200"
            >
              Ver modelos
            </Link>
          </li>
          {CATEGORY_LINKS.slice(0, 4).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center border border-white/25 rounded-xl px-5 py-3 text-sm text-white hover:bg-white/8 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-white/45 text-sm">
          ¿No encontrás lo que buscabas?{" "}
          <WhatsAppLink
            href={WA_GENERAL}
            location="not_found"
            className="text-roble-gold underline underline-offset-2 hover:text-roble-gold-light transition-colors"
          >
            Escribinos por WhatsApp
          </WhatsAppLink>{" "}
          o volvé al{" "}
          <Link
            href="/"
            className="text-roble-gold underline underline-offset-2 hover:text-roble-gold-light transition-colors"
          >
            inicio
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
