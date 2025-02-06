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
  faChalkboardTeacher,
  faUsers,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const InstractorSidebarProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="sidebar">
      <button
        onClick={toggleSidebar}
        className="md:hidden  top-8 left-6 z-50 text-white fixed"
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>

      <aside
        className={`transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64 bg-card-dark border-r border-main-color/10 fixed h-full transition-transform duration-300 z-40`}
      >
        <div className="p-6">
          <Link
            to="/"
            className="text-2xl font-black gradient-text mb-8 block custLogo"
          >
            SkillStack
          </Link>
          <nav className="space-y-4">
            <Link
              to={"/iDashboard"}
              className="nav-link flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faThLarge} />
              Dashboard
            </Link>
            <Link
              to={"/manageCourses"}
              className="nav-link flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faChalkboardTeacher} />
              Manage Courses
            </Link>
            <Link
              to={"/sProgress"}
              className="nav-link flex items-center gap-3"
            >
              <FontAwesomeIcon icon={faUsers} />
              Students
            </Link>
            <Link
              to={"/iProfile"}
              className="nav-link flex items-center gap-3 text-main-color"
            >
              <FontAwesomeIcon icon={faUser} />
              Profile
            </Link>
            <Link to={""} className="nav-link flex items-center gap-3">
              <FontAwesomeIcon icon={faCog} />
              Settings
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default InstractorSidebarProfile;
