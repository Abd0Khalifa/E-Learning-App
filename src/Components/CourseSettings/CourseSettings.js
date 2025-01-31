import React from "react";

const CourseSettings = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Course Settings</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Price ($)</label>
          <input
            type="number"
            className="modern-input"
            placeholder="e.g., 49.99"
          />
        </div>
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="modern-input" />
            <span>Enable Course Preview</span>
          </label>
        </div>
        <div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="modern-input" />
            <span>Issue Certificate</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CourseSettings;
