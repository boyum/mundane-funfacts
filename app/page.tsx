import { loadFunFacts } from "@/lib/funfacts";
import styles from "./page.module.css";

// Revalidate every 10 seconds (ISR)
export const revalidate = 10;

export default async function Home() {
  try {
    const funfacts = loadFunFacts();

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>
              <span>sinre</span>.fun
            </h1>
          </div>
        </header>

        <main className={styles.mainContent}>
          <p className={styles.tagline}>Share a fun fact with your friends!</p>

          <div className={styles.facts}>
            {funfacts.map((fact) => (
              <div key={fact.index} className={styles.fact}>
                <h2 className={styles.factTitle}>
                  #{fact.index}
                </h2>
                <p className={styles.factInfo}>
                  {fact.text}
                </p>
                <a
                  href={`https://twitter.com/share?text=Fun fact: "${fact.text}" From: &url=sinre.fun`}
                  target="_blank"
                  rel="noopener"
                  className={styles.factSourceLink}
                >
                  Share on Twitter
                </a>
              </div>
            ))}
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>
              Inspired by{' '}
              <a
                href="https://noel.fun"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                noel.fun
              </a>
              {' '}by Håvard Brynjulfsen
            </p>
          </div>
        </footer>
      </div>
    );
  } catch (error: unknown) {
    console.error("Error fetching fun facts:", error);

    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>No fun facts available</h1>
      </div>
    );
  }
}
