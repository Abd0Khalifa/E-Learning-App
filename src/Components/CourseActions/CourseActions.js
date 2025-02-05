import React from "react";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";

const CourseActions = ({ onCategoryChange }) => {
  return (
    <div className="glass-card p-6 mb-8 flex gap-3">
      <Link to="/addCourse" className="gradient-button flex-1">
        <i className="fas fa-plus"></i>
        Add Course
      </Link>
      <select
        className="modern-input flex-1"
        onChange={(e) => onCategoryChange && onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="development">Development</option>
        <option value="design">Design</option>
        <option value="business">Business</option>
        <option value="marketing">Marketing</option>
      </select>
      <SearchInput />
    </div>
  );
};

export default CourseActions;
