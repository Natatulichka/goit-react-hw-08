import { Suspense } from "react";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import { AppBar } from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div className={css.section}>
      <AppBar />

      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
