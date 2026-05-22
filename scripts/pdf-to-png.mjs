import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { createCanvas } from "@napi-rs/canvas";

const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");

const PDF_DIR = path.resolve("public/plans");
const OUT_DIR = path.resolve("public/assets/plans");
const CMAPS = pathToFileURL(
  path.resolve("node_modules/pdfjs-dist/cmaps") + "/"
).href;
const STD_FONTS = pathToFileURL(
  path.resolve("node_modules/pdfjs-dist/standard_fonts") + "/"
).href;

await fs.mkdir(OUT_DIR, { recursive: true });

const entries = await fs.readdir(PDF_DIR);
const pdfs = entries.filter((f) => f.toLowerCase().endsWith(".pdf"));

class NodeCanvasFactory {
  create(width, height) {
    const canvas = createCanvas(width, height);
    return { canvas, context: canvas.getContext("2d") };
  }
  reset(ctx, w, h) {
    ctx.canvas.width = w;
    ctx.canvas.height = h;
  }
  destroy(ctx) {
    ctx.canvas.width = 0;
    ctx.canvas.height = 0;
  }
}

for (const file of pdfs) {
  const base = file.replace(/\.pdf$/i, "");
  const outName = base.replace(/m²/g, "").replace(/\s+/g, "") + ".png";
  const outPath = path.join(OUT_DIR, outName);

  const exists = await fs.stat(outPath).catch(() => null);
  if (exists) {
    console.log(`skip  ${outName}`);
    continue;
  }

  try {
    const data = new Uint8Array(await fs.readFile(path.join(PDF_DIR, file)));
    const doc = await pdfjs.getDocument({
      data,
      cMapUrl: CMAPS,
      cMapPacked: true,
      standardFontDataUrl: STD_FONTS,
      disableFontFace: true,
      verbosity: 0,
    }).promise;

    const page = await doc.getPage(1);
    const viewport = page.getViewport({ scale: 2.0 });
    const factory = new NodeCanvasFactory();
    const { canvas, context } = factory.create(viewport.width, viewport.height);

    await page.render({
      canvasContext: context,
      viewport,
      canvasFactory: factory,
    }).promise;

    const buf = await canvas.encode("png");
    await fs.writeFile(outPath, buf);
    console.log(`ok    ${file} → ${outName}`);
    await doc.cleanup();
    await doc.destroy();
  } catch (e) {
    console.error(`fail  ${file}:`, e.message);
  }
}
