import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase"; // Import Firestore (db)
import { collection, query, where, getDocs } from "firebase/firestore"; // Firestore functions

const InstractorDashboardCoursePerformance = () => {
  const [courses, setCourses] = useState([]); // List of courses with performance data
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          // Fetch courses created by the logged-in instructor
          const coursesQuery = query(
            collection(db, "courses"),
            where("instructorId", "==", user.uid)
          );
          const coursesSnapshot = await getDocs(coursesQuery);

          // Fetch the number of enrolled students for each course
          const coursesData = [];
          for (const courseDoc of coursesSnapshot.docs) {
            const enrollmentsQuery = query(
              collection(db, "enrollments"),
              where("courseId", "==", courseDoc.id)
            );
            const enrollmentsSnapshot = await getDocs(enrollmentsQuery);

            coursesData.push({
              id: courseDoc.id,
              title: courseDoc.data().title,
              students: enrollmentsSnapshot.size,
            });
          }

          setCourses(coursesData);
        } catch (error) {
          console.error("Error fetching course performance data:", error);
        } finally {
          setIsLoading(false); // Stop loading
        }
      } else {
        setIsLoading(false); // Stop loading if no user is logged in
      }
    });

    return () => unsubscribe();
  }, []);

  if (isLoading) {
    return (
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold mb-6">Course Performance</h2>
        <div className="space-y-6">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse">
              <div className="flex justify-between mb-2">
                <div className="h-4 bg-gray-700 rounded w-1/2"></div>
                <div className="h-4 bg-gray-700 rounded w-10"></div>
              </div>
              <div className="h-2 bg-gray-700 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-bold mb-6">Course Performance</h2>
      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id}>
            <div className="flex justify-between mb-2">
              <span className="font-medium">{course.title}</span>
              <span className="text-main-color">{course.students} students</span>
            </div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full"
                style={{ width: `${(course.students / 100) * 100}%` }} // Adjust the width based on the number of students
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstractorDashboardCoursePerformance;