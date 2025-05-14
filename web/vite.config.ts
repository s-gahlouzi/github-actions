import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    reporters: ["default"],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "json-summary", "lcov"],
      include: ["src/**/*.{ts,tsx}"],
      // If you want a coverage reports even if your tests are failing, include the reportOnFailure option
      reportOnFailure: true,
    },
    testTimeout: 60000,
    watch: false,
    silent: true,
    // to prevent this issue https://vitest.dev/guide/common-errors.html#failed-to-terminate-worker
    pool: "forks",
  },
});
