import React from "react";

const BasicInformation = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Basic Information</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Course Title</label>
          <input
            type="text"
            className="modern-input"
            placeholder="e.g., Web Development Masterclass"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Course Description
          </label>
          <textarea
            className="modern-input"
            rows="4"
            placeholder="Describe your course content and learning outcomes"
          ></textarea>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select className="modern-input">
              <option value="">Select Category</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
              <option value="business">Business</option>
              <option value="marketing">Marketing</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Level</label>
            <select className="modern-input">
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
