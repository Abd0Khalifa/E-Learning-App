import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const StudentDashboardHeader = () => {
    return (
        <header className="bg-card-dark border-b border-main-color/10 p-4 sticky top-0 z-30">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-1 md:flex-none">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="modern-input py-2 pl-4 pr-10 w-full"
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <button className="relative">
                        <FontAwesomeIcon icon={faBell} className="text-xl text-main-color" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-main-color rounded-full text-xs flex items-center justify-center">
                            3
                        </span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} className="text-main-color" />
                        </div>
                        <span className="font-medium hidden md:inline">Jane Smith</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default StudentDashboardHeader;
