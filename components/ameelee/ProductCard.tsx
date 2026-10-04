"use client";

import { useState } from "react";
import Image from "next/image";
import { type Product, COLOURS } from "@/data/raifa/ameelee/products";
import EclipseLink from "./EclipseLink";
import Garment from "./Garment";
import styles from "./ProductCard.module.css";

const naira = new Intl.NumberFormat("en-NG");

export default function ProductCard({ product }: { product: Product }) {
  // no image set, or the file 404s: show the hanger garment instead
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(product.image) && !failed;
  const tint = COLOURS.find((c) => c.key === product.colour)?.tint ?? "#999999";

  return (
    <EclipseLink href={`/ameelee/shop/${product.slug}`} className={styles.card}>
      <div className={styles.photo}>
        {showImage ? (
          <Image
            src={product.image as string}
            alt={`${product.name}, ${product.description}`}
            fill
            sizes="260px"
            className={styles.img}
            onError={() => setFailed(true)}
          />
        ) : (
          <Garment colour={tint} className={styles.garment} />
        )}
        {product.isNew && <span className={styles.new}>NEW</span>}
      </div>

      <p className={styles.cat}>{product.category}</p>
      <h3 className={styles.name}>{product.name}</h3>
      <p className={styles.desc}>{product.description}</p>
      <p className={styles.price}>₦{naira.format(product.price)}</p>

      <ul className={styles.sizes} aria-label="Available sizes">
        {product.sizes.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </EclipseLink>
  );
}
