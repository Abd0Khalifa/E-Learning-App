import React from "react";
import "./Home.css";
import Hero from "../../Components/Hero/Hero";
import Whyus from "../../Components/Why-us/Whyus";
import Journey from "../../Components/Journey/Journey";
import Ready from "../../Components/Ready/Ready";
import FeaturedCourses from "../../Components/FeaturedCourses/FeaturedCourses";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";

const Home = () => {
  const currentLang = useSelector((state) => state.auth.lang);

  return (
    <div
      style={{
        direction: currentLang === "ar" ? "rtl" : "ltr",
        fontFamily: currentLang === "ar" ? '"Cairo", sans-serif' : '""',
      }}
    >
      <NavBar />
      <Hero />
      <Whyus />
      <FeaturedCourses />
      <Journey />
      <Ready />
      <Footer />
    </div>
  );
};

export default Home;
