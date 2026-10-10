import type { ImageMetadata } from "astro";

const images = import.meta.glob<{ default: ImageMetadata }>("./images/**/*.{png,jpg,jpeg}", {
  eager: true,
});

/** Looks up a raster image by its path under `src/assets/images/`, e.g. "CEApp/0.png". */
export function image(path: string): ImageMetadata {
  const module = images[`./images/${path}`];
  if (!module) throw new Error(`No image at src/assets/images/${path}`);
  return module.default;
}
