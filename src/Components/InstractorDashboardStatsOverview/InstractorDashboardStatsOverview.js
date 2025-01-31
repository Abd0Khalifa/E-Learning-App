import { faBook, faDollarSign, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InstractorDashboardStatsOverview = () => {
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
                        <FontAwesomeIcon icon={faUser} className="text-xl text-main-color"/>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">125</div>
                        <div className="text-gray-400">Total Students</div>
                    </div>
                </div>
            </div>
            <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faStar} className="text-xl text-main-color" />
                    </div>
                    <div>
                        <div className="text-2xl font-bold">4.8</div>
                        <div className="text-gray-400">Avg. Rating</div>
                    </div>
                </div>
            </div>
            <div className="glass-card p-6">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faDollarSign} className="text-xl text-main-color"/>
                    </div>
                    <div>
                        <div className="text-2xl font-bold">$2,450</div>
                        <div className="text-gray-400">Monthly Earnings</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstractorDashboardStatsOverview;
