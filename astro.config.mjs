import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://luifermartinez.github.io",
  base: "/portfolio",
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  }
});
