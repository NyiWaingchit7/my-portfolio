import React, { ReactNode } from "react";
import logo from "./logo.svg";

import { Box, Button, Typography, styled } from "@mui/material";
import img from "./pic/383784630_1052459922592359_848932231236809971_n.jpg";
import Objective from "./component/Objective";
import { obj } from "./file/object";
import Experience from "./component/Experience";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
