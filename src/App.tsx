import React, { ReactNode } from "react";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
