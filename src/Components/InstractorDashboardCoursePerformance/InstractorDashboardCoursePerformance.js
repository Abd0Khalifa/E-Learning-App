import React from 'react';

const InstractorDashboardCoursePerformance = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Course Performance</h2>
      <div className="space-y-6">
        {/* Course 1 */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Web Development Masterclass</span>
            <span className="text-main-color">500 students</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>
        {/* Course 2 */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">AI & Machine Learning</span>
            <span className="text-main-color">350 students</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
        {/* Course 3 */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="font-medium">Digital Art & Design</span>
            <span className="text-main-color">250 students</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full" style={{ width: '45%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstractorDashboardCoursePerformance;
