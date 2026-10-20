/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx,js}"],
      exclude: ["src/env.d.ts"],
      reporter: ["text", "text-summary", "json-summary", "html"],
    },
  },
});
