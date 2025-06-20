import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ModalProvider } from "./components/Modal/Context/ModalContext.tsx";
import ErrorBoundary from "./../ErrorBoundary";
import { initAxios } from "./../services/axios.service";
initAxios();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <ModalProvider>
        <App />
      </ModalProvider>
    </ErrorBoundary>
  </StrictMode>
);
