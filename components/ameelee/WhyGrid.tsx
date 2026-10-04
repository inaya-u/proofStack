import type { ReactNode } from "react";
import styles from "./WhyGrid.module.css";

const REASONS: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Direct Dubai",
    text: "Sourced straight from Dubai — no middlemen.",
    icon: (
      <>
        <path d="M12 3l9 5-9 5-9-5 9-5z" />
        <path d="M3 12l9 5 9-5" />
        <path d="M3 16l9 5 9-5" />
      </>
    ),
  },
  {
    title: "Nationwide delivery",
    text: "All 36 states. Fast, tracked, insured.",
    icon: (
      <>
        <path d="M3 5h11v11H3z" />
        <path d="M14 9h4l3 3v4h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
  },
  {
    title: "CAC registered",
    text: "Ameelee Abaya.NG — fully licensed.",
    icon: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />,
  },
  {
    title: "Extended sizes",
    text: "54 to 64. Every size, every style.",
    icon: (
      <>
        <path d="M12 8a2.2 2.2 0 1 0-2.2-2.2" />
        <path d="M12 8v2.5L3 17h18l-9-6.5" />
      </>
    ),
  },
];

export default function WhyGrid() {
  return (
    <section className={styles.wrap} aria-labelledby="m-why-title">
      <h2 id="m-why-title" className={styles.title}>
        WHY
        <span className={styles.subtitle}>AMEELEE ABAYA</span>
      </h2>

      <ul className={styles.grid}>
        {REASONS.map((r) => (
          <li key={r.title} className={styles.tile}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {r.icon}
            </svg>
            <h3 className={styles.tileTitle}>{r.title}</h3>
            <p className={styles.tileText}>{r.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
