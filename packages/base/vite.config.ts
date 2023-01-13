import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "waterial",
      fileName: "waterial-base",
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.ts"),
    },
  },
  plugins: [dts()],
});
