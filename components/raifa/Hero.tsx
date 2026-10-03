import styles from "./Hero.module.css";

const HERO_STATS = [
  { value: "Dubai", label: "& Egyptian" },
  { value: "36+", label: "States" },
  { value: "9.4K", label: "Followers" },
];

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* background layers — mobile pattern vs desktop photo, swapped via CSS */}
      <div className={styles.bgMobile} aria-hidden="true" />
      <div className={styles.bgDesktop} aria-hidden="true" />

      {/* overlays — desktop: dark gradient over photo for legibility
          mobile: bottom fade to white/cream so hero blends into page */}
      <div className={styles.overlayDesktop} aria-hidden="true" />
      <div className={styles.overlayMobile} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowLine} aria-hidden="true" />
          <span className={styles.eyebrowPrimary}>Raifa Store</span>
          <span className={styles.eyebrowSecondary}>Aliyah Mall</span>
        </p>

        <h1 className={styles.heading}>
          <span className={styles.headingLine}>Modesty.</span>
          <span className={`${styles.headingLine} ${styles.headingAccent}`}>
            Luxury.
          </span>
          <span className={styles.headingLine}>You.</span>
        </h1>

        <p className={styles.subtext}>
          <span className={styles.subtextMobile}>
            Dubai &amp; Egyptian Abayas · Bags · Perfumes · Veils
          </span>
          <span className={styles.subtextDesktop}>
            Abayas · Bags · Veils · Perfumes
            <br />
            Walk in or order nationwide.
          </span>
        </p>

        <div className={styles.actions}>
          <button type="button" className={styles.shopNow}>
            Shop Now
          </button>
          <button type="button" className={styles.viewCollections}>
            View Collections
          </button>
        </div>

        <div className={styles.inStoreBadge}>
          <span className={styles.badgeDot} aria-hidden="true" />
          Open In-Store Today
        </div>

        <ul className={styles.stats}>
          {HERO_STATS.map((stat) => (
            <li key={stat.label} className={styles.statItem}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
