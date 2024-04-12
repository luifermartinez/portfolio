import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  site: "https://luifermartinez.github.io",
  base: '/portfolio',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  }
});