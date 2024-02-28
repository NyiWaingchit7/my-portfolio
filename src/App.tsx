import React, { ReactNode } from "react";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter } from "react-router-dom";
import Objective from "./component/Objective";
import Experience from "./component/Experience";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Objective />
        <Experience />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
