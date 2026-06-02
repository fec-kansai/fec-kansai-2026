"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "../constants";

type HeaderProps = {
  navItems: NavLink[];
};

export function Header({ navItems }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full max-w-[1220px] mx-auto flex items-center gap-[14px] py-[10px] px-4 lg:px-12 rounded-none lg:rounded-full bg-fk-white shadow-[0_2px_0_var(--fk-shadow-header)] relative">
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

      {/* Mobile hamburger button */}
      <button
        type="button"
        aria-label="メニュー"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-fk-green transition-opacity duration-200 ease-in-out hover:opacity-90 lg:hidden"
      >
        <span className="relative block h-4 w-[22px]">
          <span
            className={`absolute left-0 top-0 block h-[2px] w-[22px] rounded-full bg-fk-white transition-transform duration-300 ease-in-out ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-[2px] w-[22px] -translate-y-1/2 rounded-full bg-fk-white transition-opacity duration-200 ease-in-out ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute bottom-0 left-0 block h-[2px] w-[22px] rounded-full bg-fk-white transition-transform duration-300 ease-in-out ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {/* Mobile dropdown menu */}
      <nav
        aria-hidden={!open}
        className={`absolute left-0 right-0 top-full z-10 mt-2 flex origin-top flex-col rounded-[10px] bg-fk-white py-2 shadow-[0_2px_0_var(--fk-shadow-header)] transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? "translate-y-0 scale-y-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-y-95 opacity-0"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.url}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
            className="px-5 py-3 text-fk-text-muted text-sm font-bold no-underline transition-opacity duration-200 ease-in-out hover:opacity-70"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
