import React from "react";
import "./Whyus.css";

const Whyus = () => {
  return (
    <section id="features" className="py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-medium inline-block mb-4">
            <i className="fas fa-star mr-2"></i>
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Learning Made Simple</span>
          </h2>
          <p className="text-gray-400">
            Discover why thousands of students choose SkillStack for their learning
            journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="feature-card group">
            <lord-icon
              src="https://cdn.lordicon.com/qhviklyi.json"
              trigger="hover"
              colors="primary:#fa329c"
              style={{ width: "84px", height: "84px" }}
            ></lord-icon>
            <h3 className="text-xl font-bold mb-4 group-hover:text-main-color transition-colors">
              Learn at Your Pace
            </h3>
            <p className="text-gray-400">
              Access course content anytime, anywhere. Learn at your own
              comfortable pace with lifetime access.
            </p>
          </div>

          <div className="feature-card group">
            <lord-icon
              src="https://cdn.lordicon.com/soseozvi.json"
              trigger="hover"
              colors="primary:#fa329c"
              style={{ width: "84px", height: "84px" }}
            ></lord-icon>
            <h3 className="text-xl font-bold mb-4 group-hover:text-main-color transition-colors">
              Expert Instructors
            </h3>
            <p className="text-gray-400">
              Learn from industry professionals with years of real-world
              experience and proven expertise.
            </p>
          </div>

          <div className="feature-card group">
            <lord-icon
              src="https://cdn.lordicon.com/xhbsnkyp.json"
              trigger="hover"
              colors="primary:#fa329c"
              style={{ width: "84px", height: "84px" }}
            ></lord-icon>
            <h3 className="text-xl font-bold mb-4 group-hover:text-main-color transition-colors">
              Certification
            </h3>
            <p className="text-gray-400">
              Earn industry-recognized certificates upon completion to boost
              your career prospects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
