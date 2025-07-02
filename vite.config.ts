import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

// https://vite.dev/config/
export default defineConfig({
  base: import.meta.env.VITE_PUBLIC_PATH || "/",
  plugins: [
    react(),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          cdn: "https://esm.sh/",
        }),
      ],
      shortcuts: {
        "flex-center": "flex items-center justify-center",
      },
    }),
  ],
});
