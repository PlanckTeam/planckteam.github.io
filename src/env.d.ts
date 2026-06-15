/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// Workaround: plyr ships with incomplete .d.ts (missing default export).
// This module declaration overrides it to make `import Plyr from 'plyr'` work.
declare module "plyr" {
  interface ControlsOptions {
    controls?: string[];
    settings?: string[];
    [key: string]: unknown;
  }

  export default class Plyr {
    static setup(
      targets: NodeList | HTMLElement | HTMLElement[] | string,
      options?: ControlsOptions
    ): Plyr[];
    static supported(
      mediaType?: string,
      provider?: string,
      playsInline?: boolean
    ): { api: boolean; native: boolean };
    constructor(targets: NodeList | HTMLElement | HTMLElement[] | string, options?: ControlsOptions);
    destroy(): void;
    readonly playing: boolean;
    readonly paused: boolean;
    readonly stopped: boolean;
  }
}
