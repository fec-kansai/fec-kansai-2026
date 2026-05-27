import Image from "next/image";
import type { NavLink } from "../constants";
import styles from "../page.module.css";

type HeaderProps = {
  navItems: NavLink[];
};

export function Header({ navItems }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a
        className={styles.logoLink}
        href="/"
        aria-label="Frontend Conference Kansai 2026"
      >
        <Image
          src="/logo.svg"
          alt="Page logo"
          width={136}
          height={40}
          priority
        />
      </a>
      <nav className={styles.nav}>
        {navItems.map((item) => (
          <a key={item.name} href={item.url} className={styles.navLink}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
