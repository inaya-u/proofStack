import Link from "next/link";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { label: "Abayas", href: "/raifa/abayas" },
  { label: "Bags", href: "/raifa/bags" },
  { label: "Veils", href: "/raifa/veils" },
  { label: "Perfume", href: "/raifa/perfume" },
]; // order matches source design: Abayas, Bags, Veils, Perfume

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.announcementBar}>
        <span className={styles.announcementPrimary}>
          <span className={styles.star}>✦</span> Shop In-Store or Order Online ·{" "}
          <span className={styles.announcementAccent}>
            Aliyah Mall, Lugbe, Abuja
          </span>{" "}
          <span className={styles.star}>✦</span>
        </span>
        <span className={styles.announcementSecondary}>
          Nationwide Delivery Available
        </span>
      </div>

      <div className={styles.navRow}>
        <Link href="/raifa" className={styles.logo}>
          <img
            src="/images/raifa/logo-mobile.svg"
            alt="Raifa Store"
            className={styles.logoMobile}
          />
          <img
            src="/images/raifa/logo-desktop.svg"
            alt="Raifa Store"
            className={styles.logoDesktop}
          />
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.iconGroup}>
          <button aria-label="Search" className={styles.iconButton}>
            <SearchIcon />
          </button>
          <button aria-label="Cart" className={styles.iconButton}>
            <CartIcon />
          </button>
          <button aria-label="Menu" className={styles.menuButton}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M6 6h15l-1.5 9h-12z" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" />
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" />
      <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
    </svg>
  );
}
