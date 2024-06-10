/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.mp3" {
  const src: string;
  export default src;
}
