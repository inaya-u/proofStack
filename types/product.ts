export type ProductCategory = "abaya" | "bag" | "veil" | "perfume";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string; // e.g. "Abaya · Dubai"
  size?: string;
  priceNaira: number;
  imageSrc: string;
  imageAlt: string;
  isNew?: boolean;
}
