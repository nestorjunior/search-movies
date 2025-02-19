type Movie = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};
export declare function useSearch<T extends Movie>(items: T[]): {
    filteredItems: T[];
    handleSearch: (query: string) => void;
};
export {};
