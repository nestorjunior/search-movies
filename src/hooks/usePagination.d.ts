export declare function usePagination<T>(items: T[], itemsPerPage: number): {
    currentItems: T[];
    currentPage: number;
    paginate: (pageNumber: number) => void;
    nextPage: () => void;
    prevPage: () => void;
};
