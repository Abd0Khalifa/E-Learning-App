import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../Redux/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeaderProfile from "../../Components/InstractorHeaderProfile/InstractorHeaderProfile";
import CourseActions from "../../Components/CourseActions/CourseActions";
import CourseItem from "../../Components/CourseItem/CourseItem";
import Pagination from "../../Components/Pagination/Pagination";

const ManageCourses = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [loading, setLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || "Anonymous",
            photoURL: user.photoURL || "",
          })
        );
      }
    });

    return () => unsubscribe();
  }, [dispatch]);
  const instructorId = useSelector((state) => state.auth.user?.uid);
  const fetchCourses = async (reset = false) => {
    if (!instructorId) return;
    setLoading(true);
    try {
      let coursesQuery = query(
        collection(db, "courses"),
        where("instructorId", "==", instructorId),
        orderBy("createdAt", "desc"),
        limit(5)
      );
      if (categoryFilter) {
        coursesQuery = query(
          coursesQuery,
          where("category", "==", categoryFilter)
        );
      }
      if (statusFilter) {
        coursesQuery = query(coursesQuery, where("status", "==", statusFilter));
      }
      if (!reset && lastDoc) {
        coursesQuery = query(coursesQuery, startAfter(lastDoc));
      }
      const querySnapshot = await getDocs(coursesQuery);
      const newCourses = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCourses(reset ? newCourses : [...courses, ...newCourses]);
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1] || null);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
    setLoading(false);
  };
  const handleDeleteCourse = (courseId) => {
    setCourses((prevCourses) =>
      prevCourses.filter((course) => course.id !== courseId)
    );
  };

  useEffect(() => {
    fetchCourses(true);
  }, [instructorId, categoryFilter, statusFilter]);

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeaderProfile />
        <div className="container mx-auto px-4 py-8">
          <CourseActions
            onCategoryChange={setCategoryFilter}
            onStatusChange={setStatusFilter}
            onRefresh={() => fetchCourses(true)}
          />
          {loading ? (
            <p className="text-center text-gray-400">Loading courses...</p>
          ) : (
            <div className="grid gap-6">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <CourseItem
                    key={course.id}
                    course={course}
                    onDelete={handleDeleteCourse}
                  />
                ))
              ) : (
                <p className="text-center text-gray-400">No courses found.</p>
              )}
            </div>
          )}
          <Pagination onNext={() => fetchCourses()} hasMore={!!lastDoc} />
        </div>
      </main>
    </div>
  );
};

export default ManageCourses;
