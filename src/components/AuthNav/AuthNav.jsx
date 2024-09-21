import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css";
import clsx from "clsx";

export const AuthNav = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.nav}>
      <NavLink className={buildLinkClass} to="/register">
        REGISTER
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        LOG IN
      </NavLink>
    </div>
  );
};
