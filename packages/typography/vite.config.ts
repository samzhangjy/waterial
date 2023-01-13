import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "waterial",
      fileName: "waterial-typography",
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.ts"),
      external: ["react", "react-dom", "@emotion/react", "@emotion/styled"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@emotion/styled": "styled",
        },
      },
    },
  },
  plugins: [
    dts({ insertTypesEntry: true }),
    react({
      jsxRuntime: "classic",
    }),
  ],
});
