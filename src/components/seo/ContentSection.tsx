import type { ReactNode } from "react";

export type ContentBlock = {
  heading: string;
  body: string | string[];
};

type Props = {
  eyebrow?: string;
  heading?: string;
  lead?: string;
  blocks: ContentBlock[];
  /** Fondo de la sección. Alternar entre secciones da ritmo a la página. */
  tone?: "cream" | "white";
  /** Una sola columna lee mejor para texto largo; dos para bloques cortos. */
  columns?: 1 | 2;
  id?: string;
  children?: ReactNode;
};

/**
 * Bloques de contenido de las landings. El H2 de sección y los H3 de cada
 * bloque mantienen la jerarquía semántica sin que cada página repita markup.
 */
export default function ContentSection({
  eyebrow,
  heading,
  lead,
  blocks,
  tone = "cream",
  columns = 2,
  id,
  children,
}: Props) {
  const bg = tone === "cream" ? "bg-roble-cream" : "bg-white";
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 px-5 sm:px-4 ${bg}`}
      aria-labelledby={headingId}
    >
      <div className="max-w-5xl mx-auto">
        {(eyebrow || heading || lead) && (
          <div className="max-w-2xl mb-10 sm:mb-12">
            {eyebrow && (
              <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                id={headingId}
                className="font-serif text-3xl sm:text-4xl md:text-[42px] font-semibold text-roble-text leading-[1.15] mb-5"
              >
                {heading}
              </h2>
            )}
            {lead && (
              <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
                {lead}
              </p>
            )}
          </div>
        )}

        <div
          className={
            columns === 2
              ? "grid grid-cols-1 md:grid-cols-2 gap-6"
              : "space-y-10 max-w-3xl"
          }
        >
          {blocks.map((block) => (
            <article
              key={block.heading}
              className={
                columns === 2
                  ? `rounded-2xl border border-roble-beige p-7 h-full ${
                      tone === "cream" ? "bg-white" : "bg-roble-cream"
                    }`
                  : ""
              }
            >
              {columns === 2 && (
                <div className="w-8 h-px bg-roble-gold mb-6" aria-hidden="true" />
              )}
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-roble-text mb-3 leading-snug">
                {block.heading}
              </h3>
              {(Array.isArray(block.body) ? block.body : [block.body]).map(
                (paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-[15px] text-roble-muted leading-relaxed mb-3 last:mb-0"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </article>
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}
