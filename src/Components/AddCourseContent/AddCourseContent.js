import React from "react";

const AddCourseContent = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Course Content</h2>
      <div className="space-y-6">
        <div className="feature-card">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold">Section 1: Introduction</h3>
            <button className="outline-button-sm">
              <i className="fas fa-plus"></i>
              Add Lesson
            </button>
          </div>
          <div className="space-y-4">
            <div className="bg-card-dark p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <i className="fas fa-video text-main-color"></i>
                  <span>Welcome to the Course</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-gray-400 hover:text-main-color">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-400 hover:text-red-500">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="outline-button w-full">
          <i className="fas fa-plus"></i>
          Add New Section
        </button>
      </div>
    </div>
  );
};

export default AddCourseContent;