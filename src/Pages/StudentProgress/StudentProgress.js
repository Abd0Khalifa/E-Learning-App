import React from "react";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeaderProfile from "../../Components/InstractorHeader/InstractorHeader";
import ProgressOverviewCard from "../../Components/ProgressOverviewCard/ProgressOverviewCard";
import StudentProgressRow from "../../Components/StudentProgressRow/StudentProgressRow";
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";

const StudentProgress = () => {
  // Sample data for progress overview
  const progressOverview = [
    { icon: "fa-users", value: "1,248", label: "Total Students" },
    { icon: "fa-graduation-cap", value: "85%", label: "Completion Rate" },
    { icon: "fa-clock", value: "4.2h", label: "Avg. Study Time" },
    { icon: "fa-star", value: "92%", label: "Satisfaction Rate" },
  ];

  // Sample data for student progress
  const students = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      course: "Web Development",
      progress: 75,
      lastActive: "2 hours ago",
      performance: "Excellent",
    },
    {
      id: 2,
      name: "Sarah Chen",
      email: "sarah@example.com",
      course: "AI & Machine Learning",
      progress: 45,
      lastActive: "1 day ago",
      performance: "Good",
    },
  ];

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeader />
        <div className="container mx-auto px-4 py-8">
          {/* Student Search and Filters */}
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search students..."
                    className="modern-input py-2 pl-10 pr-4"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
                </div>
                <select className="modern-input py-2">
                  <option value="">All Courses</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ai-ml">AI & Machine Learning</option>
                  <option value="design">Digital Art & Design</option>
                </select>
              </div>
              <div className="flex gap-4">
                <button className="outline-button-sm">
                  <i className="fas fa-filter"></i>
                  Filter
                </button>
                <button className="outline-button-sm">
                  <i className="fas fa-download"></i>
                  Export Report
                </button>
              </div>
            </div>
          </div>

          {/* Progress Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {progressOverview.map((item, index) => (
              <ProgressOverviewCard
                key={index}
                icon={item.icon}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>

          {/* Student List */}
          <div className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Student Progress</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-main-color/10">
                    <th className="pb-4">Student</th>
                    <th className="pb-4">Course</th>
                    <th className="pb-4">Progress</th>
                    <th className="pb-4">Last Active</th>
                    <th className="pb-4">Performance</th>
                    <th className="pb-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-main-color/10">
                  {students.map((student) => (
                    <StudentProgressRow key={student.id} student={student} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProgress;
