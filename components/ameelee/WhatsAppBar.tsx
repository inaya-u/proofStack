import { WHATSAPP_URL } from "@/data/raifa/ameelee/contact";
import styles from "./WhatsAppBar.module.css";

export default function WhatsAppBar() {
  return (
    <>
      <aside className={styles.bar} aria-label="Order via WhatsApp">
        <div className={styles.copy}>
          <p className={styles.head}>
            ORDER VIA
            <br />
            WHATSAPP
          </p>
          <p className={styles.sub}>Fast · Easy · Trusted</p>
        </div>

        <a
          className={styles.btn}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5z" />
            <path d="M9.2 8.6c.3 2.4 2.6 4.8 5.4 5.4l1.2-1.3-1.9-1.2-.9.7a3.6 3.6 0 0 1-1.9-1.9l.7-.9-1.2-1.9z" />
          </svg>
          <span className={styles.label}>
            CHAT TO <br className={styles.br} />
            ORDER
          </span>
        </a>
      </aside>

      {/* keeps the last bit of the page clear of the fixed bar on mobile */}
      <div className={styles.spacer} aria-hidden="true" />
    </>
  );
}
