import type { Metadata } from "next";
import SearchPage from "@/components/ui/SearchPage";

export const metadata: Metadata = {
  title: "Buscar",
  description: "Buscá modelos de casas, preguntas frecuentes y páginas de Viviendas Roble.",
  alternates: { canonical: "/buscar" },
  robots: { index: false },
};

export default function BuscarPage() {
  return (
    <main className="bg-roble-cream min-h-screen">
      <section className="bg-roble-dark text-white pt-36 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-roble-gold text-[11px] tracking-[0.2em] uppercase font-semibold mb-5">
            Viviendas Roble · Buscador
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-[1.1]">
            ¿Qué estás buscando?
          </h1>
        </div>
      </section>

      <SearchPage />
    </main>
  );
}
