import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge, faBook, faCalendar, faChartLine, faCertificate, faCommentAlt, faUser, faCog, faBars } from "@fortawesome/free-solid-svg-icons";

const StudentSidebarProfile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle the sidebar open/close
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Button to toggle the sidebar on mobile */}
            <button
                onClick={toggleSidebar}
                className="md:hidden absolute top-12 left-6 z-50 text-white"
            >
                <FontAwesomeIcon icon={faBars} size="lg" />
            </button>

            {/* Sidebar */}
            <aside
                className={`transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 w-64 bg-card-dark border-r border-main-color/10 fixed h-full transition-transform duration-300 z-40`}
            >
                <div className="p-6">
                    <div className="text-2xl font-black gradient-text mb-8">EduFlow</div>
                    <nav className="space-y-4">
                        <a href="#" className="nav-link flex items-center gap-3">
                            <FontAwesomeIcon icon={faThLarge} />
                            Dashboard
                        </a>
                        <a href="#" className="nav-link flex items-center gap-3">
                            <FontAwesomeIcon icon={faBook} />
                            My Courses
                        </a>
                        <a href="#" className="nav-link flex items-center gap-3">
                            <FontAwesomeIcon icon={faCalendar} />
                            Schedule
                        </a>
                        <a href="#" className="nav-link flex items-center gap-3">
                            <FontAwesomeIcon icon={faChartLine} />
                            Progress
                        </a>
                        <a href="#" className="nav-link flex items-center gap-3">
                            <FontAwesomeIcon icon={faCertificate} />
                            Certificates
                        </a>
                        <a href="#" className="nav-link flex items-center gap-3">
                            <FontAwesomeIcon icon={faCommentAlt} />
                            Messages
                        </a>
                        <a href="#" className="nav-link flex items-center gap-3 text-main-color">
                            <FontAwesomeIcon icon={faUser} />
                            Profile
                        </a>
                        <a href="#" className="nav-link flex items-center gap-3">
                            <FontAwesomeIcon icon={faCog} />
                            Settings
                        </a>
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default StudentSidebarProfile;
