import Image from "next/image";
import { INSTAGRAM, WHATSAPP_URL } from "@/data/raifa/ameelee/contact";
import styles from "./Footer.module.css";

// one letter per door colour, in door order (onyx is lifted so it shows on black)
const LETTERS = [
  { l: "A", c: "#262626" },
  { l: "M", c: "#6b3fa6" },
  { l: "E", c: "#1b3a5c" },
  { l: "E", c: "#c6a27c" },
  { l: "L", c: "#2d6a4f" },
  { l: "E", c: "#b84a5f" },
  { l: "E", c: "#7a6a5c" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cols}>
        <div>
          <Image
            src="/images/ameelee/logo.svg"
            alt="Ameelee Abaya"
            width={40}
            height={36}
            className={styles.logo}
          />
          <p className={styles.small}>AMEELEE ABAYA.NG · CAC REGISTERED</p>
        </div>

        <div>
          <p className={styles.small}>FOLLOW</p>
          {INSTAGRAM.map((i) => (
            <a
              key={i.handle}
              className={styles.link}
              href={i.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {i.handle} {i.note}
            </a>
          ))}
        </div>

        <div>
          <p className={styles.small}>ORDER</p>
          <a
            className={styles.link}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp orders
          </a>
        </div>
      </div>

      <div className={styles.word} role="img" aria-label="Ameelee">
        {LETTERS.map((x, i) => (
          <span key={i} style={{ color: x.c }} aria-hidden="true">
            {x.l}
          </span>
        ))}
      </div>

      <p className={styles.legal}>© 2025 Ameelee Abaya · All Rights Reserved</p>
    </footer>
  );
}
