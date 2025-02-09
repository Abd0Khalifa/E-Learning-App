// src/Pages/FavCourses.jsx
import React, { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useSelector } from "react-redux";
import CourseCard from "../../Components/CourseCard/CourseCard";
import StudentSidebarProfile from "../../Components/StudentSidebarProfile/StudentSidebarProfile";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";

const FavCourses = () => {
  // الحصول على مصفوفة المفضلات من Redux (تحتوي على معرفات الكورسات)
  const favorites = useSelector((state) => state.auth.favorites);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // دالة لجلب بيانات الكورسات المفضلة من مجموعة "courses" في Firebase
  const fetchFavoriteCourses = async () => {
    setLoading(true);
    try {
      console.log("Favorites from Redux:", favorites);
      if (!favorites || favorites.length === 0) {
        setCourses([]);
        return;
      }
      const coursesPromises = favorites.map(async (courseId) => {
        console.log("Fetching course with ID:", courseId);
        const courseRef = doc(db, "courses", courseId);
        const courseSnapshot = await getDoc(courseRef);
        if (courseSnapshot.exists()) {
          console.log("Course found:", courseSnapshot.data());
          return { id: courseSnapshot.id, ...courseSnapshot.data() };
        } else {
          console.warn("Course not found for ID:", courseId);
          return null;
        }
      });
      const coursesData = await Promise.all(coursesPromises);
      console.log("Fetched courses data:", coursesData);
      setCourses(coursesData.filter((course) => course !== null));
    } catch (error) {
      console.error("Error fetching favorite courses:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchFavoriteCourses();
  }, [favorites]);

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <StudentSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <StudentHeader />
        <div className="p-5">
          <h1 className="text-3xl font-bold mb-8 text-main-color text-center p-5">
            My Favorite Courses
          </h1>
          <div className="container mx-auto px-4 sm:px-6">
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      course={course}
                      path={"EnrolledCourse"}
                      title={"Show Course"}
                    />
                  ))
                ) : (
                  <p className="text-gray-400">
                    You have not added any favorite courses.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FavCourses;
