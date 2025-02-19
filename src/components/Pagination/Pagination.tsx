import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/components/Pagination/Pagination.module.css";

interface PaginationProps {
  moviesPerPage: number;
  totalMovies: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
  nextPage: () => void;
  prevPage: () => void;
}

export function Pagination({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
  nextPage,
  prevPage,
}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav className={styles.pagination} aria-labelledby="pagination">
        <h2 className="sr-only">Pagination</h2>
        <ul>
          <li>
            <button onClick={prevPage} disabled={currentPage === 1}>
              <ChevronLeft className={styles.icon} size={40} />
            </button>
          </li>

          {pageNumbers.map((number) => (
            <li
              key={number}
              className={currentPage === number ? styles.active : styles.link}
            >
              <button onClick={() => paginate(number)}>{number}</button>
            </li>
          ))}

          <li>
            <button
              onClick={nextPage}
              disabled={currentPage === pageNumbers.length}
            >
              <ChevronRight className={styles.icon} size={40} />
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
