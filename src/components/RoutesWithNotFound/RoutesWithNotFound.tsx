import { ReactNode } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<Navigate to="/404" />} />
      <Route path="/404" element={<h1>Page no found</h1>} />
    </Routes>
  );
};
