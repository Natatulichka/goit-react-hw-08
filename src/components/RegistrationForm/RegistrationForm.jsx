import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { selectAuthError } from "../../redux/auth/selectors";
import { register } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "../ContactForm/ContactForm.module.css";

const RegisterValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required")
    .min(2, "Username must be at least 2 characters long")
    .max(30, "Username must be less than 30 characters"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "The password must be at least 8 characters long")
    .max(30, "Password must be less than 30 characters"),

  email: Yup.string()
    .email("Invalid e-mail address")
    .required("Email address is required"),
});

function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values) => {
    dispatch(register(values));
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <div className={css.fieldContainer}>
            <label className={css.label}>
              <span>Username:</span>
            </label>
            <Field
              type="text"
              name="name"
              placeholder="Enter username"
              className={css.field}
            />
            <ErrorMessage className={css.error} name="name" component="span" />

            <label className={css.label}>
              <span>Email:</span>
            </label>
            <Field
              type="text"
              name="email"
              placeholder="example@gmail.com"
              className={css.field}
            />
            <ErrorMessage className={css.error} name="email" component="span" />

            <label className={css.label}>
              <span>Password:</span>
            </label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className={css.field}
            />
            <ErrorMessage
              className={css.error}
              name="password"
              component="span"
            />
          </div>
          <div className={css.buttonContainer}>
            <button disabled={Object.keys(errors).length > 0} type="submit">
              Sign up
            </button>
          </div>
          <a href="/login">Already have an account? Login</a>
          {error && (
            <p className={css.error}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default RegistrationForm;
