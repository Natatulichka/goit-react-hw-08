import RegistrationForm from "../../components/RegistrationForm/registrationForm";
import css from "../HomePage/HomePage.module.css";
function RegistrationPage() {
  return (
    <div className={css.container}>
      <RegistrationForm />
    </div>
  );
}

export default RegistrationPage;
