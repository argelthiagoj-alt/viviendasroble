export const COMPANY = {
  name: "Viviendas Roble",
  tagline: "Tu casa, lista cuando la necesitás.",
  founded: 1983,
  phone: "0299 440-3532",
  whatsappNumber: "542994532220",
  email: "ventas@viviendasroble.com",
  address: "Aguado 2345, Neuquén Capital",
  postalCode: "8300",
  hours: "Lunes a viernes, 10:00 a 18:00 hs",
  instagram: "https://instagram.com/viviendasroble",
  casasEntregadas: "+15.000",
  anyosTrayectoria: "40+",
  certificacion: "CAT N° 2874",
};

export const WA_NUMBER = COMPANY.whatsappNumber;

export function waLink(text: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
}

export const WA_GENERAL = waLink(
  "Hola, me interesa conocer más sobre las viviendas prefabricadas de Viviendas Roble. ¿Me pueden dar información?"
);

export const WA_PRESUPUESTO = waLink(
  "Hola, quisiera solicitar un presupuesto sin compromiso para una vivienda prefabricada."
);

export const NAV_LINKS = [
  { label: "Modelos", href: "/#modelos" },
  { label: "Galería", href: "/galeria" },
  { label: "Sistemas", href: "/sistema-de-construccion" },
  { label: "Nosotros", href: "/quienes-somos" },
  { label: "Contacto", href: "/contacto" },
];

export const CITIES = [
  { name: "Neuquén Capital", province: "Neuquén", href: "/contacto" },
  { name: "Plottier", province: "Neuquén", href: "/contacto" },
  { name: "Centenario", province: "Neuquén", href: "/contacto" },
  { name: "San Martín de los Andes", province: "Neuquén", href: "/contacto" },
  { name: "Junín de los Andes", province: "Neuquén", href: "/contacto" },
  { name: "Rincón de los Sauces", province: "Neuquén", href: "/contacto" },
  { name: "Cipolletti", province: "Río Negro", href: "/contacto" },
  { name: "General Roca", province: "Río Negro", href: "/contacto" },
  { name: "Allen", province: "Río Negro", href: "/contacto" },
  { name: "Villa Regina", province: "Río Negro", href: "/contacto" },
  { name: "Cinco Saltos", province: "Río Negro", href: "/contacto" },
  { name: "Bariloche", province: "Río Negro", href: "/contacto" },
];
