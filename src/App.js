import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import CourseDetails from "./Pages/CourseDetails/CourseDetails.js";
import StudentSidebarProfile from "./Components/StudentSidebarProfile/StudentSidebarProfile.js";
import StudentProfilePage from "./Pages/StudentProfilePage/StudentProfilePage.js";
import InstractorProfilePage from "./Pages/InstractorProfilePage/InstractorProfilePage.js";
import Login from "./Pages/Login/Login.js";
import InstractorDashboardPage from "./Pages/InstractorDashboardPage/InstractorDashboardPage.js";
import StudentDashboardPage from "./Pages/StudentDashboardPage/StudentDashboardPage.js";
import BrowseCourses from "./Pages/BrowseCourses/BrowseCourses.js";
import MyCourses from "./Pages/MyCourses/MyCourses.js";
import AddCourse from "./Pages/AddCourse/AddCourse.js";
import Register from "./Pages/Register/Register.js";
import ManageCourses from "./Pages/ManageCourses/ManageCourses.js";
import StudentProgress from "./Pages/StudentProgress/StudentProgress.js";
import Checkout from "./Pages/Checkout/Checkout.js";
import EditCourse from "./Pages/EditCourse/EditCourse.js";
import EnrolledCourse from "./Pages/EnrolledCourse/EnrolledCourse.js";
import NotFoundPage from "./Pages/NotFound/NotFound.js";
import FavCourses from "./Pages/FavCourses/FavCourses.js";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/sDashboard" element={<StudentDashboardPage />} />
          <Route path="/addCourse" element={<AddCourse />} />
          <Route path="/browseCourses" element={<BrowseCourses />} />
          <Route path="/courseDetails/:id" element={<CourseDetails />} />
          <Route path="/iDashboard" element={<InstractorDashboardPage />} />
          <Route path="/iProfile" element={<InstractorProfilePage />} />
          <Route path="/manageCourses" element={<ManageCourses />} />
          <Route path="/myCourses" element={<MyCourses />} />
          <Route path="/sProfile" element={<StudentProfilePage />} />
          <Route path="/sProgress" element={<StudentProgress />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/EditCourse/:id" element={<EditCourse />} />
          <Route path="/EnrolledCourse/:id" element={<EnrolledCourse />} />
          <Route path="/FavCourses" element={<FavCourses/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
