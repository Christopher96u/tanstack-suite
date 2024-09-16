import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./config/globals.css";
import { Providers } from "@/components/Providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);

//https://github.com/carlosbasile19/lazyconsultants/blob/master/lib/seo.tsx
//https://github.com/liildev/react-helmet-async/blob/main/src/components/MetaInfo.tsx
//https://github.com/TanStack/tanstack.com/blob/main/app/utils/seo.ts
