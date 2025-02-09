import React, { useEffect, useState } from "react";
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
  const [fontFamily, setFontFamily] = useState(
    currentLang === "ar" ? '"Cairo", sans-serif' : '"Inter", sans-serif'
  );

  useEffect(() => {
    setFontFamily(
      currentLang === "ar" ? '"Cairo", sans-serif' : '"Inter", sans-serif'
    );
  }, [currentLang]);

  return (
    <div
      style={{
        direction: currentLang === "ar" ? "rtl" : "ltr",
        fontFamily: fontFamily,
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
