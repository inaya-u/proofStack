import styles from "./Footer.module.css";

const SOCIAL_LINKS = [
  { label: "Whatsapp", href: "https://wa.me/" },
  { label: "@raifa_store", href: "https://instagram.com/raifa_store" },
];

const SISTER_PAGES = [
  { label: "@raifa_kiddies", href: "https://instagram.com/raifa_kiddies" },
  { label: "@raifa_store_1", href: "https://instagram.com/raifa_store_1" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.brandCol}>
          <img
            src="/images/raifa/logo-mobile.svg"
            alt="Raifa Store"
            className={styles.logo}
          />
          <p className={styles.tagline}>
            Modesty. Luxury. You. Dubai &amp; Egyptian abayas, bags, veils and
            perfumes — in-store at Aliyah Mall or delivered nationwide.
          </p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Connect</h3>
          <ul className={styles.linkList}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Visit</h3>
          <p className={styles.address}>Shop 4, Aliyah Mall, Lugbe, Abuja</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Sister Pages</h3>
          <ul className={styles.linkList}>
            {SISTER_PAGES.map((page) => (
              <li key={page.href}>
                <a
                  href={page.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <span>© {new Date().getFullYear()} Raifa Store</span>
      </div>
    </footer>
  );
}
