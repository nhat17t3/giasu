import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const Layout = (props) => {
  return (
    <>
      <div className="wrapper-content-block">
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
