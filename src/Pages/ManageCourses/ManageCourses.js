import React from "react";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeaderProfile from "../../Components/InstractorHeader/InstractorHeader";
import CourseActions from "../../Components/CourseActions/CourseActions";
import CourseItem from "../../Components/CourseItem/CourseItem";
import Pagination from "../../Components/Pagination/Pagination";
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";

const ManageCourses = () => {
  const courses = [
    {
      id: 1,
      icon: "https://cdn.lordicon.com/qtqvorle.json",
      category: "Development",
      status: "Published",
      statusColor: "green",
      title: "Web Development Masterclass",
      students: 523,
      rating: 4.8,
      revenue: 15690,
      completionRate: 78,
    },
    {
      id: 2,
      icon: "https://cdn.lordicon.com/cnbtojmk.json",
      category: "AI & ML",
      status: "Draft",
      statusColor: "yellow",
      title: "AI & Machine Learning",
      students: 348,
      rating: 4.6,
      revenue: 8720,
      completionRate: 65,
    },
    {
      id: 3,
      icon: "https://cdn.lordicon.com/wloilxuq.json",
      category: "Design",
      status: "Under Review",
      statusColor: "blue",
      title: "Digital Art & Design",
      students: 245,
      rating: 4.9,
      revenue: 6125,
      completionRate: 82,
    },
  ];

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeader />
        <div className="container mx-auto px-4 py-8">
          <CourseActions />
          <div className="grid gap-6">
            {courses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </div>
          <Pagination />
        </div>
      </main>
    </div>
  );
};

export default ManageCourses;
