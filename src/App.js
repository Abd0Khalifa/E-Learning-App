import "./App.css";
import Signup from "./Pages/signup/Signup";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CourseDetails from "./Pages/CourseDetails/CourseDetails.js";
import StudentSidebarProfile from "./Components/StudentSidebarProfile/StudentSidebarProfile.js";
import StudentProfilePage from "./Pages/StudentProfilePage/StudentProfilePage.js";
import InstractorDashboardPage from "./Pages/InstractorDashboardPage/InstractorDashboardPage.js";
import StudentDashboardPage from "./Pages/StudentDashboardPage/StudentDashboardPage.js";
import Login from "./Pages/Login/Login.jsx";
import BrowseCourses from "./Pages/BrowseCourses/BrowseCourses.js";

function App() {
  return (
    <>
      <BrowseCourses />
    </>
  );
}

export default App;
