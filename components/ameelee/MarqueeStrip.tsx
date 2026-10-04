import styles from "./MarqueeStrip.module.css";

type Props = {
  items: string[];
  /** sizes = grey on black, insta = bright on black */
  tone?: "sizes" | "insta";
};

// two identical halves so translating -50% loops without a jump
export default function MarqueeStrip({ items, tone = "sizes" }: Props) {
  const unit = items.flatMap((t) => [t, "·"]);
  const half = [...unit, ...unit, ...unit];
  const all = [...half, ...half];

  return (
    <div
      className={`${styles.strip} ${tone === "insta" ? styles.insta : styles.sizes}`}
      aria-hidden="true"
    >
      <div className={styles.track}>
        {all.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
