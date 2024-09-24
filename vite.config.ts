import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    watch: {
      usePolling: true,         // Enable polling to detect file changes
      interval: 100,            // Polling interval in milliseconds
      ignored: ['**/public/**']  // Avoid watching unnecessary directories
    },
  },
});
