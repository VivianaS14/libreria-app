import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 2000, // Tamaño límite del fragmento en kB
  },
  rollupOptions: {
    treeshake: {
      experimentalChunkRequestStrategy: {
        chunkSizeWarningLimit: 1500, // Tamaño límite del fragmento en kB
      },
    },
  },
});
