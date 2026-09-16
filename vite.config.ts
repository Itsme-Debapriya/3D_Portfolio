import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Silence benign PostCSS notice caused by Tailwind CSS v3 internal parser
const origWarn = console.warn;
console.warn = (...args: unknown[]) => {
  if (
    typeof args[0] === "string" &&
    args[0].includes("A PostCSS plugin did not pass the `from` option to `postcss.parse`")
  ) {
    return;
  }
  origWarn(...args);
};

export default defineConfig({
  plugins: [react(), runtimeErrorOverlay()],
  
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
