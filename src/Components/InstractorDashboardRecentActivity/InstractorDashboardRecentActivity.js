import {
  faCertificate,
  faComment,
  faFilter,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InstractorDashboardRecentActivity = () => {
  return (
    <div className="glass-card p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Recent Activity</h2>
        <button className="outline-button-sm">
          <FontAwesomeIcon icon={faFilter} />
          Filter
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faComment} className="text-main-color" />
          </div>
          <div>
            <h4 className="font-medium">New Course Review</h4>
            <p className="text-gray-400 text-sm">
              John Doe left a 5-star review on "Web Development Masterclass"
            </p>
            <span className="text-xs text-gray-400">2 hours ago</span>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon
              icon={faUserGraduate}
              className="text-main-color"
            />
          </div>
          <div>
            <h4 className="font-medium">New Enrollment</h4>
            <p className="text-gray-400 text-sm">
              5 new students enrolled in "AI & Machine Learning"
            </p>
            <span className="text-xs text-gray-400">5 hours ago</span>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center flex-shrink-0">
            <FontAwesomeIcon icon={faCertificate} className="text-main-color" />
          </div>
          <div>
            <h4 className="font-medium">Course Completion</h4>
            <p className="text-gray-400 text-sm">
              3 students completed "Digital Art & Design"
            </p>
            <span className="text-xs text-gray-400">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstractorDashboardRecentActivity;
