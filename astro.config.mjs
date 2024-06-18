import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import { lastModified } from "./plugins/remark.mjs";

export default defineConfig({
  site: "https://tadjh.com",
  output: "hybrid",
  adapter: netlify(),
  markdown: { remarkPlugins: [lastModified] },
  integrations: [
    tailwind(),
    react(),
    mdx(),
    sitemap({
      filter: (page) => page !== "https://tadjh.com/andi-jones-for-mayor/",
    }),
  ],
  prefetch: true,
  vite: {
    assetsInclude: ["**/*.glb", "**/*.mp3"],
  },
});
