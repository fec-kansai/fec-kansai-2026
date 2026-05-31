import Image from "next/image";
import Link from "next/link";
import type { NavLink } from "../constants";

type HeaderProps = {
  navItems: NavLink[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header className="w-full max-w-[1220px] mx-auto flex items-center gap-[14px] py-[10px] px-4 lg:px-12 rounded-full bg-fk-white shadow-[0_2px_0_var(--fk-shadow-header)] relative">
      <Link
        className="shrink-0"
        href="/"
        aria-label="Frontend Conference Kansai 2026"
      >
        <Image
          src="/logo.svg"
          alt="Page logo"
          width={246}
          height={63}
          priority
          className="w-[160px] h-auto lg:w-[246px] lg:h-[63px]"
        />
      </Link>
      <nav className="ml-auto hidden items-center gap-5 lg:flex">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            className="text-fk-text-muted text-sm font-bold whitespace-nowrap no-underline transition-opacity duration-200 ease-in-out hover:opacity-70"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
