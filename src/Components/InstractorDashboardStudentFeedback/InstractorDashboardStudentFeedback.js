import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

const InstractorDashboardStudentFeedback = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Recent Student Feedback</h2>
      <div className="space-y-6">
 
        <div className="p-4 bg-card-dark rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-main-color" />
              </div>
              <div>
                <h4 className="font-medium">Alex Thompson</h4>
                <div className="flex text-main-color text-sm">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-400">2 days ago</span>
          </div>
          <p className="text-gray-400">"Great course! The content is well-structured and the examples are very practical."</p>
        </div>

        <div className="p-4 bg-card-dark rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} className="text-main-color" />
              </div>
              <div>
                <h4 className="font-medium">Sarah Chen</h4>
                <div className="flex text-main-color text-sm">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
              </div>
            </div>
            <span className="text-sm text-gray-400">3 days ago</span>
          </div>
          <p className="text-gray-400">"The hands-on projects really helped me understand the concepts better."</p>
        </div>
      </div>
    </div>
  );
};

export default InstractorDashboardStudentFeedback;
