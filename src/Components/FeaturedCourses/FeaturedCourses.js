import React from "react";
import "./FeaturedCourses.css";
import CourseCard from "../CourseCard/CourseCard";

const FeaturedCourses = () => {
  return (
    <section id="courses" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-medium inline-block mb-4">
            <i className="fas fa-sparkles mr-2"></i>
            Top-Rated Courses
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Courses</span>
          </h2>
          <p className="text-gray-400">
            Explore our most popular courses curated by industry experts
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
