import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { selectAuthIsLoggedIn } from "../../redux/auth/selectors.js";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isLoggedIn]);

  return (
    (<p>ContactList </p>),
    (
      <ul className={css.contactList}>
        {contacts?.length === 0 && <li>Contacts list is empty</li>}
        {contacts.map((item) => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.number}
          />
        ))}
      </ul>
    )
  );
}
export default ContactList;
