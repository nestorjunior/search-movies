import styles from "@/components/Footer/Footer.module.css";

export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <p>Footer, {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}
