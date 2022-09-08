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
          { name: "Fira Code", styles: "wght@500;700" },
          "Vampiro One",
          { name: "Playfair Display", styles: "wght@400;700" },
        ],
      },
    }),
  ],
});
