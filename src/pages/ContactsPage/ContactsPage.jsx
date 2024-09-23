import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import css from "./ContactsPage.module.css";

function ContactsPage() {
  return (
    <div className={css.contact}>
      <div>
        <ContactForm />
        <SearchBox />
      </div>
      <div className={css.list}>
        <ContactList />
      </div>
    </div>
  );
}

export default ContactsPage;
