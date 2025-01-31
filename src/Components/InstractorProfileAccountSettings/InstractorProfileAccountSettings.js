import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faBell, faGlobe, faTrashAlt, faDollarSign, faCalendar } from "@fortawesome/free-solid-svg-icons";

const InstractorProfileAccountSettings = () => {
    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Instructor Settings</h3>
            <div className="space-y-4">
                <button className="outline-button w-full justify-start">
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    Change Password
                </button>
                <button className="outline-button w-full justify-start">
                    <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                    Payment Settings
                </button>
                <button className="outline-button w-full justify-start">
                    <FontAwesomeIcon icon={faBell} className="mr-2" />
                    Notification Preferences
                </button>
                <button className="outline-button w-full justify-start">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    Availability Schedule
                </button>
                <button className="outline-button w-full justify-start text-red-500 hover:text-white hover:bg-red-500 border-red-500">
                    <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                    Delete Account
                </button>
            </div>
        </div>
    );
};

export default InstractorProfileAccountSettings;
