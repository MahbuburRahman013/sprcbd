import React from "react";
import Nav from "./../../components/Nav";
import Footer from "./../../components/Footer";

function layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default layout;
