import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./config/globals.css";
import { Providers } from "@/components/Providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
