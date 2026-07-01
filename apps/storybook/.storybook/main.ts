import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // Serve apps/web/public so stories of web components can load their images
  // (e.g. /side-meetup-event.png) the same way they do in the Next app.
  staticDirs: [join(here, "..", "..", "web", "public")],
  addons: [
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/experimental-addon-test"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  // apps/web components import next/image and next/link, which have no runtime
  // under Vite Storybook — alias them to lightweight shims so the components render.
  async viteFinal(viteConfig) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(viteConfig, {
      resolve: {
        alias: {
          "next/image": join(here, "shims/next-image.tsx"),
          "next/link": join(here, "shims/next-link.tsx"),
        },
      },
    });
  },
};

export default config;
