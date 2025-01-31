import React from "react";

const ActionButtons = () => {
  return (
    <div className="glass-card p-6">
      <div className="space-y-4">
        <button className="gradient-button w-full">
          <i className="fas fa-save"></i>
          Save Course
        </button>
        <button className="outline-button w-full">
          <i className="fas fa-eye"></i>
          Preview Course
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
