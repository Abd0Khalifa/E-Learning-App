import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import CourseCard from "../../Components/CourseCard/CourseCard";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const MyCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUserId(firebaseUser.uid);
        console.log("User ID:", firebaseUser.uid);
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
          return courseSnapshot.exists() ? { id: courseSnapshot.id, ...courseSnapshot.data() } : null;
        });

        const coursesData = await Promise.all(coursesPromises);
        const validCourses = coursesData.filter(course => course !== null);

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

  return (
    <>
      <NavBar />
      <main className="pt-32 pb-16">
        <section>
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-3xl font-bold mb-8 text-main-color text-center p-5">My Courses</h1>
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {courses.length > 0 ? (
                    courses.map((course) => (
                      <CourseCard
                        key={course.id}
                        course={course}
                        path={"courseDetails"} 
                        title={"Show Details"} 
                      />
                    ))
                  ) : (
                    <p className="text-gray-400">You have not enrolled in any courses.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MyCourses;
