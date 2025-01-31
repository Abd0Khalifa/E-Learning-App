import { faBook, faCertificate, faClock, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const StudentDashboardStatsOverview = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faBook} className="text-xl text-main-color" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">8</div>
                        <div className="text-gray-400">Active Courses</div>
                    </div>
                </div>
            </div>
            <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faClock} className="text-xl text-main-color"/>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">28h</div>
                        <div className="text-gray-400">Learning Time</div>
                    </div>
                </div>
            </div>
            <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCertificate} className="text-xl text-main-color" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">5</div>
                        <div className="text-gray-400">Certificates
                        </div>
                    </div>
                </div>
            </div>
            <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faStar} className="text-xl text-main-color" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">85%</div>
                        <div className="text-gray-400">Avg. Score</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboardStatsOverview;
