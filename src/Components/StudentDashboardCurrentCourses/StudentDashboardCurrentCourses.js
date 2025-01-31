import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRobot, faPlay } from '@fortawesome/free-solid-svg-icons';

const StudentDashboardCurrentCourses = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Current Courses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Web Development Masterclass */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-main-color/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faCode} className="text-2xl text-main-color" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xl mb-1 truncate">Web Development Masterclass</h3>
              <p className="text-gray-400">12 of 48 lessons completed</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full" style={{ width: '25%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-main-color">25% Complete</span>
              <span className="text-gray-400">8h 30m left</span>
            </div>
          </div>
          <button className="gradient-button w-full">
            <FontAwesomeIcon icon={faPlay} className="mr-2" />
            Continue Learning
          </button>
        </div>

        {/* AI & Machine Learning */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-main-color/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon icon={faRobot} className="text-2xl text-main-color" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-xl mb-1 truncate">AI & Machine Learning</h3>
              <p className="text-gray-400">18 of 36 lessons completed</p>
            </div>
          </div>
          <div className="mb-4">
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full" style={{ width: '50%' }}></div>
            </div>
            <div className="flex justify-between mt-2 text-sm">
              <span className="text-main-color">50% Complete</span>
              <span className="text-gray-400">6h 15m left</span>
            </div>
          </div>
          <button className="gradient-button w-full">
            <FontAwesomeIcon icon={faPlay} className="mr-2" />
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardCurrentCourses;
