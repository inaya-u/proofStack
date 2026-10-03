import styles from "./WhySection.module.css";

const STORE_INFO = {
  address: "Shop 4, Aliyah Mall, Lugbe, Abuja",
  hours: [
    { days: "Mon – Sat", time: "9am – 7pm" },
    { days: "Sunday", time: "11am – 5pm" },
  ],
  delivery: "Nationwide delivery available",
};

export default function WhySection() {
  return (
    <section aria-label="Find us" className={styles.section}>
      <div className={styles.left}>
        <h2 className={styles.heading}>Find Us</h2>

        <ul className={styles.infoList}>
          <li className={styles.infoItem}>
            <PinIcon />
            <span>{STORE_INFO.address}</span>
          </li>
          {STORE_INFO.hours.map((entry) => (
            <li key={entry.days} className={styles.infoItem}>
              <ClockIcon />
              <span>
                {entry.days}: {entry.time}
              </span>
            </li>
          ))}
          <li className={styles.infoItem}>
            <TruckIcon />
            <span>{STORE_INFO.delivery}</span>
          </li>
        </ul>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.chatButton}
        >
          <WhatsAppIcon />
          Chat with Raifa
        </a>
      </div>

      {/* desktop only — editorial right column, no mobile equivalent */}
      <div className={styles.right}>
        <p className={styles.rightLine}>
          Walk in for the full fitting experience,
          <br />
          or let us bring the store to you —
          <br />
          <span className={styles.rightAccent}>nationwide, no exceptions.</span>
        </p>
      </div>
    </section>
  );
}

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12 21s-7-6.5-7-11a7 7 0 1 1 14 0c0 4.5-7 11-7 11z"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10" r="2.5" strokeWidth="1.5" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
      <path d="M12 7v5l3 3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        d="M3 7h11v9H3zM14 11h4l3 3v2h-7z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1 1 12 20zm4.4-5.9c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.1-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-1-1.1-1.4-1.8-.1-.2 0-.4.1-.5l.4-.5c.1-.1.1-.3.1-.4 0-.1-.5-1.3-.7-1.8-.2-.4-.4-.4-.5-.4h-.5c-.1 0-.4.1-.6.3-.6.6-.9 1.4-.9 2.2.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.6.4.2.8.3 1.3.5.5.1 1 .1 1.5.1.6-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.2-.4-.2z" />
    </svg>
  );
}
