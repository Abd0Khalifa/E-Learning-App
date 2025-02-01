import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const StudentHeader = () => {
    return (
        <header className="bg-card-dark border-b border-main-color/10 p-4 sticky top-0 z-30">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex items-center gap-4 w-full md:w-auto">
                    
                </div>
                <div className="flex items-center gap-6">
                    
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

export default StudentHeader;
