import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../HomePage/HomePage.module.css";
function LoginPage() {
  return (
    <div className={css.container}>
      <LoginForm />;
    </div>
  );
}

export default LoginPage;
