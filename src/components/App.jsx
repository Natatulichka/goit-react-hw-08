// import { useDispatch, useSelector } from "react-redux";
// import ContactForm from "./ContactForm/ContactForm";
// import ContactList from "./ContactList/ContactList";
// import SearchBox from "./SearchBox/SearchBox";

// import {
//   selectError,
//   selectLoading,
// } from "../redux/contacts/contacts.selectors";
// import { fetchContacts } from "../redux/contactsOps";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import { Layout } from "./Layout";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() =>
  import("../pages/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
