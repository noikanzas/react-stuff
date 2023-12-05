import reactRefresh from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    chunkSizeWarningLimit: 2000,
    target: "esnext",
    watch: {
      clearScreen: true,
      exclude: "node_modules/**",
    },
    minify: "terser",
    rollupOptions: {
      output: {
        assetFileNames: "[name].[ext]",
        entryFileNames: "main.js",
        manualChunks: {
          "index.css": ["./src/index.css"],
        },
      },
      treeshake: true,
    },
  },
  optimizeDeps: {
    include: ["@mui/material"],
  },
});
