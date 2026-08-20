import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import useReinitLegacyScripts from "../utils/useReinitLegacyScripts.js";

export default function Layout() {
  const location = useLocation();
  useReinitLegacyScripts();

  // The Login/Register page is a full-screen standalone layout
  // (Layout = null in the original Razor view), so skip header/footer there.
  const isStandalone = location.pathname === "/login";

  if (isStandalone) {
    return <Outlet />;
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
