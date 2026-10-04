"use client";

import { useState, type CSSProperties } from "react";
import styles from "./WhySentence.module.css";

// each highlighted phrase owns a colour from the door palette
const COLOURS = {
  dubai: "#1b3a5c",
  states: "#2d6a4f",
  cac: "#b84a5f",
  sizes: "#6b3fa6",
} as const;

type Key = keyof typeof COLOURS;

export default function WhySentence() {
  const [active, setActive] = useState<Key | null>(null);

  function em(key: Key, text: string) {
    const state =
      active === null ? "" : active === key ? styles.on : styles.dim;
    return (
      <strong
        className={`${styles.em} ${state}`}
        style={{ "--em": COLOURS[key] } as CSSProperties}
        onMouseEnter={() => setActive(key)}
        onMouseLeave={() => setActive(null)}
      >
        {text}
      </strong>
    );
  }

  const tinted = active !== null;

  return (
    <section
      className={styles.why}
      style={
        {
          "--bg": tinted ? COLOURS[active] : "#ffffff",
          "--ink": tinted ? "#ffffff" : "#0a0a0a",
        } as CSSProperties
      }
      aria-labelledby="why-title"
    >
      <h2 id="why-title" className={styles.title}>
        WHY
        <small className={styles.subtitle}>AMEELEE ABAYA</small>
      </h2>

      <p className={styles.sentence}>
        Straight from {em("dubai", "Dubai")}. To all {em("states", "36 states")}
        . {em("cac", "CAC registered.")} Every size from{" "}
        {em("sizes", "54 to 64")}.
      </p>
    </section>
  );
}
