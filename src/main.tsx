import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./config/globals.css";
import { Providers } from "./components/Providers/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
