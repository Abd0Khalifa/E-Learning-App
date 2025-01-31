import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave} from "@fortawesome/free-solid-svg-icons";

const InstractorProfileForm = () => {
    return (
        <div className="glass-card p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Personal Information
            </h2>
            <form action="#" method="POST" className="space-y-6">
                {/* Full Name */}
                <div className="space-y-2">
                    <label htmlFor="full-name" className="text-sm font-medium">Full Name</label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder="Enter your full name"
                        className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
                    />
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="full-name" className="text-sm font-medium">Professional Title</label>
                    <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder="Enter your Position"
                        className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
                    />
                </div>


                {/* Bio */}
                <div className="space-y-2">
                    <label htmlFor="bio" className="text-sm font-medium">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows="4"
                        placeholder="Tell us about yourself"
                        className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
                    ></textarea>
                </div>

               
                {/* Submit Button */}
                <div className="space-y-4">
                    <button
                        type="submit"
                        className="gradient-button w-full py-3 text-xl text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
                    >
                    <FontAwesomeIcon icon={faSave} />    Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default InstractorProfileForm;
