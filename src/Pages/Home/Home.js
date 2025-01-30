import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Whyus from "../../Components/Why-us/Whyus";
import Journey from "../../Components/Journey/Journey";
import Ready from "../../Components/Ready/Ready";
import FeaturedCourses from "../../Components/FeaturedCourses/FeaturedCourses";

const Home = () => {
  return (
    <>
      <Hero />
      <Whyus />
      <FeaturedCourses />
      <Journey />
      <Ready />
    </>
  );
};

export default Home;
