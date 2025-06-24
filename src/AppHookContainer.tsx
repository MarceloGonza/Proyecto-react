import "./App.css";
import App from "./App";
import { AppRouter } from "../AppRouter";
import { GlobalProvider } from "./context/global.provider";
import ErrorBoundary from "./../ErrorBoundary";
import { ModalProvider } from "./components/Modal/Context/ModalContext";

function AppHookContainer() {
  return (
    <ErrorBoundary>
      <GlobalProvider>
        <ModalProvider>
          <App>
            <AppRouter />
          </App>
        </ModalProvider>
      </GlobalProvider>
    </ErrorBoundary>
  );
}

export default AppHookContainer;
