import React from 'react';

const InstractorDashboardWelcomeSection = () => {
    return (
        <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, Prof. Jane! </h1>
                    <p className="text-gray-400">Here's what's happening with your courses today</p>
                </div>
                <button className="gradient-button w-full md:w-auto">
                    <i className="fas fa-plus"></i>
                    Create New Course
                </button>
            </div>
        </div>
    );
};

export default InstractorDashboardWelcomeSection;
