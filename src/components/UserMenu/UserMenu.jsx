import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";

import css from "./UserMenu.module.css";
import { selectAuthUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectAuthUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>

      <button
        type="button"
        className={css.button}
        onClick={() => dispatch(logOut())}
      >
        LOG OUT
      </button>
    </div>
  );
};
