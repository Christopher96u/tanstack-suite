import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { queryClient } from "./config/queryClient.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import "./config/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* Other Providers needs to wrap App component... */}
      <App />
    </QueryClientProvider>
  </StrictMode>,
);
