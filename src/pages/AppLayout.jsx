import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CallToAction from "@/sections/CallToAction";
import React from "react";
import { Outlet, useLocation } from "react-router";

function AppLayout() {
  const location = useLocation();

  const hideCta = location.pathname.startsWith("/recipes");
  return (
    <div>
      <Header />

      <main>
        <Outlet />
        {!hideCta && <CallToAction />}
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
