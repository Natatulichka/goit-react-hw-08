import clsx from "clsx";
import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
function Navigation() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <>
      <header>
        <nav className={css.nav}>
          <NavLink className={buildLinkClass} to="/">
            HOME
          </NavLink>
          {isLoggedIn && (
            <NavLink className={buildLinkClass} to="/contacts">
              CONTACTS
            </NavLink>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navigation;
