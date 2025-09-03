import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/route.jsx";
import { DarkContextProvider } from "./context/theme/DarkContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkContextProvider>
      <RouterProvider router={router} />
    </DarkContextProvider>
  </StrictMode>
);
