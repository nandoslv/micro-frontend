import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
export default defineConfig({
  plugins: [
    react(),    
    federation({
      name: "host",
      remotes: {
        RemoteApp: "http://localhost:4173/assets/remoteEntry.js",
        Jeffs: "http://10.5.10.121:3001/assets/remoteEntry.js"
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});