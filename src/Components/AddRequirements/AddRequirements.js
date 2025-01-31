import React from "react";

const Requirements = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Requirements</h2>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="modern-input"
            placeholder="Add a requirement"
          />
          <button className="outline-button-sm">
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <div className="bg-card-dark p-3 rounded-lg flex items-center justify-between">
          <span>Basic understanding of HTML &amp; CSS</span>
          <button className="text-gray-400 hover:text-red-500">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
