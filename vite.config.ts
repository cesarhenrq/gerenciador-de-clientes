import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@main": "/src/main",
      "@data": "/src/data",
      "@domain": "/src/domain",
      "@infra": "/src/infra",
      "@presentation": "/src/presentation",
    },
  },
  plugins: [react()],
});
