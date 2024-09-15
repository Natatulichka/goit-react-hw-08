import { Suspense } from "react";
import Loader from "./Loader/Loader";

import { AppBar } from "./AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <AppBar />

      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
