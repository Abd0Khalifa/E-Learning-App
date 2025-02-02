import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const StudentDashboardWelcomeSection = () => {
    const [userName, setUserName] = useState("Guest");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserName(user.displayName || "User");
            }
        });

        return () => unsubscribe(); // Cleanup on unmount
    }, []);

    return (
        <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">
                        Welcome back, {userName}! 👋
                    </h1>
                    <p className="text-gray-400">Pick up where you left off</p>
                </div>
                <button className="gradient-button w-full md:w-auto">
                    <FontAwesomeIcon icon={faPlus} />
                    Browse Courses
                </button>
            </div>
        </div>
    );
};

export default StudentDashboardWelcomeSection;
