# Analytics — Viviendas Roble

La arquitectura es:

```
Sitio  →  dataLayer  →  Google Tag Manager  →  GA4
```

El sitio **no habla con GA4 directamente**. Emite eventos de negocio al
`dataLayer` y GTM decide qué hacer con ellos. Por eso en el código no hay
ningún ID de Google ni ninguna referencia a `gtag`.

No instales el tag de GA4 fuera de GTM: tendrías todo duplicado.

---

## 1. Crear la propiedad de GA4

1. Entrá a [analytics.google.com](https://analytics.google.com) → **Administrar**.
2. **Crear** → **Propiedad**. Nombre: `Viviendas Roble`.
3. Zona horaria `(GMT-03:00) Buenos Aires` y moneda `Peso argentino (ARS)`.
4. Creá un **flujo de datos** de tipo *Web* apuntando a `https://viviendasroble.com`.
5. Copiá el **ID de medición** (`G-XXXXXXXXXX`). Lo vas a necesitar en GTM,
   no en este repositorio.

En el flujo de datos, dejá **Medición mejorada activada** y dentro de ella
**"Cambios de página basados en eventos del historial del navegador"**
también activado. Ver la sección de *Page views* para entender por qué.

## 2. Crear el contenedor de GTM

1. Entrá a [tagmanager.google.com](https://tagmanager.google.com).
2. **Crear cuenta** → nombre `Viviendas Roble`, país Argentina.
3. Contenedor: `viviendasroble.com`, plataforma **Web**.
4. Copiá el **ID del contenedor** (`GTM-XXXXXXX`).

## 3. Conectar GA4 dentro de GTM

### 3.1 El tag base

1. En GTM: **Etiquetas** → **Nueva** → **Google tag**.
2. **ID de la etiqueta**: el `G-XXXXXXXXXX` del paso 1.
3. Activador: **Initialization - All Pages**.
4. Guardar como `GA4 — Google tag`.

### 3.2 Las variables de capa de datos

Por cada parámetro que quieras ver en GA4 hay que crear una variable.
**Variables** → **Nueva** → *Variable de capa de datos*, usando exactamente
estos nombres:

| Nombre de la variable | Nombre de variable de capa de datos |
| --- | --- |
| `dlv - lead_type` | `lead_type` |
| `dlv - cta_location` | `cta_location` |
| `dlv - page_path` | `page_path` |
| `dlv - model_name` | `model_name` |
| `dlv - model_slug` | `model_slug` |
| `dlv - model_area_m2` | `model_area_m2` |
| `dlv - bedrooms` | `bedrooms` |
| `dlv - file_name` | `file_name` |

### 3.3 Los activadores

**Activadores** → **Nuevo** → *Evento personalizado*, uno por cada evento.
El nombre del evento tiene que coincidir carácter por carácter:

- `generate_lead`
- `model_view`
- `floorplan_download`
- `quote_cta_click`

### 3.4 Las etiquetas de evento

Por cada activador, una etiqueta **Google Analytics: evento de GA4**:

- **Etiqueta de configuración**: `GA4 — Google tag`
- **Nombre del evento**: el mismo que el activador
- **Parámetros del evento**: los que correspondan según la tabla de la
  sección 5, apuntando a las variables `dlv - …`

## 4. Agregar el ID al proyecto

En `.env.local` (local) y en las variables de entorno del hosting:

```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

> **Esto es lo único que falta para que todo empiece a medir.** El resto
> de la implementación ya está en el repositorio.

Sin esa variable el sitio funciona con normalidad: no carga GTM, no emite
errores y las llamadas a analytics quedan en el vacío sin romper nada.

`.env.local` no se commitea. `.env.example` sí, y va siempre vacío.

## 5. Eventos que emite el sitio

Todos los eventos incluyen `page_path` automáticamente (sólo el pathname,
nunca la query).

### `generate_lead`

Alguien dio un paso de contacto real.

| Parámetro | Valores |
| --- | --- |
| `lead_type` | `whatsapp` · `model_whatsapp` · `form` · `phone` |
| `cta_location` | ver tabla de ubicaciones |
| `model_name` | sólo si `lead_type` es `model_whatsapp` |
| `model_slug` | ídem |
| `model_area_m2` | ídem |
| `bedrooms` | ídem, y sólo si el modelo tiene una cifra exacta |

### `model_view`

Visita a la ficha de un modelo. Se dispara una vez por navegación.

| Parámetro | Notas |
| --- | --- |
| `model_name` | |
| `model_slug` | |
| `model_area_m2` | |
| `bedrooms` | sólo si el modelo no declara un rango |

### `floorplan_download`

Descarga del PDF del plano.

| Parámetro | Notas |
| --- | --- |
| `model_name`, `model_slug`, `model_area_m2`, `bedrooms` | igual que arriba |
| `file_name` | nombre del PDF |

### `quote_cta_click`

CTA de presupuesto que todavía **no** es un lead — por ahora, el enlace
secundario de los bloques de cierre que lleva a `/contacto`.

| Parámetro | |
| --- | --- |
| `cta_location` | ver tabla de ubicaciones |

> La mayoría de los CTA de presupuesto del sitio abren WhatsApp
> directamente. Esos emiten `generate_lead` y **no** `quote_cta_click`,
> para no contar dos veces el mismo clic. Por eso este evento es de bajo
> volumen por diseño.

### Valores de `cta_location`

`hero` · `navbar` · `footer` · `floating_whatsapp` · `contact_section` ·
`contact_page` · `coverage` · `final_cta` · `home_models` · `model_card` ·
`model_page` · `models_index` · `floorplans` · `landing_cta` ·
`location_page` · `gallery` · `about` · `system_page` · `not_found`

La lista vive como unión de TypeScript en `src/lib/analytics.ts`. Si
agregás una ubicación nueva, agregala ahí primero: el build falla si un
componente usa un valor que no está declarado.

## 6. Page views

**No se emite ningún `page_view` desde el código.** Es deliberado.

Next.js con App Router navega usando la History API. La *Medición mejorada*
de GA4, con **"Cambios de página basados en eventos del historial del
navegador"** activado, detecta esas navegaciones y registra la vista.
Agregar además un `page_view` manual produciría exactamente el doble.

Para que se cumpla *una navegación = una page view*:

- ✅ Dejá **Medición mejorada** activada, con los cambios por historial.
- ❌ **No** crees en GTM un activador *History Change* que vuelva a
  disparar el Google tag de GA4. Eso duplicaría cada navegación.
- ❌ **No** agregues `gtag.js` ni el tag de GA4 fuera de GTM.

Si en algún momento hiciera falta un `page_view` manual (por ejemplo para
controlar el `page_title`), habría que desactivar antes los cambios por
historial en la Medición mejorada. Hoy no hace falta.

## 7. Key Events en GA4

En **Administrar → Eventos**, marcá como *Key Event* únicamente:

- ✅ **`generate_lead`**

No marques como conversión principal:

- ❌ `model_view`
- ❌ `floorplan_download`
- ❌ `quote_cta_click`

Esos tres son señales de interés, no contactos. Si los contás como
conversiones, el volumen de "conversiones" deja de significar nada y
cualquier campaña que optimices contra ellos va a perseguir tráfico que
mira y no consulta.

Para separar la calidad de los leads dentro del único Key Event, usá
`lead_type` como dimensión personalizada: **Administrar → Definiciones
personalizadas → Crear dimensión personalizada**, ámbito *Evento*,
parámetro `lead_type`. Repetilo con `cta_location` y `model_slug`.

## 8. Comprobar que funciona

### GTM Preview

1. En GTM, botón **Vista previa**.
2. Poné la URL del sitio y conectá.
3. Navegá y hacé clic en un botón de WhatsApp.
4. En el panel de Tag Assistant tiene que aparecer `generate_lead` en la
   columna izquierda, y al seleccionarlo, la pestaña **Data Layer** debe
   mostrar `lead_type`, `cta_location` y `page_path`.

### GA4 DebugView

1. Con GTM Preview activo, GA4 recibe los eventos en modo debug.
2. En GA4: **Administrar → DebugView**.
3. Los eventos aparecen en segundos, con sus parámetros.

### Consola del navegador

Para desarrollo local, sin GTM:

```
NEXT_PUBLIC_ANALYTICS_DEBUG=true
```

Cada evento se imprime como `[analytics] { … }`. La variable se inlinea en
build, así que si no vale `"true"` el `console.info` queda como código
muerto y no llega a producción.

## 9. Privacidad

Los eventos describen **acciones y contenido del sitio**, nunca personas.
No se envía a Analytics:

- nombre, apellido
- email
- teléfono (ni siquiera en los eventos de tipo `phone`)
- dirección
- contenido del mensaje del formulario
- ningún campo del formulario
- identificadores personales

El evento del formulario se emite **sólo cuando el backend respondió
correctamente**, y únicamente informa que hubo un envío exitoso. Si el
envío falla, no se genera lead.

## 10. Dónde está cada cosa

| Archivo | Rol |
| --- | --- |
| `src/lib/analytics.ts` | Tipos, `trackEvent` y helpers por intención |
| `src/components/analytics/GoogleTagManager.tsx` | Carga del contenedor |
| `src/components/analytics/TrackedLinks.tsx` | Enlaces que emiten su evento |
| `src/components/analytics/ModelViewTracker.tsx` | `model_view` en la ficha |

Para agregar tracking a un enlace nuevo, usá los componentes de
`TrackedLinks` en lugar de escribir el evento a mano. Así el nombre del
evento y el vocabulario de parámetros quedan en un solo lugar.
