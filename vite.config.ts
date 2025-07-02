import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import UnoCSS from "unocss/vite";
import { presetUno, presetAttributify, presetIcons } from "unocss";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log("VITE_BASE_PATH:", env);
  return {
    base: env.VITE_BASE_PATH || "/",
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
  };
});
