/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminContext from "../contexts/AdminContext";

function AdminRoute({ children }) {
  const { isAdmin } = useContext(AdminContext);
  console.warn(isAdmin);

  return isAdmin === 1 ? children : <Navigate to="/profil" />;
}

export default AdminRoute;
