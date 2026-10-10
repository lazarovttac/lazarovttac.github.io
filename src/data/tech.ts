import type { ImageMetadata } from "astro";
import { image } from "../assets/images";

interface TechIcon {
  image: ImageMetadata;
  /** Drawn in black only, so it must be inverted on dark surfaces. */
  monochrome?: boolean;
}

/** Every technology the site shows as an icon pill, keyed by its display name. */
const TECH_ICONS = {
  React: { image: image("React.png") },
  Sass: { image: image("sass.png") },
  Firebase: { image: image("firebase.png") },
  Git: { image: image("git.png") },
  Figma: { image: image("figma.png") },
  Python: { image: image("python.png") },
  TensorFlow: { image: image("tensorflow.png") },
  Keras: { image: image("keras.png") },
  "C#": { image: image("c-sharp.png") },
  Unity: { image: image("unity.png"), monochrome: true },
  PostgreSQL: { image: image("postgre.png") },
  Blender: { image: image("blender.png") },
} satisfies Record<string, TechIcon>;

export type Tech = keyof typeof TECH_ICONS;

export const techs: Record<Tech, TechIcon> = TECH_ICONS;
