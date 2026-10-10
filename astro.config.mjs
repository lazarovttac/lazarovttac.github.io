import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lazaro.vc",
  // Keep the `.html` URLs that are already indexed, in the sitemap and in canonicals:
  // GitHub Pages has no server-side redirects to bridge a switch to clean URLs.
  build: { format: "file" },
});
