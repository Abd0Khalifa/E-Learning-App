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
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";
import CourseActions from "../../Components/CourseActions/CourseActions";
import CourseItem from "../../Components/CourseItem/CourseItem";
import SearchInput from "../../Components/SearchInput/SearchInput";

const PAGE_SIZE = 3;

const ManageCourses = () => {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);

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
        limit(PAGE_SIZE)
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
      if (searchTerm) {
        coursesQuery = query(
          coursesQuery,
          where("title", ">=", searchTerm),
          where("title", "<=", searchTerm + "\uf8ff")
        );
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
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(querySnapshot.docs.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchCourses(true);
  }, [instructorId, categoryFilter, statusFilter, searchTerm]);

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeader />
        <div className="container mx-auto px-4 py-8 mt-20">
          <CourseActions
            onCategoryChange={setCategoryFilter}
            onStatusChange={setStatusFilter}
            onRefresh={() => fetchCourses(true)}
          />
          <div className="glass-card p-6 mb-8 flex gap-3">
            {" "}
            <SearchInput
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onSearch={() => fetchCourses(true)}
            />
          </div>

          {loading && (
            <p className="text-center text-gray-400">Loading courses...</p>
          )}

          <div className="grid gap-6">
            {courses.length > 0
              ? courses.map((course) => (
                  <CourseItem key={course.id} course={course} />
                ))
              : !loading && (
                  <p className="text-center text-gray-400">No courses found.</p>
                )}
          </div>

          {hasMore && !loading && (
            <div className="text-center mt-6">
              <button
                onClick={() => fetchCourses()}
                className="gradient-button"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ManageCourses;
