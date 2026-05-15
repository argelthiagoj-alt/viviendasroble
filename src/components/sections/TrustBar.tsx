import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
  { value: "+15.000", label: "Casas entregadas" },
  { value: "40+", label: "Años de trayectoria" },
  { value: "4", label: "Provincias de cobertura" },
  { value: "CAT N° 2874", label: "Certificación nacional" },
];

export default function TrustBar() {
  return (
    <section
      className="bg-white border-b border-roble-beige py-10 px-4"
      aria-label="Números clave"
    >
      <AnimateOnScroll>
        <dl className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-roble-beige">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <dt className="font-serif text-3xl md:text-4xl font-semibold text-roble-dark mb-1">
                {stat.value}
              </dt>
              <dd className="text-xs text-roble-muted uppercase tracking-widest font-medium">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </AnimateOnScroll>
    </section>
  );
}
