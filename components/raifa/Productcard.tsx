import { Product } from "@/types/product";
import styles from "./Productcard.module.css";

interface ProductCardProps {
  product: Product;
}

function formatNaira(amount: number): string {
  return `₦${amount.toLocaleString("en-NG")}`;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <span className={styles.categoryBadge}>{product.categoryLabel}</span>
        {/* plain img — swap for next/image once real photos are in public/images/raifa/ */}
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className={styles.image}
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        {product.size && <p className={styles.size}>Size: {product.size}</p>}
        <p className={styles.price}>{formatNaira(product.priceNaira)}</p>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            `Hi, I'd like to order the ${product.name}`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.orderButton}
        >
          Order via WhatsApp
        </a>
      </div>
    </article>
  );
}
