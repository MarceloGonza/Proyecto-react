import { ReactNode } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./public/Login/Login";
import { Dashboard } from "./private/Dashboard";
import { PrivateGuard } from "./guard/PrivateGuard";

interface Props {
  children: ReactNode;
}

export const AppRouter = ({ children }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/Login" element={<Login />} />
        <Route>
          element={<PrivateGuard />}
          <Route path="/private" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
