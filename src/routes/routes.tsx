import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home/Home";
import { MovieDetail } from "@/pages/MovieDetail/MovieDetail";

export const router = createBrowserRouter([
  {
    path: "/search-movies",
    element: <Home />,
  },
  {
    path: "/movie/:id/:title",
    element: <MovieDetail />,
  },
]);
