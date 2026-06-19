import type { ComponentProps } from "react";

/**
 * Storybook shim for `next/link`. Aliased to a plain <a> in main.ts so that
 * `apps/web` components which import `next/link` can render under Vite Storybook.
 */
type NextLinkProps = Omit<ComponentProps<"a">, "href"> & {
  href: string | { pathname?: string };
};

export default function Link({ href, children, ...props }: NextLinkProps) {
  const resolved = typeof href === "string" ? href : (href.pathname ?? "#");
  return (
    <a href={resolved} {...props}>
      {children}
    </a>
  );
}
