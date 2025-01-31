import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faTasks, faCalendar, faClock } from '@fortawesome/free-solid-svg-icons';

const StudentDashboardUpcomingSchedule = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-bold mb-6">Upcoming Schedule</h2>
        <div className="glass-card divide-y divide-main-color/10">
          {/* Live Coding Session */}
          <div className="p-4 md:p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faVideo} className="text-xl text-main-color" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold truncate">Live Coding Session</h4>
                <p className="text-gray-400">Web Development Masterclass</p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-sm">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-main-color" />
                    Today, 2:00 PM
                  </span>
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faClock} className="text-main-color" />
                    1h 30m
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Assignment Due */}
          <div className="p-4 md:p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center flex-shrink-0">
                <FontAwesomeIcon icon={faTasks} className="text-xl text-main-color" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold truncate">Assignment Due</h4>
                <p className="text-gray-400">AI & Machine Learning</p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="text-main-color" />
                    Tomorrow, 11:59 PM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardUpcomingSchedule;
