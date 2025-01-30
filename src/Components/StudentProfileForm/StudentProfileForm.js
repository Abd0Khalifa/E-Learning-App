import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const StudentProfileForm = () => {
    return (
        <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-6">Personal Information</h3>
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">First Name</label>
                        <input type="text" className="bg-gray-700 text-white p-2 rounded w-full" value="John" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                        <input type="text" className="bg-gray-700 text-white p-2 rounded w-full" value="Doe" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-white mb-2">Email</label>
                    <input type="email" className="bg-gray-700 text-white p-2 rounded w-full" value="john.doe@example.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-white mb-2">Bio</label>
                    <textarea className="bg-gray-700 text-white p-2 rounded w-full" rows="4">
                        Passionate about web development and creating interactive user experiences. Currently learning React and Node.js.
                    </textarea>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Location</label>
                        <input type="text" className="bg-gray-700 text-white p-2 rounded w-full" value="New York, USA" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-white mb-2">Website</label>
                        <input type="url" className="bg-gray-700 text-white p-2 rounded w-full" value="https://johndoe.dev" />
                    </div>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2">
                    <FontAwesomeIcon icon={faSave} /> Save Changes
                </button>
            </form>
        </div>
    );
};

export default StudentProfileForm;
