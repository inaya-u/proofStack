import { whatsappLink } from "@/data/raifa/ameelee/contact";
import Garment from "./Garment";
import styles from "./EditorsPick.module.css";

// this week's pick. Change these to swap the piece.
const PICK = {
  name: "ZAINAB",
  label: "JALABIYA · EDITOR’S PICK",
  line: "Pure Onyx · Hand-finished sleeves",
  price: 96000,
  tint: "#262626",
};

const naira = new Intl.NumberFormat("en-NG");

export default function EditorsPick() {
  return (
    <section className={styles.pick} aria-labelledby="pick-title">
      <h2 id="pick-title" className={styles.title}>
        EDITOR’S
        <small className={styles.subtitle}>PICK OF THE WEEK</small>
      </h2>

      <div className={styles.big} aria-hidden="true">
        {PICK.name}
      </div>

      <div className={styles.rail} aria-hidden="true" />

      <div className={styles.hang} aria-hidden="true">
        <Garment colour={PICK.tint} className={styles.garment} />
        <div className={styles.tag}>
          <span>₦{naira.format(PICK.price)}</span>
        </div>
      </div>

      <div className={styles.copy}>
        <p className={styles.eyebrow}>{PICK.label}</p>
        <p className={styles.line}>{PICK.line}</p>
        <a
          className={styles.cta}
          href={whatsappLink(
            `Hi Ameelee Abaya, I'd like to order the ${PICK.name} jalabiya.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          ORDER NOW <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
