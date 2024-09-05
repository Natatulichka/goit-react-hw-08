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

const HomePage = lazy(() => import("../pages/HomePage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const Navigation = lazy(() => import("./Navigation/Navigation"));

function App() {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <div>
      <Navigation />
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <footer></footer>
    </div>
  );
}
// <div>
//   <h1>Phonebook</h1>
//   <ContactForm />

//   <SearchBox />
//   <div>
//     {loading && !error && <Loader />}
//     {error !== null && (
//       <p style={{ color: "red", textAlign: "center" }}>{error}</p>
//     )}
//   </div>
//   <ContactList />
// </div>

export default App;
