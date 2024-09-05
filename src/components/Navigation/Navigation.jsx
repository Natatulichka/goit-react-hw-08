import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

function Navigation() {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/register"
          >
            RegistrationForm
          </NavLink>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/login"
          >
            LoginForm
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
