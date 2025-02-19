import { Header } from "@/components/Header/Header";
import { Search } from "@/components/Search/Search";
import { Card } from "@/components/Card/Card";
import { Pagination } from "@/components/Pagination/Pagination";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/pages/Home/Home.module.css";
import { useState, useEffect } from "react";
import { useSearch } from "@/hooks/useSearch";
import { usePagination } from "@/hooks/usePagination";
import { getMovies } from "@/api/moviesApi";

type Movie = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

export function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const moviesPerPage = 4;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies();
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error("API response is not an array:", data);
          setMovies([]);
        }
      } catch (error) {
        console.error("Error loading movies:", error);
        setMovies([]);
      }
    };
    fetchMovies();
  }, []);

  const { filteredItems, handleSearch } = useSearch(
    movies.map((movie) => ({
      Title: movie.title,
      Year: movie.release_date.split("-")[0],
      imdbID: movie.id.toString(),
      Type: "movie",
      Poster: movie.poster_path,
    }))
  );

  const { currentItems, currentPage, paginate, nextPage, prevPage } =
    usePagination(filteredItems, moviesPerPage);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.sectionSearch}>
          <Search onSearch={handleSearch} />
        </section>

        <section className={styles.sectionCards}>
          {filteredItems.length > 0 ? (
            currentItems.map((data) => (
              <Card
                key={data.imdbID}
                id={parseInt(data.imdbID)}
                poster_path={data.Poster}
                title={data.Title}
                release_date={data.Year}
                linkText="Learn more"
              />
            ))
          ) : (
            <p>loading movies...</p>
          )}
        </section>

        <section className={styles.sectionPagination}>
          {filteredItems.length > moviesPerPage && (
            <Pagination
              moviesPerPage={moviesPerPage}
              totalMovies={filteredItems.length}
              paginate={paginate}
              currentPage={currentPage}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
