import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEdit, faEye, faShare, faUser } from "@fortawesome/free-solid-svg-icons";

const InstractorProfileOverview = () => {
    return (
        <div className="glass-card p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
                <div className="w-32 h-32 rounded-full bg-main-color/20 flex items-center justify-center">
                    <FontAwesomeIcon icon={faUser} className="text-4xl text-main-color" />
                </div>
                <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-main-color flex items-center justify-center">
                    <FontAwesomeIcon icon={faCamera} />
                </button>
            </div>
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">Prof. Jane Smith</h2>
                <p className="text-gray-400 mb-4">Senior Web Development Instructor</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <button className="gradient-button-sm">
                        <FontAwesomeIcon icon={faEdit} />
                        Edit Profile
                    </button>
                    <button className="outline-button-sm">
                        <FontAwesomeIcon icon={faEye} />
                        View Public Profile
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default InstractorProfileOverview;
