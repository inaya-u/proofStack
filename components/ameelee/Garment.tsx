type Props = {
  colour: string;
  className?: string;
};

// Placeholder for a product with no photo yet: a garment on a hanger.
export default function Garment({ colour, className }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 210"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M50 21V13a4.5 4.5 0 1 0-4.5-4.5"
        stroke="#999999"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 21L8 38 2 120l14 4 4-44-8 126h76l-8-126 4 44 14-4-6-82z"
        fill={colour}
        stroke="rgba(255,255,255,0.3)"
      />
      <path d="M50 30L56 206H70z" fill="#ffffff" opacity="0.07" />
    </svg>
  );
}
