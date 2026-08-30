import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Staff } from "./types";

type WrapperProps = { href?: string; children: ReactNode };

function Wrapper({ href, children }: WrapperProps) {
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

type Props = { staff: Staff };

export function StaffCard({ staff }: Props) {
  const { displayName, x, anyLink, icon } = staff;

  return (
    <Wrapper href={x ? `https://x.com/${x}` : anyLink}>
      <Image
        src={`/staff-img/${icon}`}
        alt={displayName}
        className="aspect-square w-32 rounded-2xl object-cover"
        width={130}
        height={130}
      />
      <p className="text-fk-text-main text-[14px] leading-[1.65]">
        {displayName}
      </p>
    </Wrapper>
  );
}
