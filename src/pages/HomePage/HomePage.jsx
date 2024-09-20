import { FcContacts } from "react-icons/fc";
import css from "./HomePage.module.css";
import {
  selectAuthIsLoggedIn,
  selectAuthUser,
} from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";

function HomePage() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const user = useSelector(selectAuthUser);
  const contacts = useSelector(selectContacts);
  return isLoggedIn ? (
    <div className={css.homepage}>
      <h1>Welcome back, {user.name}!</h1>
      <p>
        You have <b>{contacts.length}</b> contacts in your address book.
      </p>
      <FcContacts className={css.icon} />
    </div>
  ) : (
    <div className={css.homepage}>
      <h1>Welcome to Your Contacts App!</h1>
      <FcContacts className={css.icon} />
      <p>Manage all your contacts in one place. Easy and secure.</p>
      <div className={css.features}>
        <h2>Features</h2>
        <ul>
          <li>Add, edit, and delete contacts.</li>
          <li>Secure and fast storage.</li>
          <li>Accessible from anywhere.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
