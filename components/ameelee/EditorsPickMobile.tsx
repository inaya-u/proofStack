import { whatsappLink } from "@/data/raifa/ameelee/contact";
import { COLOURS } from "@/data/raifa/ameelee/products";
import ProductImage from "./ProductImage";
import styles from "./EditorsPickMobile.module.css";

// this week's pick. Change these to swap the piece.
const PICK = {
  name: "ZAINAB",
  label: "JALABIYA · EDITOR’S PICK",
  line: "Pure Onyx · Hand-finished sleeves",
  price: 96000,
  image: "/images/ameelee/products/zainab.jpg",
};

const naira = new Intl.NumberFormat("en-NG");

export default function EditorsPickMobile() {
  const tint = COLOURS.find((c) => c.key === "onyx")?.tint ?? "#262626";

  return (
    <section className={styles.wrap} aria-labelledby="m-pick-title">
      <h2 id="m-pick-title" className={styles.title}>
        EDITOR’S
        <span className={styles.subtitle}>PICK OF THE WEEK</span>
      </h2>

      <div className={styles.card}>
        <div className={styles.photo}>
          <ProductImage
            src={PICK.image}
            alt={`${PICK.name}, ${PICK.line}`}
            tint={tint}
            sizes="124px"
            imgClassName={styles.img}
            garmentClassName={styles.garment}
          />
        </div>
        <p className={styles.price}>₦{naira.format(PICK.price)}</p>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{PICK.label}</p>
          <p className={styles.name}>{PICK.name}</p>
          <p className={styles.line}>{PICK.line}</p>
        </div>

        <a
          className={styles.cta}
          href={whatsappLink(
            `Hi Ameelee Abaya, I'd like to order the ${PICK.name} jalabiya.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>ORDER NOW</span>
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
