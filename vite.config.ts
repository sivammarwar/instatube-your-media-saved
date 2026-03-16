import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  server: {
    port: 5173,
  },

  build: {
    // Raise the warning limit slightly (default 500kb is too aggressive for React apps)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Split vendor chunks so browser can cache them separately
        manualChunks: {
          // React core — rarely changes, cached aggressively
          "vendor-react": ["react", "react-dom"],
          // Framer Motion is large (~100kb) — isolate it
          "vendor-framer": ["framer-motion"],
          // Sonner toast library
          "vendor-sonner": ["sonner"],
        },
      },
    },
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },

  // Vitest config
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
  },
});