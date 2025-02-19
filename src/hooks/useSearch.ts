import { useState, useEffect } from "react";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export function useSearch<T extends Movie>(items: T[]) {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<T[]>(items);

  useEffect(() => {
    if (query.trim() === "") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) =>
          item.Title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, items]);

  const handleSearch = (query: string) => setQuery(query);

  return {
    filteredItems,
    handleSearch,
  };
}
