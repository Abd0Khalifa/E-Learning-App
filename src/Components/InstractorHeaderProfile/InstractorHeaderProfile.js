import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

const InstractorHeaderProfile = () => {
    return (
        <header className="bg-card-dark border-b border-main-color/10 p-4 sticky top-0 z-30">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold">Profile Settings</h1>
                <div className="flex items-center gap-6">
                    <button className="relative">
                        <FontAwesomeIcon icon={faBell} className="text-main-color" />
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-main-color rounded-full text-xs flex items-center justify-center">3</span>
                    </button>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center">
                            <FontAwesomeIcon icon={faUser} className="text-main-color" />
                        </div>
                        <span className="font-medium hidden md:inline">Prof. Jane Smith</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default InstractorHeaderProfile;
