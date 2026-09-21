import type { FaqItem } from "@/lib/seo/schema";

type Props = {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
  id?: string;
};

/**
 * FAQ de landings. A diferencia de FAQList (home), renderiza todo en el
 * servidor con <details>: son pocas preguntas y no necesita JavaScript.
 * El FAQPage de JSON-LD se emite desde la página con estos mismos items,
 * así que lo que Google lee siempre está visible en la página.
 */
export default function FaqBlock({
  items,
  heading = "Preguntas frecuentes",
  eyebrow,
  id = "faq",
}: Props) {
  if (items.length === 0) return null;

  return (
    <section
      id={id}
      className="py-14 sm:py-20 px-5 sm:px-4 bg-white border-t border-roble-beige"
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-3xl mx-auto">
        {eyebrow && (
          <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
            {eyebrow}
          </p>
        )}
        <h2
          id={`${id}-heading`}
          className="font-serif text-3xl sm:text-4xl font-semibold text-roble-text leading-[1.15] mb-8 sm:mb-10"
        >
          {heading}
        </h2>

        <dl>
          {items.map((item) => (
            <details
              key={item.q}
              className="group border-b border-roble-beige"
            >
              <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none text-roble-text font-medium text-base leading-snug">
                <span>{item.q}</span>
                <span
                  className="flex-none w-6 h-6 flex items-center justify-center rounded-full border border-roble-beige text-roble-muted text-lg leading-none group-open:rotate-45 group-open:border-roble-dark group-open:text-roble-dark transition-all duration-200"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="pb-5 pr-10">
                <p className="text-roble-muted text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </details>
          ))}
        </dl>
      </div>
    </section>
  );
}
