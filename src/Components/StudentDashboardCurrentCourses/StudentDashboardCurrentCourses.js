import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faRobot, faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const StudentDashboardCurrentCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUserId(firebaseUser.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      if (!userId) {
        console.log("No user logged in.");
        return;
      }

      const enrollmentsRef = collection(db, "enrollments");
      const q = query(enrollmentsRef, where("uid", "==", userId));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No enrollments found for this user.");
        setCourses([]);
        return;
      }

      const courseIds = querySnapshot.docs.map((doc) => doc.data().courseId);
      console.log("Course IDs:", courseIds);

      if (courseIds.length > 0) {
        const coursesPromises = courseIds.map(async (courseId) => {
          const courseRef = doc(db, "courses", courseId);
          const courseSnapshot = await getDoc(courseRef);
          return courseSnapshot.exists()
            ? { id: courseSnapshot.id, ...courseSnapshot.data() }
            : null;
        });

        const coursesData = await Promise.all(coursesPromises);
        const validCourses = coursesData.filter((course) => course !== null);

        console.log("Courses Data:", validCourses);
        setCourses(validCourses);
      } else {
        console.log("No courses found for this user.");
        setCourses([]);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [userId]);

  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-6">Current Courses</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="glass-card p-6 animate-pulse">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-main-color/20"></div>
                <div className="min-w-0">
                  <div className="h-6 bg-gray-700 rounded w-32 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-24"></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="h-2 bg-gray-700 rounded-full"></div>
                <div className="flex justify-between mt-2">
                  <div className="h-4 bg-gray-700 rounded w-16"></div>
                  <div className="h-4 bg-gray-700 rounded w-16"></div>
                </div>
              </div>
              <div className="h-10 bg-gray-700 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Current Courses</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="glass-card p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-main-color/20 to-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon
                    icon={course.icon === "robot" ? faRobot : faCode}
                    className="text-2xl text-main-color"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-xl mb-1 truncate">
                    {course.title}
                  </h3>
                  <p className="text-gray-400">
                    {course.lessonsCompleted} of {course.totalLessons} lessons
                    completed
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full"
                    style={{
                      width: `${
                        (course.lessonsCompleted / course.totalLessons) * 100
                      }%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm">
                  <span className="text-main-color">
                    {Math.round(
                      (course.lessonsCompleted / course.totalLessons) * 100 || 0
                    )}
                    % Complete
                  </span>
                  <span className="text-gray-400">{course.timeLeft} left</span>
                </div>
              </div>
              <button className="gradient-button w-full">
                <FontAwesomeIcon icon={faPlay} className="mr-2" />
                Continue Learning
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No courses enrolled.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboardCurrentCourses;
