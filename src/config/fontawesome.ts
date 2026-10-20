import { config } from "@fortawesome/fontawesome-svg-core";

// Font Awesome's styles are imported into a cascade layer in global.css.
// Its runtime-injected copy is unlayered, which would override Tailwind's
// layered sizing utilities (h-6, w-10, ...).
config.autoAddCss = false;
