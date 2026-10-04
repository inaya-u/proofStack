"use client";

import { useState } from "react";
import Image from "next/image";
import EclipseLink from "./EclipseLink";
import styles from "./Header.module.css";

const ANNOUNCEMENTS = [
  "WORLDWIDE SHIPPING",
  "CAC REGISTERED · AMEELEE ABAYA.NG",
  "DUBAI ABAYAS & JALABIYA",
  "SIZES 54 -64",
];

// placeholder routes, swap for the real ones
const NAV_LINKS = [
  { label: "Shop", href: "/ameelee/shop" },
  { label: "Abayas", href: "/ameelee/abayas" },
  { label: "Jalabiya", href: "/ameelee/jalabiya" },
  { label: "Sizes", href: "/ameelee/sizes" },
  { label: "Contact", href: "/ameelee/contact" },
];

type HeaderProps = {
  cartCount?: number;
};

function MarqueeGroup({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className={styles.marqueeGroup} aria-hidden={hidden || undefined}>
      {ANNOUNCEMENTS.map((text) => (
        <li key={text} className={styles.marqueeItem}>
          <span>{text}</span>
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Header({ cartCount = 0 }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.announcementBar}>
        <div className={styles.marqueeTrack}>
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>

      <div className={styles.navBar}>
        <EclipseLink href="/ameelee" className={styles.logo}>
          <Image
            src="/images/ameelee/logo.svg"
            alt="Ameelee Abaya"
            width={40}
            height={36}
            className={styles.logoImg}
            priority
          />
        </EclipseLink>

        <nav className={styles.links} aria-label="Primary">
          <ul className={styles.linkList}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <EclipseLink href={link.href} className={styles.link}>
                  {link.label}
                </EclipseLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M16.5 16.5L21 21" />
            </svg>
          </button>

          <button
            type="button"
            className={styles.iconButton}
            aria-label={`Cart, ${cartCount} items`}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 8h14l-1 12H6L5 8z" />
              <path d="M9 8V6a3 3 0 016 0v2" />
            </svg>
            {cartCount > 0 && (
              <span className={styles.cartBadge}>{cartCount}</span>
            )}
          </button>

          <button
            type="button"
            className={`${styles.iconButton} ${styles.menuButton}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="ameelee-drawer"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav
        id="ameelee-drawer"
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile"
      >
        <ul className={styles.drawerList}>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <EclipseLink href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </EclipseLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
