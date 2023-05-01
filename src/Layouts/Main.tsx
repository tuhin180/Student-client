import React from "react";
import Navbar from "../component/Shared/Navbar";
import Footer from "../component/Shared/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
