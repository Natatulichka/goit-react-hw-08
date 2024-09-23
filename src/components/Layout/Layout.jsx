import { Suspense } from "react";
import Loader from "../Loader/Loader";
import css from "./Layout.module.css";
import { AppBar } from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <div className={css.section}>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>{children}</Suspense>
        </div>
      </div>
    </>
  );
};
