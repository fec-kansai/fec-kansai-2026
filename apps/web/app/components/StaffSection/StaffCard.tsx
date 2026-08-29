import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Staff } from "./types";

type Props = { staff: Staff };

function Wrapper({ href, children }: { href?: string; children: ReactNode }) {
  if (!href)
    return <div className="flex flex-col items-center">{children}</div>;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center"
    >
      {children}
    </Link>
  );
}

export function StaffCard({ staff }: Props) {
  const { displayName, x } = staff;

  return (
    <Wrapper href={x ? `https://x.com/${x}` : undefined}>
      <Image
        src="/takoyan-general.svg"
        alt={displayName}
        className="aspect-square w-32"
        width={130}
        height={130}
      />
      <p className="text-fk-text-main text-[14px] leading-[1.65]">
        {displayName}
      </p>
    </Wrapper>
  );
}
