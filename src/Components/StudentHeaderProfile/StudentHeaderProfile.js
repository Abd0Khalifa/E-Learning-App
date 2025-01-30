import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const StudentHeaderProfile = () => {
    return (
        <header className="bg-gray-800 border-b border-gray-700 p-4 sticky top-0 z-30">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Profile Settings</h1>
                <div className="flex items-center gap-6">
                    <button className="relative">
                        <FontAwesomeIcon icon={faBell} className="text-xl text-white" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full text-xs flex items-center justify-center">3</span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} className="text-blue-400" />
                        </div>
                        <span className="font-medium text-white hidden md:inline">John Doe</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default StudentHeaderProfile;
