import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const StudentDashboardWelcomeSection = () => {
    return (
        <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back, John! 👋
                    </h1>
                    <p className="text-gray-400">Pick up where you left off</p>
                </div>
                <button className="gradient-button w-full md:w-auto">
                    <FontAwesomeIcon icon={faPlus}/>
                    Browse Courses
                </button>
            </div>
        </div>
    );
};

export default StudentDashboardWelcomeSection;
