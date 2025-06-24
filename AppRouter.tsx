import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { Login } from "./public/Login/Login";
import { PrivateGuard } from "./guard/PrivateGuard";
import { PrivateRouter } from "./private/PrivateRouter";
import { RoutesWithNotFound } from "./src/components/RoutesWithNotFound/RoutesWithNotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/Login" element={<Login />} />
        <Route>
          element={<PrivateGuard />}
          <Route path="/private/*" element={<PrivateRouter />} />
        </Route>
      </RoutesWithNotFound>
    </BrowserRouter>
  );
};
