"use client";

import { useState, type CSSProperties } from "react";
import {
  COLOURS,
  PRODUCTS,
  TABS,
  type ColourKey,
} from "@/data/raifa/ameelee/products";
import ProductCard from "./ProductCard";
import styles from "./Collection.module.css";

type TabId = (typeof TABS)[number]["id"];

export default function Collection() {
  const [tab, setTab] = useState<TabId>("all");
  const [openKey, setOpenKey] = useState<ColourKey>("mauve");

  const visible = PRODUCTS.filter((p) =>
    tab === "all" ? true : tab === "new" ? p.isNew : p.category === tab,
  );
  const inColour = (key: ColourKey) => visible.filter((p) => p.colour === key);

  // if the open door has nothing under this filter, fall back to the first door that does
  const liveKeys = COLOURS.filter((c) => inColour(c.key).length > 0).map(
    (c) => c.key,
  );
  const activeKey = liveKeys.includes(openKey) ? openKey : liveKeys[0];

  return (
    <section className={styles.collection} aria-labelledby="collection-title">
      <nav className={styles.tabs} aria-label="Filter the collection">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`${styles.tab} ${tab === t.id ? styles.tabOn : ""}`}
            aria-pressed={tab === t.id}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <header className={styles.head}>
        <h2 id="collection-title" className={styles.title}>
          COLLECTION
          <span className={styles.subtitle}>DUBAI &amp; JALABIYA</span>
        </h2>
        <p className={styles.count} aria-live="polite">
          {visible.length} {visible.length === 1 ? "piece" : "pieces"}
        </p>
      </header>

      <div className={styles.doors}>
        {COLOURS.map((c) => {
          const items = inColour(c.key);
          const empty = items.length === 0;
          const open = c.key === activeKey;

          return (
            <div
              key={c.key}
              className={`${styles.door} ${open ? styles.open : ""} ${empty ? styles.empty : ""}`}
              style={{ "--bg": c.bg, "--ink": c.ink } as CSSProperties}
              onMouseEnter={() => !empty && setOpenKey(c.key)}
            >
              <button
                type="button"
                className={styles.label}
                aria-expanded={open}
                aria-controls={`panel-${c.key}`}
                disabled={empty}
                onClick={() => setOpenKey(c.key)}
              >
                <span className={styles.labelText}>
                  {c.name}
                  <small className={styles.labelCount}>{items.length}</small>
                </span>
              </button>

              <div
                id={`panel-${c.key}`}
                className={styles.panel}
                role="region"
                aria-label={`${c.name} pieces`}
              >
                <ul className={styles.gallery}>
                  {items.map((p) => (
                    <li key={p.slug}>
                      <ProductCard product={p} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
