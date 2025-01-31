import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const StudentProfileConnectedAccounts = () => {
    return (
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Connected Accounts</h3>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faGoogle} className="text-xl" />
                        <span>Google</span>
                    </div>
                    <button className="text-main-color hover:text-white">Connect</button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faGithub} className="text-xl" />
                        <span>GitHub</span>
                    </div>
                    <button className="text-main-color hover:text-white">Connect</button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                        <span>LinkedIn</span>
                    </div>
                    <span className="text-green-500">Connected</span>
                </div>
            </div>
        </div>
    );
};

export default StudentProfileConnectedAccounts;
