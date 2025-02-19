import styles from "@/components/Header/Header.module.css";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Movie Listing</h1>
      </header>
    </>
  );
}
