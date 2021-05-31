import React from "react";
import { ToastContainer } from "react-toastify";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props) => {
  return (
    <>
      <div className="wrapper-content-block">
        {/* <ToastContainer /> */}
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
