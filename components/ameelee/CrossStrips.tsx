import styles from "./CrossedStrips.module.css";

const SIZES_LINE = ["54 → 56 → 58 → 60 → 62 → 64", "READY TO SHIP"];
const INSTAGRAM_LINE = ["@AMEELEE_ABAYA", "@AMEELEE__ABAYA"];

// two identical halves so translating -50% loops without a jump
function Track({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const unit = items.flatMap((t) => [t, "·"]);
  const half = [...unit, ...unit, ...unit, ...unit];
  const all = [...half, ...half];

  return (
    <div className={`${styles.track} ${reverse ? styles.reverse : ""}`}>
      {all.map((t, i) => (
        <span key={i}>{t}</span>
      ))}
    </div>
  );
}

export default function CrossedStrips() {
  return (
    <section className={styles.crossed} aria-hidden="true">
      <div className={`${styles.strip} ${styles.tape}`}>
        <Track items={INSTAGRAM_LINE} reverse />
      </div>
      <div className={`${styles.strip} ${styles.black}`}>
        <Track items={SIZES_LINE} />
      </div>
    </section>
  );
}
