import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import css from "../ContactForm/ContactForm.module.css";
import { selectAuthError } from "../../redux/auth/selectors";
import { login } from "../../redux/auth/operations";

const loginValidationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "The password must be at least 8 characters long")
    .max(30, "Password must be less than 30 characters"),

  email: Yup.string()
    .email("Invalid e-mail address")
    .required("Email address is required"),
});

function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);
  const INITIAL_VALUES = {
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={loginValidationSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <div className={css.fieldContainer}>
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
              Sign in
            </button>
          </div>
          <a href="/register">Don&apos;t have an account? Register</a>
          {error && (
            <p className={css.error}>Oops, some error occured... {error}</p>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
