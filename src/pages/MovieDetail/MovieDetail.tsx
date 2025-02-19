import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "@/api/moviesApi";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/pages/MovieDetail/MovieDetail.module.css";

type Movie = {
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
};

export function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      if (!id) return;
      const data = await getMovieDetails(id);
      setMovie(data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className={styles.box}>
            <h2 className={styles.title}>{movie.title}</h2>
            <p className={styles.description}>{movie.overview}</p>
            <p className={styles.description}>
              <strong>Data de lançamento:</strong> {movie.release_date}
            </p>
            <button onClick={() => navigate(-1)} className={styles.link}>
              Go back
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
