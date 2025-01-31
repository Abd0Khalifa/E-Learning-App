import React from "react";

const InstractorStatistics = () => {
    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Teaching Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">8</div>
                    <div className="text-gray-400">Active Courses</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">1.2k</div>
                    <div className="text-gray-400">Total Students</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">4.8</div>
                    <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">12.5k</div>
                    <div className="text-gray-400">Reviews</div>
                </div>
            </div>
        </div>
    );
};

export default InstractorStatistics;
