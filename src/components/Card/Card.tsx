import { Link } from "react-router-dom";
import styles from "@/components/Card/Card.module.css";

interface CardProps {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  linkText: string;
}

export function Card({
  id,
  title,
  release_date,
  poster_path,
  linkText,
}: CardProps) {
  return (
    <div className={styles.card} key={id}>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w200${poster_path}`
            : "https://via.placeholder.com/200x300"
        }
        alt={title}
        className={styles.image}
      />
      <div className={styles.box}>
        <h3 className={styles.title}>{title}</h3>
        <span className={styles.description}>
          {release_date ? `Year: ${release_date.split("-")[0]}` : "Year: N/A"}
        </span>
        <Link to={`/movie/${id}`} className={styles.link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}
