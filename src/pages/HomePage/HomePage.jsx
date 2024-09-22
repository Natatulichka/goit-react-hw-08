import css from "./HomePage.module.css";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { FaAddressBook } from "react-icons/fa";

function HomePage() {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  const contacts = useSelector(selectContacts);
  return isLoggedIn ? (
    <div className={css.container}>
      <h1>Contacts book</h1>
      <p>
        You have <b>{contacts.length}</b> contacts in your address book.
      </p>
      <FaAddressBook className={css.icon} />
    </div>
  ) : (
    <div className={css.container}>
      <h1>Welcome to Your Contacts App!</h1>
      <FaAddressBook className={css.icon} />
      <p>Manage all your contacts in one place. Easy and secure.</p>
      <div className={css.features}>
        <h2>Features</h2>
        <ul>
          <li>Add and delete contacts.</li>
          <li>Secure and fast storage.</li>
          <li>Accessible from anywhere.</li>
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
