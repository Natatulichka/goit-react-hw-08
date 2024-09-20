import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} replace />;
};
