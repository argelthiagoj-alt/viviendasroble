"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { search, type SearchResult } from "@/lib/search";

const TYPE_LABELS: Record<SearchResult["type"], string> = {
  model: "Modelo",
  faq: "Pregunta frecuente",
  page: "Página",
};

const TYPE_COLORS: Record<SearchResult["type"], string> = {
  model: "bg-roble-gold/10 text-roble-gold",
  faq: "bg-roble-cream text-roble-muted",
  page: "bg-roble-dark/5 text-roble-dark",
};

function highlight(text: string, query: string) {
  const terms = query.trim().split(/\s+/).filter(Boolean);
  if (!terms.length) return text;
  const pattern = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const parts = text.split(new RegExp(`(${pattern})`, "gi"));
  return parts.map((part, i) =>
    terms.some((t) => t.toLowerCase() === part.toLowerCase()) ? (
      <mark key={i} className="bg-roble-gold/20 text-roble-text not-italic rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[] | null>(null);
  const [, startTransition] = useTransition();

  function handleChange(value: string) {
    setQuery(value);
    startTransition(() => {
      setResults(value.trim().length >= 2 ? search(value) : null);
    });
  }

  const hasQuery = query.trim().length >= 2;

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      {/* Search input */}
      <div className="relative mb-10">
        <label htmlFor="search-input" className="sr-only">
          Buscar en Viviendas Roble
        </label>
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-roble-muted pointer-events-none" aria-hidden>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
        <input
          id="search-input"
          type="search"
          autoFocus
          placeholder="Buscá modelos, preguntas, páginas..."
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-roble-beige bg-white text-roble-text placeholder:text-roble-muted/60 focus:outline-none focus:ring-2 focus:ring-roble-gold/40 focus:border-roble-gold text-base transition-all duration-200"
        />
        {query && (
          <button
            onClick={() => handleChange("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-roble-muted hover:text-roble-text transition-colors"
            aria-label="Limpiar búsqueda"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Results */}
      {hasQuery && results !== null && (
        <>
          <p className="text-xs text-roble-muted mb-5 tracking-wide">
            {results.length === 0
              ? "Sin resultados para esta búsqueda."
              : `${results.length} resultado${results.length !== 1 ? "s" : ""} para "${query.trim()}"`}
          </p>

          {results.length > 0 && (
            <ul className="space-y-3" role="list">
              {results.map((r, i) => (
                <li key={i}>
                  <Link
                    href={r.href}
                    className="group flex flex-col gap-1.5 p-5 rounded-xl border border-roble-beige bg-white hover:border-roble-gold/50 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${TYPE_COLORS[r.type]}`}>
                        {TYPE_LABELS[r.type]}
                      </span>
                    </div>
                    <span className="font-serif text-base font-semibold text-roble-text group-hover:text-roble-dark leading-snug">
                      {highlight(r.title, query)}
                    </span>
                    <span className="text-sm text-roble-muted leading-relaxed line-clamp-2">
                      {highlight(r.excerpt, query)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {/* Suggestions when empty */}
      {!hasQuery && (
        <div>
          <p className="text-xs text-roble-muted uppercase tracking-widest font-semibold mb-4">
            Búsquedas sugeridas
          </p>
          <div className="flex flex-wrap gap-2">
            {["36 m²", "PROCREAR", "planos", "garantía", "cuánto cuesta", "madera"].map((s) => (
              <button
                key={s}
                onClick={() => handleChange(s)}
                className="text-sm px-4 py-2 rounded-full border border-roble-beige bg-white hover:border-roble-gold/60 hover:bg-roble-cream text-roble-text transition-all duration-200"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
