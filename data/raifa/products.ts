import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "maroon-dubai-abaya",
    name: "Maroon Dubai Abaya",
    category: "abaya",
    categoryLabel: "Abaya · Dubai",
    size: "58",
    priceNaira: 145000,
    imageSrc: "/images/raifa/maroon-dubai-abaya.jpg",
    imageAlt: "Maroon Dubai Abaya on model",
    isNew: true,
  },
  {
    id: "ivory-egyptian-abaya",
    name: "Ivory Egyptian Abaya",
    category: "abaya",
    categoryLabel: "Abaya · Egypt",
    size: "58",
    priceNaira: 145000,
    imageSrc: "/images/raifa/ivory-egyptian-abaya.jpg",
    imageAlt: "Ivory Egyptian Abaya on model",
    isNew: true,
  },
  {
    id: "chrisbella-tote-burgundy",
    name: "Chrisbella Tote - Burgundy",
    category: "bag",
    categoryLabel: "Bag",
    priceNaira: 45000,
    imageSrc: "/images/raifa/chrisbella-tote-burgundy.jpg",
    imageAlt: "Burgundy woven tote bag",
  },
  {
    id: "atoor",
    name: "Atoor",
    category: "perfume",
    categoryLabel: "Perfume · Arabic",
    size: "50ml",
    priceNaira: 98000,
    imageSrc: "/images/raifa/atoor.jpg",
    imageAlt: "Atoor perfume box",
  },
];

export const categories: {
  label: string;
  value: "all" | Product["category"];
}[] = [
  { label: "All", value: "all" },
  { label: "Abayas", value: "abaya" },
  { label: "Veils", value: "veil" },
  { label: "Bags", value: "bag" },
  { label: "Perfumes", value: "perfume" },
];
