"use client";

import { useEffect, useRef } from "react";
import { trackModelView, type TrackedModel } from "@/lib/analytics";

/**
 * Emite `model_view` al entrar a la ficha de un modelo.
 *
 * El guard por `slug` cubre el doble montaje de efectos que React hace en
 * desarrollo con Strict Mode: sin él, en `next dev` cada visita reportaría
 * dos vistas. Como el ref vive en la instancia del componente, volver a
 * navegar al mismo modelo sí vuelve a emitir, que es lo correcto.
 *
 * No renderiza nada.
 */
export default function ModelViewTracker({ model }: { model: TrackedModel }) {
  const fired = useRef<string | null>(null);

  useEffect(() => {
    if (fired.current === model.slug) return;
    fired.current = model.slug;
    trackModelView(model);
  }, [model]);

  return null;
}
