import React from "react";
import "./CourseCard.css";
import { Link } from "react-router-dom";

const CourseCard = () => {
  return (
    <div className="course-card group" style={{ transform: "translateY(0px)" }}>
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-video bg-gradient-to-br from-main-color/20 to-purple-500/20 flex items-center justify-center p-8">
          <lord-icon
            src="https://cdn.lordicon.com/qtqvorle.json"
            trigger="hover"
            colors="primary:#fa329c"
            style={{ width: "120px", height: "120px" }}
          ></lord-icon>
        </div>
      </div>
      <div className="p-6 bg-card-dark rounded-xl mt-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 rounded bg-main-color/10 text-main-color text-xs">
            Development
          </span>
          <span className="text-gray-400 text-sm">• 12 weeks</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-main-color transition-colors">
          Web Development Masterclass
        </h3>
        <p className="text-gray-400 mb-4">
          Master modern web development with hands-on projects
        </p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-main-color font-bold text-2xl">$49.99</span>
            <span className="text-gray-400 line-through text-sm ml-2">
              $99.99
            </span>
          </div>
          <Link to={"/courseDetails"} className="outline-button-sm">
            <i className="fas fa-shopping-cart"></i>
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
