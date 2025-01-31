import React from "react";

const ProgressOverviewCard = ({ icon, value, label }) => {
  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
          <i className={`fas ${icon} text-xl text-main-color`}></i>
        </div>
        <div>
          <div className="text-2xl font-bold">{value}</div>
          <div className="text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressOverviewCard;
