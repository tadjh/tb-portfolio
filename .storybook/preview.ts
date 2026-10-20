import { withThemeByClassName } from "@storybook/addon-themes";
import "@fontsource-variable/montserrat";
import "@fontsource/poppins";
import "../src/styles/global.css";

// BaseHead normally adds these once fonts are ready (see .font-fade) and the
// Layout body supplies the page background, so mirror both here.
if (typeof document !== "undefined") {
  document.documentElement.classList.add("fonts-loaded");
  document.body.classList.add(
    "bg-neutral-50",
    "text-white",
    "dark:bg-neutral-900",
    "dark:text-neutral-300",
  );
}

const preview = {
  decorators: [
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "dark",
      parentSelector: "html",
    }),
  ],
  parameters: {
    layout: "padded",
  },
};

export default preview;
