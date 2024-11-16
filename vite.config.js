import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/code-jam_react/", // add this field
  // base: "/",
  plugins: [react()],
  server: {
    port: 3001,
  },
});
