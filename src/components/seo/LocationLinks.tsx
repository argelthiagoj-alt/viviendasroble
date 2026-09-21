import Link from "next/link";
import { locationPath, type Location } from "@/lib/locations";

type Props = {
  locations: Location[];
  heading: string;
  lead?: string;
  eyebrow?: string;
  tone?: "cream" | "white";
  id?: string;
};

/**
 * Enlaces a landings geográficas. Se usa desde la home, las landings
 * semánticas y las propias páginas de localidad (localidades cercanas).
 */
export default function LocationLinks({
  locations,
  heading,
  lead,
  eyebrow,
  tone = "white",
  id = "localidades",
}: Props) {
  if (locations.length === 0) return null;

  const bg = tone === "cream" ? "bg-roble-cream" : "bg-white";
  const cardBg = tone === "cream" ? "bg-white" : "bg-roble-cream";

  return (
    <section
      id={id}
      className={`py-14 sm:py-20 px-5 sm:px-4 ${bg} border-t border-roble-beige`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-10">
          {eyebrow && (
            <p className="text-[11px] tracking-[0.18em] text-roble-gold uppercase font-semibold mb-4">
              {eyebrow}
            </p>
          )}
          <h2
            id={`${id}-heading`}
            className="font-serif text-3xl sm:text-4xl font-semibold text-roble-text leading-[1.15] mb-4"
          >
            {heading}
          </h2>
          {lead && (
            <p className="text-roble-muted text-base sm:text-lg leading-relaxed">
              {lead}
            </p>
          )}
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {locations.map((location) => (
            <li key={location.slug}>
              <Link
                href={locationPath(location)}
                className={`flex flex-col h-full ${cardBg} border border-roble-beige rounded-xl px-4 py-3.5 hover:border-roble-dark hover:bg-white transition-colors duration-200`}
              >
                <span className="text-sm font-medium text-roble-text leading-tight">
                  {location.name}
                </span>
                <span className="text-[11px] text-roble-muted mt-0.5 tracking-wide">
                  {location.kind === "city"
                    ? location.province
                    : location.kind === "province"
                      ? "Provincia"
                      : "Región"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
