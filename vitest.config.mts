import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Default to a Node environment. Tests that need the DOM can opt in with
    // a `// @vitest-environment jsdom` comment at the top of the file.
    environment: "node",
    globals: true,
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx", "src/**/*.test.ts", "src/**/*.test.tsx"],
  },
});
