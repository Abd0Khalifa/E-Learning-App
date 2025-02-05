import React from "react";

const BasicInformation = ({ values, onChange, errors, touched }) => {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Basic Information</h2>
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Course Title</label>
          <input
            type="text"
            className="modern-input"
            placeholder="e.g., Web Development Masterclass"
            value={values.title} // Set value from props
            onChange={(e) => handleChange("title", e.target.value)}
          />
          {errors.title && touched.title && (
            <div className="text-red-500 text-sm">{errors.title}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Course Description
          </label>
          <textarea
            className="modern-input"
            rows="4"
            placeholder="Describe your course content and learning outcomes"
            value={values.description} // Set value from props
            onChange={(e) => handleChange("description", e.target.value)}
          ></textarea>
          {errors.description && touched.description && (
            <div className="text-red-500 text-sm">{errors.description}</div>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              className="modern-input"
              value={values.category} // Set value from props
              onChange={(e) => handleChange("category", e.target.value)}
            >
              <option value="">Select Category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
            {errors.category && touched.category && (
              <div className="text-red-500 text-sm">{errors.category}</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Level</label>
            <select
              className="modern-input"
              value={values.level} // Set value from props
              onChange={(e) => handleChange("level", e.target.value)}
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            {errors.level && touched.level && (
              <div className="text-red-500 text-sm">{errors.level}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInformation;
