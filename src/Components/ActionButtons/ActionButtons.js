import React from "react";

const ActionButtons = ({ onSave }) => {
  return (
    <div className="glass-card p-6">
      <div className="space-y-4">
        <button
          type="button"
          className="gradient-button w-full"
          onClick={onSave}
        >
          <i className="fas fa-save"></i>
          Save Course
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
