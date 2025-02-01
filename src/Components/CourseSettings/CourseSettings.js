import React from "react";

const CourseSettings = ({ onChange }) => {
  const handleChange = (value) => {
    onChange(value);
  };

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
            onChange={(e) => handleChange(parseFloat(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default CourseSettings;
