import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThLarge,
  faBook,
  faCalendar,
  faChartLine,
  faCertificate,
  faCommentAlt,
  faUser,
  faCog,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        className={`transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 bg-card-dark border-r border-main-color/10 fixed h-full transition-transform duration-300 z-40`}
      >
        <div className="p-6">
          <Link to="/" className="text-2xl font-black gradient-text mb-8 block">
            SkillStack
          </Link>
          <nav className="space-y-4">
            <Link
              to={"/sDashboard"}
              className="nav-link flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faThLarge} />
              Dashboard
            </Link>
            <Link
              to={"/myCourses"}
              className="nav-link flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faBook} />
              My Courses
            </Link>
            <Link
              to={"/sProfile"}
              className="nav-link flex items-center gap-3 text-main-color"
            >
              <FontAwesomeIcon icon={faUser} />
              Profile
            </Link>
            <Link
              to={"/browseCourses"}
              className="nav-link flex items-center gap-3 text-main-color"
            >
              <FontAwesomeIcon icon={faThLarge} />
              Browse Courses
            </Link>
            <Link to={""} className="nav-link flex items-center gap-3">
              <FontAwesomeIcon icon={faCog} />
              Settings
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default StudentSidebarProfile;
