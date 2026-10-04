import { SIZES } from "@/data/raifa/ameelee/sizes";
import EclipseLink from "./EclipseLink";
import styles from "./HeroMobile.module.css";

export default function HeroMobile() {
  return (
    <section className={styles.hero} aria-label="Dubai Abayas collection">
      {/* ghosted vertical wordmark */}
      <span className={styles.ghost} aria-hidden="true">
        AMEELEE
      </span>

      <ul className={styles.ladder} aria-label="Available sizes">
        {SIZES.map((s, i) => (
          <li
            key={s}
            className={
              i === 0 || i === SIZES.length - 1 ? styles.dim : undefined
            }
          >
            {s}
          </li>
        ))}
      </ul>

      <p className={styles.season}>SS · 2025</p>

      <p className={styles.eyebrow}>
        <span className={styles.rule} aria-hidden="true" />
        NEW COLLECTION
      </p>

      <h1 className={styles.title}>
        DUBAI
        <br />
        ABAYAS.
      </h1>

      <p className={styles.sub}>
        YOUR SIZE.
        <br />
        YOUR STYLE.
      </p>

      <p className={styles.tag}>Premium. Extended Sizes. Ready to Ship.</p>

      <EclipseLink href="/ameelee/shop" className={styles.cta}>
        <span>EXPLORE COLLECTION</span>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      </EclipseLink>
    </section>
  );
}
