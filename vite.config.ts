import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ... rest of your config
  plugins: [
    react(),
    // Only try to use the tagger if we are in development
    mode === 'development' && (() => {
      try {
        return require("lovable-tagger").componentTagger();
      } catch (e) {
        return null;
      }
    })(),
  ]