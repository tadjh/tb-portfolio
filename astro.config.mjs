import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://www.tadjh.com",
  output: "hybrid",
  integrations: [tailwind(), react(), mdx(), sitemap()],
  prefetch: true,
  vite: {
    assetsInclude: ["**/*.glb", "**/*.mp3"],
  },
});
