import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: "https://luifermartinez.github.io",
  output: "static",
  build: {
    inlineStylesheets: "always",
  },
  server: {
    port: 3150,
    host: true,
  },
});
