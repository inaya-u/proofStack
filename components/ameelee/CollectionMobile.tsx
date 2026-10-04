"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import {
  COLOURS,
  PRODUCTS,
  TABS,
  type ColourKey,
  type Product,
} from "@/data/raifa/ameelee/products";
import EclipseLink from "./EclipseLink";
import ProductImage from "./ProductImage";
import styles from "./CollectionMobile.module.css";

type TabId = (typeof TABS)[number]["id"];

const naira = new Intl.NumberFormat("en-NG");

function Row({ p }: { p: Product }) {
  const c = COLOURS.find((x) => x.key === p.colour) ?? COLOURS[0];

  return (
    <li className={styles.item} style={{ "--tile": c.bg } as CSSProperties}>
      <EclipseLink href={`/ameelee/shop/${p.slug}`} className={styles.row}>
        <div className={styles.photo}>
          <ProductImage
            src={p.image}
            alt={`${p.name}, ${p.description}`}
            tint={c.tint}
            sizes="84px"
            imgClassName={styles.img}
            garmentClassName={styles.garment}
          />
        </div>

        <div className={styles.body}>
          <div className={styles.top}>
            {p.isNew && <span className={styles.new}>NEW</span>}
            <span className={styles.cat}>{p.category}</span>
          </div>
          <h3 className={styles.name}>{p.name}</h3>
          <p className={styles.desc}>{p.description}</p>
          <div className={styles.foot}>
            <span className={styles.price}>₦{naira.format(p.price)}</span>
            <ul className={styles.sizes} aria-label="Available sizes">
              {p.sizes.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <span className={styles.bar} aria-hidden="true" />
      </EclipseLink>
    </li>
  );
}

type Props = {
  /** rows shown before the interlude */
  splitAt?: number;
  /** goes between the first rows and the rest (strip + editor's pick in the design) */
  interlude?: ReactNode;
};

export default function CollectionMobile({ splitAt = 4, interlude }: Props) {
  const [tab, setTab] = useState<TabId>("all");
  const [colour, setColour] = useState<ColourKey | null>(null);

  const visible = PRODUCTS.filter(
    (p) =>
      (tab === "all" ? true : tab === "new" ? p.isNew : p.category === tab) &&
      (colour === null || p.colour === colour),
  );
  const first = visible.slice(0, splitAt);
  const rest = visible.slice(splitAt);

  return (
    <section className={styles.wrap} aria-labelledby="m-collection-title">
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

      <div
        className={styles.swatches}
        role="group"
        aria-label="Filter by colour"
      >
        {COLOURS.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`${styles.sw} ${colour === c.key ? styles.swOn : ""}`}
            aria-pressed={colour === c.key}
            onClick={() => setColour(colour === c.key ? null : c.key)}
          >
            <span className={styles.chip} style={{ background: c.bg }} />
            <span className={styles.swName}>{c.name}</span>
          </button>
        ))}
      </div>

      <header className={styles.head}>
        <h2 id="m-collection-title" className={styles.title}>
          COLLECTION
          <span className={styles.subtitle}>DUBAI &amp; JALABIYA</span>
        </h2>
        <p className={styles.count} aria-live="polite">
          {visible.length} {visible.length === 1 ? "piece" : "pieces"}
        </p>
      </header>

      <ul className={styles.list}>
        {first.map((p) => (
          <Row key={p.slug} p={p} />
        ))}
      </ul>

      {interlude}

      {rest.length > 0 && (
        <ul className={styles.list}>
          {rest.map((p) => (
            <Row key={p.slug} p={p} />
          ))}
        </ul>
      )}
    </section>
  );
}
