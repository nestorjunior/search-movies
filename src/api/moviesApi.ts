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
  try {
    const response = await moviesApi.get("/movie/popular", {
      params: {
        language: "pt-BR",
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar filmes populares", error);
    return [];
  }
};
