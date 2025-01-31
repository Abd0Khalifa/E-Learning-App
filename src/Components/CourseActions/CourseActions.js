import React from "react";

const CourseActions = () => {
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
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses..."
            className="modern-input py-2 pl-10 pr-4"
          />
          <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
        </div>
      </div>
    </div>
  );
};

export default CourseActions;
