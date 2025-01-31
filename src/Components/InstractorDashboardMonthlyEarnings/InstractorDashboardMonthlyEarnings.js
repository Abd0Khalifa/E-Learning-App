import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const InstractorDashboardMonthlyEarnings = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Monthly Earnings</h2>
      <div className="text-center mb-6">
        <div className="text-4xl font-bold text-main-color mb-2">$12,543</div>
        <p className="text-gray-400">+18% from last month</p>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Course Sales</span>
          <span className="font-medium">$8,250</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Consulting</span>
          <span className="font-medium">$3,180</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Affiliates</span>
          <span className="font-medium">$1,113</span>
        </div>
      </div>
      <button className="outline-button w-full mt-6">
        <FontAwesomeIcon icon={faDownload} className="mr-2" />
        Download Report
      </button>
    </div>
  );
};

export default InstractorDashboardMonthlyEarnings;
