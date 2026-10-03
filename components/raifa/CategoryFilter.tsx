"use client";

import { categories } from "@/data/raifa/products";
import { Product } from "@/types/product";
import styles from "./CategoryFilter.module.css";

type CategoryValue = "all" | Product["category"];

interface CategoryFilterProps {
  active: CategoryValue;
  onChange: (value: CategoryValue) => void;
}

export default function CategoryFilter({
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter products by category"
      className={styles.filterRow}
    >
      {categories.map((category) => {
        const isActive = category.value === active;
        return (
          <button
            key={category.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category.value)}
            className={`${styles.pill} ${isActive ? styles.pillActive : ""}`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
