import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
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

  // دالة البحث الفوري
  const handleSearch = async () => {
    try {
      let q = query(collection(db, "courses"));

      // تصفية حسب العنوان
      if (search) {
        q = query(q, where("title", ">=", search), where("title", "<=", search + "\uf8ff"));
      }

      // تصفية حسب الفئة (إذا تم اختيار فئة)
      if (category) {
        q = query(q, where("category", "==", category));
      }

      // تصفية حسب السعر
      if (price) {
        if (price === "free") {
          q = query(q, where("price", "==", 0)); // إذا كان السعر مجاني
        } else if (price === "paid") {
          q = query(q, where("price", ">", 0)); // إذا كان السعر مدفوع
        }
      }

      console.log("Current Category:", category); // طباعة قيمة الفئة
      console.log("Query:", q); // طباعة الاستعلام

      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const coursesData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Fetched Courses:", coursesData); // طباعة البيانات التي تم جلبها
        setCourses(coursesData);
      } else {
        console.log("No courses found"); // إذا لم يتم العثور على نتائج
        setCourses([]);
      }
    } catch (error) {
      console.error("Error searching courses:", error);
    }
  };

  // عند تغيير أي من عوامل التصفية (العنوان، الفئة، السعر)، قم بالبحث الفوري
  useEffect(() => {
    handleSearch();
  }, [search, category, price]);

  return (
    <>
      <NavBar />
      <main className="pt-32 pb-16">
        <section className="mb-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="glass-card p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 relative">
                  {/* حقل البحث عن العنوان */}
                  <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="flex flex-wrap gap-4">
                  {/* تصفية حسب الفئة */}
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

                  {/* تصفية حسب السعر */}
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
                <p>No courses found</p>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BrowseCourses;