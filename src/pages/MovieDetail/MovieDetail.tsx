import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import styles from "@/pages/MovieDetail/MovieDetail.module.css";

export function MovieDetail() {
  const { title } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <section className={styles.cardDetails}>
        <button onClick={() => navigate(-1)} className={styles.button}>
          To go back
        </button>
        <h2>{title}</h2>
      </section>
      <Footer />
    </>
  );
}
