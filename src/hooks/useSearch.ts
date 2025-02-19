import { useState } from "react";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

export function useSearch<T extends Movie>(items: T[]) {
  const [query, setQuery] = useState("");

  const filteredItems = items.filter((item) =>
    item.Title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (query: string) => setQuery(query);

  return {
    filteredItems,
    handleSearch,
  };
}
