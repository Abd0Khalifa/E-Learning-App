import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBook, faCalendar, faChartLine, faCertificate, faComments, faUser, faCog, faTimes } from "@fortawesome/free-solid-svg-icons";

const StudentSidebarProfile = ({ isOpen, toggleSidebar }) => {
    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden" onClick={toggleSidebar}></div>}

            <aside className={`fixed h-full w-64 bg-gray-800 border-r border-gray-700 transition-transform duration-300 
                ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                
                <button className="absolute top-4 right-4 md:hidden text-white text-2xl" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>

                <div className="p-6">
                    <h2 className="text-2xl font-black gradient-text mb-8">EduFlow</h2>
                    <nav className="space-y-4">
                        <a href="dashboard.html" className="flex items-center gap-3 text-white"><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</a>
                        <a href="my-courses.html" className="flex items-center gap-3 text-white"><FontAwesomeIcon icon={faBook} /> My Courses</a>
                        <a href="#" className="flex items-center gap-3 text-white"><FontAwesomeIcon icon={faCalendar} /> Schedule</a>
                        <a href="#" className="flex items-center gap-3 text-white"><FontAwesomeIcon icon={faChartLine} /> Progress</a>
                        <a href="#" className="flex items-center gap-3 text-white"><FontAwesomeIcon icon={faCertificate} /> Certificates</a>
                        <a href="#" className="flex items-center gap-3 text-white"><FontAwesomeIcon icon={faComments} /> Messages</a>
                        <a href="#" className="flex items-center gap-3 text-blue-400"><FontAwesomeIcon icon={faUser} /> Profile</a>
                        <a href="#" className="flex items-center gap-3 text-white"><FontAwesomeIcon icon={faCog} /> Settings</a>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default StudentSidebarProfile;
