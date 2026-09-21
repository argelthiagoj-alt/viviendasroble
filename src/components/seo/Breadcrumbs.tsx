import Link from "next/link";
import type { Crumb } from "@/lib/seo/schema";

type Props = {
  /** No incluye "Inicio": se antepone automáticamente. El último es la página actual. */
  items: Crumb[];
  /** `light` para fondos oscuros (hero), `dark` para fondos claros. */
  tone?: "light" | "dark";
  className?: string;
};

export default function Breadcrumbs({
  items,
  tone = "light",
  className = "",
}: Props) {
  const all: Crumb[] = [{ name: "Inicio", path: "/" }, ...items];

  const base = tone === "light" ? "text-white/45" : "text-roble-muted";
  const link =
    tone === "light"
      ? "hover:text-white/80 transition-colors duration-200"
      : "hover:text-roble-text transition-colors duration-200";
  const current = tone === "light" ? "text-white/75" : "text-roble-text";

  return (
    <nav aria-label="Ruta de navegación" className={className}>
      <ol
        className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs ${base}`}
      >
        {all.map((crumb, i) => {
          const isLast = i === all.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {isLast ? (
                <span className={`font-medium ${current}`} aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <>
                  <Link href={crumb.path} className={link}>
                    {crumb.name}
                  </Link>
                  <span aria-hidden="true" className="opacity-50">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
