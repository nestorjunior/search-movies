import axios from "axios";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;
const BASE_URL = import.meta.env.VITE_TMDB_API_URL;

export const moviesApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
    "Content-Type": "application/json",
  },
});

export const getMovies = async () => {
  const allMovies = [];
  const totalPages = 5;

  try {
    for (let page = 1; page <= totalPages; page++) {
      const response = await moviesApi.get("/movie/popular", {
        params: {
          language: "pt-BR",
          page: page,
          include_adult: false,
        },
      });

      allMovies.push(...response.data.results);
    }

    return allMovies;
  } catch (error) {
    console.error("Error search movies", error);
    return [];
  }
};
