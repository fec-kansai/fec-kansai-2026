import type { ComponentProps } from "react";

/**
 * Storybook shim for `next/image`. The Storybook app runs on Vite and has no
 * Next runtime, so `next/image` is aliased to this plain <img> in main.ts. It
 * only needs to render — it is not the subject of any story/test.
 */
type NextImageProps = Omit<ComponentProps<"img">, "src"> & {
  src: string | { src: string };
};

export default function Image({ src, alt = "", ...props }: NextImageProps) {
  const resolved = typeof src === "string" ? src : src.src;
  // biome-ignore lint/a11y/useAltText: alt is forwarded from the caller
  return <img src={resolved} alt={alt} {...props} />;
}
