import type { StorybookConfig } from "@storybook-astro/framework";
import { react } from "@storybook-astro/framework/integrations";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  // Videos passed through Astro islands keep their source path in the static
  // build, so serve them from the same location.
  staticDirs: [{ from: "../src/assets/videos", to: "/src/assets/videos" }],
  addons: ["@storybook/addon-themes"],
  framework: {
    name: "@storybook-astro/framework",
    options: {
      integrations: [react()],
      storyRules: "./.storybook/story-rules.ts",
    },
  },
  // Mirror astro.config.mjs, whose vite.assetsInclude isn't picked up here.
  viteFinal(config) {
    config.assetsInclude = ["**/*.glb", "**/*.mp3"];
    return config;
  },
};

export default config;
