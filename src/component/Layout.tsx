import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface Prop {
  children: ReactNode;
}
const Layout = ({ children }: Prop) => {
  return (
    <div>
      <Navbar setSelected={() => {}} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
