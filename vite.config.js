import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/code-jam_react/" : "/",
    plugins: [react()],
    server: {
      port: 3001,
    },
  };
});
