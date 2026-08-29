import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://billatgameology.github.io",
  base: "/tearesearch",
  build: {
    format: "directory"
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
