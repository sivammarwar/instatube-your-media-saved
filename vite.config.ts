import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  publicDir: "public",

  server: {
    port: 5173,
    fs: {
      allow: [".."],
    },
  },

  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-sonner": ["sonner"],
        },
      },
    },
  },

  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
});