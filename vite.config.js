import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { markdown } from "./plugins/markdown";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  assetsDir: "assets",
  plugins: [vue(), markdown()],
});
