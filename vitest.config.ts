/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    include: ["tests/**/*.test.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{ts,tsx,js}"],
      // Vendored shadcn components and type-only files aren't under test
      exclude: [
        "src/components/ui/**",
        "src/types/**",
        "src/env.d.ts",
        "src/content.config.ts",
      ],
      reportOnFailure: true,
      reporter: ["text", "text-summary", "json-summary", "html"],
    },
  },
});
