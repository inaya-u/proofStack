export type ColourKey =
  | "onyx"
  | "mauve"
  | "navy"
  | "beige"
  | "forest"
  | "rose"
  | "taupe";
export type Category = "abaya" | "jalabiya";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  isNew?: boolean;
  description: string;
  price: number; // naira
  sizes: number[];
  colour: ColourKey;
  image?: string; // /public path. Leave out (or let it 404) to show the hanger placeholder
};

// One door per colour, in this order. bg = door colour, ink = text on it,
// tint = garment colour for the hanger placeholder.
export const COLOURS: {
  key: ColourKey;
  name: string;
  bg: string;
  ink: string;
  tint: string;
}[] = [
  { key: "onyx", name: "ONYX", bg: "#0a0a0a", ink: "#ffffff", tint: "#262626" },
  {
    key: "mauve",
    name: "MAUVE",
    bg: "#6b3fa6",
    ink: "#ffffff",
    tint: "#d2b8ff",
  },
  { key: "navy", name: "NAVY", bg: "#1b3a5c", ink: "#ffffff", tint: "#8fb3de" },
  {
    key: "beige",
    name: "BEIGE",
    bg: "#c6a27c",
    ink: "#1a1208",
    tint: "#5b4630",
  },
  {
    key: "forest",
    name: "FOREST",
    bg: "#2d6a4f",
    ink: "#ffffff",
    tint: "#a4e6c3",
  },
  { key: "rose", name: "ROSE", bg: "#b84a5f", ink: "#ffffff", tint: "#ffc2cf" },
  {
    key: "taupe",
    name: "TAUPE",
    bg: "#7a6a5c",
    ink: "#ffffff",
    tint: "#e5d6c8",
  },
];

export const TABS = [
  { id: "all", label: "All pieces" },
  { id: "abaya", label: "Dubai Abaya" },
  { id: "jalabiya", label: "Jalabiya" },
  { id: "new", label: "New in" },
] as const;

// The 6 pieces from the mobile design. Add the rest of the 48 here.
// A door with no pieces shows as a dim, closed strip until you add some.
export const PRODUCTS: Product[] = [
  {
    slug: "al-nour",
    name: "Al Nour",
    category: "abaya",
    isNew: true,
    description: "Light Mauve · Embroidered",
    price: 85000,
    sizes: [54, 56, 58, 60, 62],
    colour: "mauve",
    image: "/images/ameelee/products/al-nour.jpg",
  },
  {
    slug: "safa",
    name: "Safa",
    category: "jalabiya",
    description: "Desert Taupe · Crystal Trim",
    price: 72000,
    sizes: [56, 58, 60, 62, 64],
    colour: "taupe",
    image: "/images/ameelee/products/safa.jpg",
  },
  {
    slug: "farah",
    name: "Farah",
    category: "abaya",
    isNew: true,
    description: "Dusty Rose · Silk Chiffon",
    price: 88000,
    sizes: [54, 56, 58, 60, 62],
    colour: "rose",
    image: "/images/ameelee/products/farah.jpg",
  },
  {
    slug: "zainab",
    name: "Zainab",
    category: "jalabiya",
    description: "Pure Onyx · Hand-finished Sleeves",
    price: 92000,
    sizes: [54, 56, 58, 60, 62],
    colour: "onyx",
    image: "/images/ameelee/products/zainab.jpg",
  },
  {
    slug: "nadia",
    name: "Nadia",
    category: "jalabiya",
    description: "Warm Beige · Satin Trim",
    price: 82000,
    sizes: [56, 58, 60, 62, 64],
    colour: "beige",
    image: "/images/ameelee/products/nadia.jpg",
  },
  {
    slug: "lila",
    name: "Lila",
    category: "abaya",
    isNew: true,
    description: "Deep Rose · Line Patterns",
    price: 98000,
    sizes: [54, 56, 58, 60, 62],
    colour: "rose",
    image: "/images/ameelee/products/lila.jpg",
  },
];
