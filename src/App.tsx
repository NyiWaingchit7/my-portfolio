import React, { ReactNode, useState } from "react";

import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";
import { BrowserRouter } from "react-router-dom";
import Objective from "./component/Objective";
import Skill from "./component/Skill";
import Project from "./component/Project";

function App() {
  const [selected, setSelected] = useState("Home");
  return (
    <>
      <BrowserRouter>
        <Navbar selected={selected} setSelected={setSelected} />
        <Home selected={selected} setSelected={setSelected} />
        <Skill selected={selected} setSelected={setSelected} />
        <Objective selected={selected} setSelected={setSelected} />
        <Project selected={selected} setSelected={setSelected} />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
