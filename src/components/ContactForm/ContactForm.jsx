import { useDispatch } from "react-redux";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { FaUserPlus } from "react-icons/fa";

import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be less than 50 characters")
    .required("This field is required"),
  number: Yup.string()
    .matches(
      phoneRegExp,
      "The phone number must match the format 'xxx-xxx-xx-xx'"
    )
    .required("This field is required"),
});

function ContactForm() {
  const initialValues = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        toast.success("Contact added successfully🎉");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name:</span>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </label>

          <label className={css.label}>
            <span>Number:</span>
            <Field type="text" name="number" />
            <ErrorMessage name="number" component="div" className={css.error} />
          </label>
          <button type="submit" disabled={isSubmitting}>
            Add Contact <FaUserPlus />
          </button>
        </Form>
      )}
    </Formik>
  );
}
export default ContactForm;
