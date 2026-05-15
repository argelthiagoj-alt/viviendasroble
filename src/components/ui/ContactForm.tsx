"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

const initialValues = {
  nombre: "",
  whatsapp: "",
  email: "",
  ciudad: "",
  terreno: "",
  superficie: "",
  timing: "",
  mensaje: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [state, setState] = useState<FormState>("idle");

  function set(field: keyof typeof initialValues) {
    return (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.nombre || !values.whatsapp || !values.ciudad) return;

    setState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-4">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-roble-gold/15 mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A86B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-white mb-3">
          ¡Gracias, {values.nombre}!
        </h3>
        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
          Recibimos tu consulta. Te respondemos en menos de 24 horas hábiles por
          WhatsApp o email.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white/8 border border-white/12 text-white placeholder:text-white/30 text-sm rounded-xl px-4 py-3.5 outline-none focus:border-roble-gold/60 focus:bg-white/10 transition-colors duration-200";

  const labelClass = "block text-xs text-white/50 uppercase tracking-wider font-medium mb-2";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="f-nombre" className={labelClass}>
            Nombre completo *
          </label>
          <input
            id="f-nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            value={values.nombre}
            onChange={set("nombre")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="f-whatsapp" className={labelClass}>
            WhatsApp *
          </label>
          <input
            id="f-whatsapp"
            type="tel"
            required
            autoComplete="tel"
            placeholder="299 XXX-XXXX"
            value={values.whatsapp}
            onChange={set("whatsapp")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="f-email" className={labelClass}>
            Email
          </label>
          <input
            id="f-email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            value={values.email}
            onChange={set("email")}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="f-ciudad" className={labelClass}>
            Ciudad / Localidad *
          </label>
          <input
            id="f-ciudad"
            type="text"
            required
            placeholder="Neuquén, Cipolletti…"
            value={values.ciudad}
            onChange={set("ciudad")}
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="f-terreno" className={labelClass}>
            ¿Tenés terreno?
          </label>
          <select
            id="f-terreno"
            value={values.terreno}
            onChange={set("terreno")}
            className={`${inputClass} appearance-none`}
          >
            <option value="" style={{ background: "#1C2B2B", color: "rgba(255,255,255,0.4)" }}>Seleccioná una opción</option>
            <option value="si" style={{ background: "#1C2B2B", color: "#fff" }}>Sí, tengo terreno</option>
            <option value="no" style={{ background: "#1C2B2B", color: "#fff" }}>No tengo terreno</option>
            <option value="buscando" style={{ background: "#1C2B2B", color: "#fff" }}>Estoy buscando</option>
          </select>
        </div>
        <div>
          <label htmlFor="f-timing" className={labelClass}>
            ¿Cuándo pensás iniciar?
          </label>
          <select
            id="f-timing"
            value={values.timing}
            onChange={set("timing")}
            className={`${inputClass} appearance-none`}
          >
            <option value="" style={{ background: "#1C2B2B", color: "rgba(255,255,255,0.4)" }}>Seleccioná una opción</option>
            <option value="inmediato" style={{ background: "#1C2B2B", color: "#fff" }}>Lo antes posible</option>
            <option value="3-6" style={{ background: "#1C2B2B", color: "#fff" }}>En 3 a 6 meses</option>
            <option value="explorando" style={{ background: "#1C2B2B", color: "#fff" }}>Solo explorando opciones</option>
          </select>
        </div>
      </div>

      {/* Mensaje */}
      <div>
        <label htmlFor="f-mensaje" className={labelClass}>
          Mensaje adicional
        </label>
        <textarea
          id="f-mensaje"
          rows={3}
          placeholder="Contanos más sobre tu proyecto (opcional)"
          value={values.mensaje}
          onChange={set("mensaje")}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-roble-gold text-roble-dark font-semibold py-4 rounded-xl hover:bg-roble-gold-light transition-colors duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-roble-dark/30 border-t-roble-dark rounded-full animate-spin" />
            Enviando…
          </>
        ) : (
          "Enviar solicitud →"
        )}
      </button>

      {state === "error" && (
        <p className="text-red-400 text-xs text-center">
          Hubo un error al enviar. Escribinos directamente por WhatsApp.
        </p>
      )}

      <p className="text-white/30 text-xs text-center">
        No compartimos tu información. Te respondemos en menos de 24 horas
        hábiles.
      </p>
    </form>
  );
}
