"use client";

import { useState, useMemo } from "react";
import { products } from "@/data/raifa/products";
import { Product } from "@/types/product";
import CategoryFilter from "./CategoryFilter";
import ProductCard from "./Productcard";
import styles from "./ProductGrid.module.css";

type CategoryValue = "all" | Product["category"];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section aria-label="Product collection" className={styles.section}>
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      <div className={styles.heading}>
        <h2 className={styles.headingText}>New In</h2>
        <span className={styles.count}>{filteredProducts.length} pieces</span>
      </div>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
