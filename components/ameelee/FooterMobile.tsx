import Image from "next/image";
import { WHATSAPP_URL, INSTAGRAM } from "@/data/raifa/ameelee/contact";
import styles from "./FooterMobile.module.css";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export default function FooterMobile() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/images/ameelee/logo.svg"
        alt="Ameelee Abaya"
        width={40}
        height={36}
        className={styles.logo}
      />
      <p className={styles.tag}>AMEELEE ABAYA.NG · CAC REGISTERED</p>

      <ul className={styles.links}>
        {INSTAGRAM.map((i) => (
          <li key={i.handle}>
            <a href={i.href} target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              <span>
                {i.handle} {i.note}
              </span>
            </a>
          </li>
        ))}
        <li>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16v12H8l-4 4V4z" />
            </svg>
            <span>Whatsapp Orders</span>
          </a>
        </li>
      </ul>

      <p className={styles.legal}>© 2025 Ameelee Abaya · All Rights Reserved</p>
    </footer>
  );
}
