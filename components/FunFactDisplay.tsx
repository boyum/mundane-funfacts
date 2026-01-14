import styles from './FunFactDisplay.module.css';

interface FunFactDisplayProps {
  id: number;
  text: string;
}

export default function FunFactDisplay({ id, text }: FunFactDisplayProps) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Mundane Fun Fact</h1>
        <div className={styles.funfactWrapper}>
          <p className={styles.funfactId}>#{id}</p>
          <p className={styles.funfact}>{text}</p>
        </div>
      </div>
      <footer className={styles.footer}>
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
      </footer>
    </div>
  );
}
