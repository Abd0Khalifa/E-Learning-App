import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faShare } from '@fortawesome/free-solid-svg-icons';

const StudentDashboardAchievement = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recent Achievement</h2>
      <div className="glass-card p-6 text-center">
        <div className="w-24 h-24 rounded-full bg-main-color/20 flex items-center justify-center mx-auto mb-4">
          <FontAwesomeIcon icon={faTrophy} className="text-3xl text-main-color" />
        </div>
        <h3 className="font-bold text-xl mb-2">Course Milestone!</h3>
        <p className="text-gray-400 mb-4">Completed 50% of AI & Machine Learning</p>
        <button className="outline-button-sm w-full">
          <FontAwesomeIcon icon={faShare} />
          Share Achievement
        </button>
      </div>
    </div>
  );
};

export default StudentDashboardAchievement;
