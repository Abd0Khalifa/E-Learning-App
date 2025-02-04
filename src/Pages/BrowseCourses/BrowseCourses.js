import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../firebase";
import CourseCard from "../../Components/CourseCard/CourseCard";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SearchInput from "../../Components/SearchInput/SearchInput";

const BrowseCourses = () => {
  const [courses, setCourses] = useState([]); // جميع الدورات المسترجعة
  const [filteredCourses, setFilteredCourses] = useState([]); // الدورات المصفاة
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(8); // عدد العناصر في كل صفحة

  // جلب جميع الدورات من Firestore
  const fetchCourses = async () => {
    setLoading(true);
    try {
      let q = collection(db, "courses");

      if (search) {
        q = query(q, where("title", ">=", search), where("title", "<=", search + "\uf8ff"));
      }
      if (category) {
        q = query(q, where("category", "==", category)); 
      }
      if (price) {
        q = query(q, price === "free" ? where("price", "==", 0) : where("price", ">", 0));
      }

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const coursesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCourses(coursesData); 
        setFilteredCourses(coursesData); 
      } else {
        setCourses([]); 
        setFilteredCourses([]);
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [search, category, price]);

  const getPaginatedCourses = () => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredCourses.slice(startIndex, endIndex);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentPage(1); 
  };

  // تغيير السعر
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    setCurrentPage(1); // العودة إلى الصفحة الأولى عند تغيير السعر
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
        <section className="mb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <SearchInput
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onSearch={() => setCurrentPage(1)} // العودة إلى الصفحة الأولى عند البحث
                  />
                </div>

                {/* Filters (Category and Price) */}
                <div className="flex flex-wrap gap-4">
                  {/* Category Dropdown */}
                  <select
                    className="modern-input py-3"
                    value={category}
                    onChange={handleCategoryChange}
                  >
                    <option value="">All Categories</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                    <option value="business">Business</option>
                    <option value="ai-ml">AI & ML</option>
                  </select>

                  {/* Price Dropdown */}
                  <select
                    className="modern-input py-3"
                    value={price}
                    onChange={handlePriceChange}
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

        {/* Display Courses */}
        <section>
          <div className="container mx-auto px-4 sm:px-6">
            <h1 className="text-2xl font-bold mb-8">Featured Courses</h1>
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {getPaginatedCourses().length > 0 ? (
                    getPaginatedCourses().map((course) => (
                      <CourseCard key={course.id} course={course} />
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
    disabled={currentPage * pageSize >= filteredCourses.length}
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

export default BrowseCourses;