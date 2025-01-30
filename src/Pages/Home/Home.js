import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Whyus from "../../Components/Why-us/Whyus";
import Journey from "../../Components/Journey/Journey";
import Ready from "../../Components/Ready/Ready";

const Home = () => {
  return (
    <>
      <Hero />
      <Whyus />
      <Journey />
      <Ready />
    </>
  );
};

export default Home;
