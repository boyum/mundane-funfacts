import {
  ThemePickerButtonWrapper,
  ThemePickerDropdownWrapper,
} from "@/components/ThemePickerWrapper";
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
            <div className={styles.headerWrapper}>
              <h1 className={styles.title}>
                <span>sinre</span>.fun
              </h1>
              <ThemePickerButtonWrapper />
            </div>
          </div>
          <ThemePickerDropdownWrapper />
        </header>

        <main className={styles.mainContent}>
          <p className={styles.tagline}>I'm tired of having to share fun facts at social events. Are you, too? Use the ones below and embrace passive aggressiveness</p>

          <div className={styles.facts}>
            {funfacts.toReversed().map((fact) => (
              <div key={fact.index} className={styles.fact}>
                <h2 className={styles.factTitle}>#{fact.index}</h2>
                <p className={styles.factInfo}>{fact.text}</p>
              </div>
            ))}
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>
              Inspired by{" "}
              <a
                href="https://noel.fun"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                noel.fun
              </a>{" "}
              by Håvard Brynjulfsen
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
