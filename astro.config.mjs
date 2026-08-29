import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://example.github.io",
  build: {
    format: "directory"
  },
  vite: {
    css: {
      devSourcemap: true
    }
  }
});
