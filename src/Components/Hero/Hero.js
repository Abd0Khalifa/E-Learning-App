import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  const statsRef = useRef([]);
  const controls = useAnimation();

  useEffect(() => {
    const animateValue = (element, end, duration) => {
      let start = 0;
      const step = (timestamp) => {
        const progress = Math.min(timestamp / duration, 1);
        element.textContent = Math.floor(progress * end).toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;
            const endValue = parseInt(element.dataset.value);
            animateValue(element, endValue, 2000);
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.5 }
    );

    statsRef.current.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="hero-section relative overflow-hidden ">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="floating-icons flex justify-center gap-4 text-3xl text-main-color">
            <i className="fas fa-graduation-cap"></i>
            <i className="fas fa-book-open"></i>
            <i className="fas fa-laptop-code"></i>
          </div>
          <span className="px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-medium inline-block mt-6 mb-6">
            <i className="fas fa-star mr-2"></i>
            Rated #1 Learning Platform
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight">
            Learn <span className="gradient-text">Anything</span>,<br />
            Anytime, <span className="gradient-text">Anywhere</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed mb-12">
            Unlock your potential with our interactive courses and expert
            instructors.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <Link to={"/browseCourses"} className="gradient-button w-full md:w-auto">
              <i className="fas fa-play"></i>
              Start Learning
            </Link>
            <button className="outline-button w-full md:w-auto">
              <i className="fas fa-info-circle"></i>
              Learn More
            </button>
          </div>
          <div className="stats-bar mt-16 p-8 flex flex-wrap justify-center gap-8 mx-4">
            {[
              { label: "Active Courses", value: 500 },
              { label: "Happy Students", value: 50000 },
              { label: "Expert Instructors", value: 100 },
            ].map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div
                  ref={(el) => (statsRef.current[index] = el)}
                  data-value={stat.value}
                  className="statistics-counter gradient-text text-4xl font-bold"
                >
                  0
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
