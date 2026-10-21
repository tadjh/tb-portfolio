/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx,js}"],
      // Vendored shadcn components, type-only files and stories aren't under test
      exclude: [
        "src/components/ui/**",
        "src/types/**",
        "src/env.d.ts",
        "src/content.config.ts",
        "src/**/*.stories.{ts,tsx}",
      ],
      reportOnFailure: true,
      reporter: ["text", "text-summary", "json-summary", "html"],
    },
  },
});
