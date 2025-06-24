import { Route, Navigate } from "react-router-dom";
import { Dashboard } from "./Dashboard";
import { RoutesWithNotFound } from "../src/components/RoutesWithNotFound/RoutesWithNotFound";

export const PrivateRouter = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<Dashboard />} />
      <Route path="/user" element={<Dashboard />} />
    </RoutesWithNotFound>
  );
};
