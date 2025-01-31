import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const VerificationStatus = () => {
    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Verification Status</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                        <span>Identity Verified</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                        <span>Email Confirmed</span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-xl" />
                        <span>Professional Status</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerificationStatus;
