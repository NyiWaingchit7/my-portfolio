import { useState } from "react";

import Home from "./component/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Project from "./component/Project";
import Layout from "./component/Layout";

function App() {
  const [selected, setSelected] = useState("Home");
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/projects" Component={Project} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
