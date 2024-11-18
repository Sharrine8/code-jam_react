import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/code-jam_react/",
  plugins: [react()],
  server: {
    port: 3001,
  },
});
