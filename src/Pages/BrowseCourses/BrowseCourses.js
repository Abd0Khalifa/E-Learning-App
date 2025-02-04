import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../../firebase";
import CourseCard from "../../Components/CourseCard/CourseCard";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SearchInput from "../../Components/SearchInput/SearchInput";

const BrowseCourses = () => {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [lastVisible, setLastVisible] = useState(null); // Track the last document for pagination
  const [page, setPage] = useState(1); // Current page
  const [totalPages, setTotalPages] = useState(1); // Total number of pages
  const coursesPerPage = 4; // Number of courses per page

  // Fetch total number of courses for pagination
  const fetchTotalCourses = async () => {
    try {
      let q = query(collection(db, "courses"));

      if (search) {
        q = query(q, where("title", ">=", search), where("title", "<=", search + "\uf8ff"));
      }

      if (category) {
        q = query(q, where("category", "==", category));
      }

      if (price) {
        if (price === "free") {
          q = query(q, where("price", "==", 0));
        } else if (price === "paid") {
          q = query(q, where("price", ">", 0));
        }
      }

      const querySnapshot = await getDocs(q);
      const totalCourses = querySnapshot.size;
      setTotalPages(Math.ceil(totalCourses / coursesPerPage)); // Calculate total pages
    } catch (error) {
      console.error("Error fetching total courses:", error);
    }
  };

  // Fetch courses for the current page
  const fetchCourses = async () => {
    try {
      let q = query(collection(db, "courses"), orderBy("title"), limit(coursesPerPage));

      if (search) {
        q = query(q, where("title", ">=", search), where("title", "<=", search + "\uf8ff"), orderBy("title"), limit(coursesPerPage));
      }

      if (category) {
        q = query(q, where("category", "==", category), orderBy("title"), limit(coursesPerPage));
      }

      if (price) {
        if (price === "free") {
          q = query(q, where("price", "==", 0), orderBy("title"), limit(coursesPerPage));
        } else if (price === "paid") {
          q = query(q, where("price", ">", 0), orderBy("title"), limit(coursesPerPage));
        }
      }

      // Handle pagination
      if (page > 1 && lastVisible) {
        q = query(q, startAfter(lastVisible));
      }

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]); // Update last visible document
        const coursesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData);
      } else {
        setCourses([]);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  // Fetch courses and total pages when filters or page change
  useEffect(() => {
    fetchTotalCourses();
    fetchCourses();
  }, [search, category, price, page]);
  

  return (
    <>
      <NavBar />
      <main className="pt-32 pb-16">
        <section className="mb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 relative">
                  <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="flex flex-wrap gap-4">
                  <select
                    className="modern-input py-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value="">All Categories</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="ai-ml">AI & ML</option>
                  </select>

                  <select
                    className="modern-input py-3"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  >
                    <option value="">All Prices</option>
                    <option value="free">Free</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-2xl font-bold mb-8">Featured Courses</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.length > 0 ? (
                courses.map((course) => <CourseCard key={course.id} course={course} />)
              ) : (
               
                      <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
                 
               
              )}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <button
            className="outline-button-sm"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <i className="fas fa-chevron-left"></i> Prev
          </button>
          <span className="px-4 py-2">
            Page {page} of {totalPages}
          </span>
          <button
            className="outline-button-sm"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            Next <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BrowseCourses;