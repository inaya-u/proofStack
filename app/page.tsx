import Link from "next/link";
import styles from "./page.module.css";

interface ProjectEntry {
  slug: string;
  name: string;
  description: string;
}

// add a new entry here each time you convert another pitch
const PROJECTS: ProjectEntry[] = [
  {
    slug: "raifa",
    name: "Raifa Store",
    description: "Modesty. Luxury. You. — Dubai & Egyptian abaya storefront.",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>proofStack</h1>
      <p className={styles.intro}>
        Figma-to-code proof of work — pitch designs for local businesses,
        built out as real, functioning frontends.
      </p>

      <ul className={styles.projectList}>
        {PROJECTS.map((project) => (
          <li key={project.slug} className={styles.projectItem}>
            <Link href={`/${project.slug}`} className={styles.projectLink}>
              <h2 className={styles.projectName}>{project.name}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
