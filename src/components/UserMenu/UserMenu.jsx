import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";

import { logout } from "../../redux/auth/operations";
import { selectAuthUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>

      <button type="button" className={css.button} onClick={onLogout}>
        LOG OUT
      </button>
    </div>
  );
};
