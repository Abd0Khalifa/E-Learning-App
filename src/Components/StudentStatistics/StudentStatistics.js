import React from "react";

const StudentStatistics = () => {
    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Learning Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">4</div>
                    <div className="text-gray-400">Active Courses</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">28h</div>
                    <div className="text-gray-400">Learning Time</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">3</div>
                    <div className="text-gray-400">Certificates</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">85%</div>
                    <div className="text-gray-400">Avg. Score</div>
                </div>
            </div>
        </div>
    );
};

export default StudentStatistics;
