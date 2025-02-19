import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import "@/styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
