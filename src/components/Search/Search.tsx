import styles from "@/components/Search/Search.module.css";

interface SearchProps {
  onSearch: (query: string) => void;
}

export function Search({ onSearch }: SearchProps) {
  return (
    <>
      <input
        type="search"
        className={styles.search}
        placeholder="Search film..."
        aria-label="Search for films"
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}
