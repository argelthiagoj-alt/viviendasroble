import Script from "next/script";

/**
 * Carga del contenedor de Google Tag Manager.
 *
 * Se usa `next/script` y no `@next/third-parties` porque eso último sería
 * una dependencia nueva sólo para esto, y los propios docs de Next señalan
 * `afterInteractive` como la estrategia indicada para tag managers.
 *
 * Sin `NEXT_PUBLIC_GTM_ID` el componente no renderiza nada: el sitio
 * funciona igual y no se emite ningún error.
 *
 * GA4 NO se carga por separado. La cadena es sitio → GTM → GA4; agregar
 * también gtag.js duplicaría todo el tracking.
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <Script id="gtm-loader" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
    </Script>
  );
}

/** Fallback estándar de GTM para navegadores sin JavaScript. Va en el body. */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
