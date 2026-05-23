"use client";

import { useState } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GalleryLightbox from "@/components/ui/GalleryLightbox";
import type { GalleryImage } from "@/lib/gallery";

type Props = { images: GalleryImage[] };

export default function GalleryPreviewGrid({ images }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <AnimateOnScroll
            key={img.src}
            delay={i * 60}
            className="relative overflow-hidden rounded-2xl bg-roble-beige group aspect-[4/3]"
          >
            <button
              type="button"
              onClick={() => setIndex(i)}
              aria-label="Ampliar imagen"
              className="absolute inset-0 w-full h-full cursor-zoom-in"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading="lazy"
              />
            </button>
          </AnimateOnScroll>
        ))}
      </div>

      <GalleryLightbox
        images={images}
        index={index}
        onClose={() => setIndex(null)}
        onIndexChange={setIndex}
      />
    </>
  );
}
