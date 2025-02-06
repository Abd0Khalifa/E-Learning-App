import React, { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <NavBar />
      <div className="bg-[#1e1e2d] min-h-screen flex items-center justify-center overflow-hidden font-inter ">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center overflow-hidden">
              <div>
                <h1
                  className={` text-[#fa329c] text-6xl font-bold mb-6 glitch ${
                    isHovered ? "hover:scale-110 hover:rotate-2" : ""
                  }`}
                  data-text="404"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  404
                </h1>
                <p className="text-white text-xl mb-8 opacity-80">
                  Oops! The page you're looking for seems to have wandered off
                  into the digital wilderness.
                </p>
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="gradient-button-sm inline-block bg-[#fa329c] text-white px-8 py-4 rounded-full hover:bg-opacity-80 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                  >
                    <i class="fa-solid fa-house"></i> Return Home
                  </Link>
                  <Link
                    to="/BrowseCourses"
                    className="outline-button-sm inline-block border-2 border-[#fa329c] text-[#fa329c] px-8 py-4 rounded-full hover:bg-[#fa329c] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center"
                  >
                    <i className="fa-solid fa-gauge"></i> Browse Courses
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="course-illustration relative">
                  <svg
                    className="w-full h-auto"
                    viewBox="0 0 500 400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="404Gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#fa329c", stopOpacity: 0.6 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#1e1e2d", stopOpacity: 0.8 }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#404Gradient)"
                      d="M150,50 Q250,150 200,250 Q150,350 250,350 Q350,350 400,250 Q450,150 350,100 Q250,50 150,50"
                    />
                    <circle
                      cx="250"
                      cy="200"
                      r="100"
                      fill="rgba(250, 50, 156, 0.1)"
                      stroke="#fa329c"
                      strokeWidth="2"
                    />
                    <text
                      x="250"
                      y="210"
                      textAnchor="middle"
                      fill="#fa329c"
                      fontSize="40"
                      fontWeight="bold"
                    >
                      Lost?
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="digital-noise"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default NotFoundPage;
