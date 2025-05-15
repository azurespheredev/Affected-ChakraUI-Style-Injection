import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: false,
    minify: "terser",
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        content: resolve(__dirname, "src/content.tsx"),
      },
      output: {
        format: "iife",
        entryFileNames: "scripts/content.js",
        assetFileNames: "assets/[name].[ext]",
        chunkFileNames: "scripts/[name].js",
      },
    },
  },
});
