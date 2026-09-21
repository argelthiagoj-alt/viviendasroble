"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export type HeroVisualImage = { src: string; alt: string };

type Props = {
  images: HeroVisualImage[];
  /** ms que cada imagen permanece visible antes de la transición */
  interval?: number;
  /** Nombre accesible del grupo */
  ariaLabel: string;
  /** Clases de aspect-ratio. Fijan la caja y evitan CLS. */
  aspect?: string;
  /** Carga la primera imagen con prioridad (está sobre el fold). */
  priority?: boolean;
  sizes?: string;
  className?: string;
};

/**
 * Visual del hero: tres fotografías que se funden entre sí y, a la vez,
 * se disuelven contra el fondo del hero.
 *
 * La integración con el fondo vive en globals.css (`.hero-visual-*`),
 * porque necesita dos juegos de gradientes por breakpoint y como valores
 * arbitrarios de Tailwind quedaría ilegible.
 *
 * Decisiones:
 * - El glow queda FUERA del elemento enmascarado; si estuviera dentro, la
 *   máscara se lo comería justo donde tiene que notarse.
 * - `overflow-hidden` se conserva: el sobrante de la imagen escalada debe
 *   recortarse dentro de la caja para que la máscara no se repita.
 * - El translate es menor en mobile (3px) que en desktop (6px) porque el
 *   sobrante de `scale(1.03)` es proporcional a la altura de la caja, y en
 *   mobile un desplazamiento mayor llegaría a destapar el borde.
 * - Con `prefers-reduced-motion` no hay autoplay ni movimiento; los
 *   indicadores siguen siendo botones, así que la navegación manual queda.
 */
export default function HeroVisual({
  images,
  interval = 5000,
  ariaLabel,
  aspect = "aspect-[16/10] lg:aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 1023px) 100vw, 560px",
  className = "",
}: Props) {
  const [active, setActive] = useState(0);
  // Se incrementa para reiniciar el temporizador en navegación manual.
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = images.length > 1 && !paused && !reduced && onScreen;

  useEffect(() => {
    if (!running) return;
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % images.length),
      interval
    );
    return () => window.clearTimeout(id);
  }, [running, active, cycle, interval, images.length]);

  const goTo = useCallback((index: number) => {
    setActive(index);
    setCycle((c) => c + 1);
  }, []);

  const resume = useCallback(() => {
    setPaused(false);
    setCycle((c) => c + 1);
  }, []);

  const pause = useCallback(() => setPaused(true), []);

  if (images.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className={className}
      role="group"
      aria-roledescription="Galería"
      aria-label={ariaLabel}
      onPointerEnter={pause}
      onPointerLeave={resume}
      onFocusCapture={pause}
      onBlurCapture={resume}
    >
      <div className="relative">
        {/* Luz ambiental — por detrás y fuera de la máscara */}
        <div
          aria-hidden="true"
          className="hero-visual-glow pointer-events-none absolute -inset-x-12 -inset-y-10 lg:-inset-x-20 lg:-inset-y-14"
        />

        {/* Pila enmascarada */}
        <div
          className={`hero-visual-mask relative ${aspect} overflow-hidden rounded-3xl`}
        >
          {images.map((image, i) => {
            const isActive = i === active;
            return (
              <div
                key={image.src}
                aria-hidden={!isActive}
                className={`absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.33,0,0.2,1)] motion-reduce:transition-none ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={sizes}
                  priority={priority && i === 0}
                  loading={priority && i === 0 ? undefined : "lazy"}
                  className={`hero-visual-grade object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none motion-reduce:scale-100 motion-reduce:translate-y-0 ${
                    isActive
                      ? "scale-100 translate-y-0"
                      : "scale-[1.03] translate-y-[3px] lg:translate-y-[6px]"
                  }`}
                />
              </div>
            );
          })}

          {/* Overlay del color del hero — dentro de la máscara */}
          <div
            aria-hidden="true"
            className="hero-visual-overlay pointer-events-none absolute inset-0"
          />
        </div>
      </div>

      {/* Indicadores — fuera de la imagen y deliberadamente callados */}
      {images.length > 1 && (
        <div className="mt-1 flex items-center justify-center gap-2">
          {images.map((image, i) => {
            const isActive = i === active;
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ver imagen ${i + 1} de ${images.length}`}
                aria-current={isActive ? "true" : undefined}
                className="group py-3 px-1.5 focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-white/40"
              >
                <span
                  className={`block h-px w-7 sm:w-9 bg-white transition-opacity duration-500 ${
                    isActive
                      ? "opacity-55"
                      : "opacity-15 group-hover:opacity-35"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
