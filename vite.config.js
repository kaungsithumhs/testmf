import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "chatBuyer",
      filename: "remoteEntry.js",
      manifest: true,
      exposes: {
        "./text": "./src/text.jsx",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
        "react-dom": {
          singleton: true,
          requiredVersion: "^18.3.1",
        },
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
