import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import { lastModified } from "./plugins/remark.mjs";

export default defineConfig({
  site: "https://tadjh.com",
  adapter: netlify({ imageCDN: false }),
  markdown: { remarkPlugins: [lastModified] },
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => page !== "https://tadjh.com/andi-jones-for-mayor/",
    }),
  ],
  prefetch: true,
  vite: {
    plugins: [tailwindcss()],
    assetsInclude: ["**/*.glb", "**/*.mp3"],
  },
});
