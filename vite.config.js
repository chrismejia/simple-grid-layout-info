import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";
import htmlPurge from "vite-plugin-purgecss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPurge({
      css: [
        "src/styles/challenges.css",
        "src/styles/container.css",
        "src/styles/examples.css",
        "src/styles/grid-system.css",
        "src/styles/helpers.css",
        "src/styles/index.css",
      ],
    }),
    VitePluginFonts({
      google: {
        families: [
          { name: "Noto Sans Mono", styles: "wght@400;700" },
          "Vampiro One",
          { name: "Playfair Display", styles: "ital,wght@0,900" },
        ],
      },
    }),
  ],
});
