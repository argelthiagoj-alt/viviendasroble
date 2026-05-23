"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };

type Props = {
  items: FAQItem[];
  initial?: number;
};

export default function FAQList({ items, initial = 5 }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, initial);
  const hiddenCount = items.length - initial;

  return (
    <>
      <dl>
        {visible.map((item, i) => (
          <details key={item.q + i} className="group border-b border-roble-beige">
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
              <p className="text-roble-muted text-sm leading-relaxed">{item.a}</p>
            </div>
          </details>
        ))}
      </dl>

      {hiddenCount > 0 && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 border border-roble-dark text-roble-dark text-sm font-medium px-7 py-3.5 rounded-xl hover:bg-roble-cream transition-colors duration-200"
          >
            {expanded ? (
              <>
                Mostrar menos preguntas
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </>
            ) : (
              <>
                Ver todas las preguntas ({items.length})
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}
