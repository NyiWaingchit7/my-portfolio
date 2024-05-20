import React from "react";
import Hero from "./Hero";
import Skill from "./Skill";
import Objective from "./Objective";

const Home = () => {
  return (
    <>
      <Hero setSelected={() => {}} />
      <Skill setSelected={() => {}} />
      <Objective setSelected={() => {}} />
    </>
  );
};

export default Home;
