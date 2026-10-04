export const SIZES = [54, 56, 58, 60, 62, 64] as const;

// One colour world per size: c1 = sun/accent, c2 = deep tone, bg = page + moon
export const PALETTE = [
  { c1: "#ff3d6e", c2: "#7a0030", bg: "#2a0614" }, // 54 crimson
  { c1: "#2cf5b0", c2: "#00614a", bg: "#03231c" }, // 56 emerald
  { c1: "#8a7bff", c2: "#1b1470", bg: "#0a0830" }, // 58 indigo
  { c1: "#ffc83d", c2: "#b34a00", bg: "#2a1600" }, // 60 saffron
  { c1: "#e14bff", c2: "#5a0a7a", bg: "#1d0529" }, // 62 magenta-violet
  { c1: "#5ee7ff", c2: "#064a7a", bg: "#03182a" }, // 64 ice
] as const;

export const DEFAULT_SIZE_INDEX = 2;
