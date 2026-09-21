import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLanding } from "@/lib/seo-pages";
import { buildMetadata } from "@/lib/seo/metadata";
import SeoLandingPage from "@/components/seo/SeoLandingPage";

const SLUG = "casas-llave-en-mano";

const landing = getLanding(SLUG);

export const metadata: Metadata = landing
  ? buildMetadata({
      title: landing.title,
      description: landing.description,
      path: `/${SLUG}`,
    })
  : {};

export default function CasasLlaveEnManoPage() {
  if (!landing) notFound();
  return <SeoLandingPage landing={landing} />;
}
