import Link from "next/link";

export type RelatedLink = { label: string; href: string };

type Props = {
  links: RelatedLink[];
  heading?: string;
  tone?: "cream" | "white";
};

/**
 * Tira de enlaces contextuales de cierre. Conecta cada landing con sus
 * hermanas y con las páginas de respaldo (sistema constructivo, trayectoria)
 * para que la autoridad no quede concentrada solo en los hubs.
 */
export default function RelatedLinks({
  links,
  heading = "Seguí explorando",
  tone = "white",
}: Props) {
  if (links.length === 0) return null;

  const bg = tone === "cream" ? "bg-roble-cream" : "bg-white";
  const chip = tone === "cream" ? "bg-white" : "bg-roble-cream";

  return (
    <section className={`py-12 px-5 sm:px-4 ${bg} border-t border-roble-beige`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-5">
          {heading}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`inline-flex items-center ${chip} border border-roble-beige rounded-xl px-4 py-2.5 text-sm text-roble-text hover:border-roble-dark transition-colors duration-200`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
