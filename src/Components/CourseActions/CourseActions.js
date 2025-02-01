import React from "react";
import SearchInput from "../SearchInput/SearchInput";

const CourseActions = ({ onCategoryChange }) => {
  return (
    <div className="glass-card p-6 mb-8">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex items-center gap-4 flex-wrap">
          <a href="create-edit-course.html" className="gradient-button">
            <i className="fas fa-plus"></i>
            Create New Course
          </a>
          <button className="outline-button-sm opacity-60 hover:opacity-100">
            <i className="fas fa-filter"></i>
            Filter
          </button>
          <button className="outline-button-sm opacity-60 hover:opacity-100">
            <i className="fas fa-sort"></i>
            Sort
          </button>
        </div>
        <select
          className="modern-input"
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
    </div>
  );
};

export default CourseActions;
