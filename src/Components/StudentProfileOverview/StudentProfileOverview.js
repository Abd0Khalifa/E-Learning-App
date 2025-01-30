import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEdit, faShare, faUser } from "@fortawesome/free-solid-svg-icons";

const StudentProfileOverview = () => {
    return (
        <div className="bg-gray-800 p-6 md:p-8 rounded-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gray-700 flex items-center justify-center">
                        <FontAwesomeIcon icon={faUser} className="text-4xl text-blue-400" />
                    </div>
                    <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <FontAwesomeIcon icon={faCamera} />
                    </button>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">John Doe</h2>
                    <p className="text-gray-400 mb-4">Web Development Enthusiast</p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
                            <FontAwesomeIcon icon={faEdit} /> Edit Profile
                        </button>
                        <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded flex items-center gap-2">
                            <FontAwesomeIcon icon={faShare} /> Share Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileOverview;
