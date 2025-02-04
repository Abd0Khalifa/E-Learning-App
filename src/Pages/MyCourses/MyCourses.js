import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import CourseCard from "../../Components/CourseCard/CourseCard";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";

const MyCourses = () => {
  const [courses, setCourses] = useState([]); // جميع الدورات المسترجعة
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4); // عدد العناصر في كل صفحة

  // جلب جميع الدورات من Firestore
  const fetchCourses = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "courses"));
      if (!querySnapshot.empty) {
        const coursesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData);
      } else {
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
  }, []);

  const getPaginatedCourses = () => {
    const startIndex = (currentPage - 1) * pageSize;
    return courses.slice(startIndex, startIndex + pageSize);
  };

  // جلب المزيد من الدورات عند النقر على "Next"
  const goToNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // جلب الدورات السابقة عند النقر على "Previous"
  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <NavBar />
      <main className="pt-32 pb-16">
        {/* Display Courses */}
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
                  {getPaginatedCourses().length > 0 ? (
                    getPaginatedCourses().map((course) => (
                      <CourseCard key={course.id} course={course} path={"coursesEnrollment"} title={"Show Course Videos"}/>
                    ))
                  ) : (
                    <p className="text-gray-400">No courses found</p>
                  )}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8 gap-4">
                  <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-gray-300 rounded-md text-white-700 hover:bg-gray-50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <span>←</span> Previous
                  </button>
                  <button
                    onClick={goToNextPage}
                    disabled={currentPage * pageSize >= courses.length}
                    className="px-4 py-2 border border-gray-300 rounded-md text-white-700 hover:bg-gray-50 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    Next <span>→</span>
                  </button>
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
