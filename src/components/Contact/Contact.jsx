import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { FaUser, FaPhone, FaUserMinus } from "react-icons/fa";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () =>
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact deleted successfully🎉");
      });
  return (
    <li className={css.contactItem}>
      <div className={css.contactDetails}>
        <div className={css.fieldContainer}>
          <FaUser size="16px" />
          <span className={css.contactName}>{name}</span>
        </div>
        <div className={css.fieldContainer}>
          <FaPhone size="16px" />
          <span className={css.contactNumber}>{number}</span>
        </div>
      </div>
      <button className={css.deleteButton} onClick={handleDelete}>
        Delete <FaUserMinus />
      </button>
    </li>
  );
}
export default Contact;
