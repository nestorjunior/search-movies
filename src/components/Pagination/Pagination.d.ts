interface PaginationProps {
    moviesPerPage: number;
    totalMovies: number;
    paginate: (pageNumber: number) => void;
    currentPage: number;
    nextPage: () => void;
    prevPage: () => void;
}
export declare function Pagination({ moviesPerPage, totalMovies, paginate, currentPage, nextPage, prevPage, }: PaginationProps): import("react/jsx-runtime").JSX.Element;
export {};
