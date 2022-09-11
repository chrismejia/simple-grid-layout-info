import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          { name: "Noto Sans Mono", styles: "wght@400;700" },
          "Vampiro One",
          { name: "Playfair Display", styles: "ital,wght@0,900" },
          {
            name: "Material Symbols Rounded",
            styles: "opsz,wght,FILL,GRAD@40,400,0,0",
          },
        ],
      },
    }),
  ],
});
