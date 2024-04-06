import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [],
  site: "https://luifermartinez.github.io",
  base: './',
  output: 'static',
  build: {
    inlineStylesheets: 'always'
  }
});
