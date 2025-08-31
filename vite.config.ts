import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",        // Enables access from network devices
    port: 8080,        // Runs dev server on port 8080
    open: true,        // Auto-open browser when dev server starts
  },
  plugins: [
    react(),
    // Only enable componentTagger in development
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Use @ as alias for /src
    },
  },
  build: {
    outDir: "dist",    // Default output folder
    sourcemap: mode === "development", // Generate sourcemaps only in dev
  },
}));
