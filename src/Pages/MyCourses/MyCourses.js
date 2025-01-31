import React from "react";
import "./MyCourses.css";
import StudentDashboardHeader from "../../Components/StudentDashboardHeader/StudentDashboardHeader";
import StudentSidebarProfile from "../../Components/StudentSidebarProfile/StudentSidebarProfile";
import CourseCard from "../../Components/CourseCard/CourseCard";

const courses = [
  {
    id: 1,
    category: "Development",
    title: "Web Development Masterclass",
    description: "12 of 48 lessons completed",
    progress: 25,
    timeLeft: "8h 30m left",
    status: "In Progress",
    icon: "https://cdn.lordicon.com/qtqvorle.json",
  },
  {
    id: 2,
    category: "AI & ML",
    title: "AI & Machine Learning",
    description: "18 of 36 lessons completed",
    progress: 50,
    timeLeft: "6h 15m left",
    status: "In Progress",
    icon: "https://cdn.lordicon.com/cnbtojmk.json",
  },
  {
    id: 3,
    category: "Design",
    title: "Digital Art & Design",
    description: "36 of 36 lessons completed",
    progress: 100,
    timeLeft: "Course Completed",
    status: "Completed",
    icon: "https://cdn.lordicon.com/wloilxuq.json",
  },
];

const MyCourses = () => {
  return (
    <div className="min-h-screen flex bg-custom-dark">
      <StudentSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <StudentDashboardHeader />
        <div className="container mx-auto p-4">
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-4 flex-wrap">
                <button className="outline-button-sm">
                  <i className="fas fa-filter"></i>
                  All Courses
                </button>
                <button className="outline-button-sm opacity-60 hover:opacity-100">
                  <i className="fas fa-clock"></i>
                  In Progress
                </button>
                <button className="outline-button-sm opacity-60 hover:opacity-100">
                  <i className="fas fa-check-circle"></i>
                  Completed
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="modern-input py-2 pl-10 pr-4"
                />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyCourses;
