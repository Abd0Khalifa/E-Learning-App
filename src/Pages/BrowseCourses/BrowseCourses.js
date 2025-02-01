import React, { useState } from "react";
import "./BrowseCourses.css";
import CourseCard from "../../Components/CourseCard/CourseCard";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import SearchInput from "../../Components/SearchInput/SearchInput";

const coursesData = [
  {
    id: 1,
    category: "Development",
    title: "Web Development Masterclass",
    description:
      "Master modern web development with hands-on projects and real-world applications.",
    duration: "12 weeks",
    price: 49.99,
    oldPrice: 99.99,
    reviews: "2.5k",
    rating: 4.5,
    badge: "Bestseller",
    icon: "https://cdn.lordicon.com/qtqvorle.json",
  },
  {
    id: 2,
    category: "AI & ML",
    title: "AI & Machine Learning",
    description:
      "Learn AI fundamentals and build intelligent applications with Python.",
    duration: "8 weeks",
    price: 69.99,
    oldPrice: 129.99,
    reviews: "1.2k",
    rating: 5,
    badge: "New",
    icon: "https://cdn.lordicon.com/cnbtojmk.json",
  },
  {
    id: 3,
    category: "Design",
    title: "Digital Art & Design",
    description:
      "Create stunning digital artwork and master design principles.",
    duration: "6 weeks",
    price: 39.99,
    oldPrice: 79.99,
    reviews: "950",
    rating: 4,
    icon: "https://cdn.lordicon.com/wloilxuq.json",
  },
  {
    id: 4,
    category: "Business",
    title: "Business Fundamentals",
    description:
      "Learn essential business concepts and entrepreneurship skills.",
    duration: "4 weeks",
    price: 0,
    oldPrice: null,
    reviews: "750",
    rating: 4.5,
    badge: "Free",
    icon: "https://cdn.lordicon.com/gqdnbnwt.json",
  },
];

const BrowseCourses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [price, setPrice] = useState("");

  const filteredCourses = coursesData.filter((course) => {
    return (
      course.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || course.category === category) &&
      (price === "" ||
        (price === "free" && course.price === 0) ||
        (price === "paid" && course.price > 0))
    );
  });

  return (
    <>
    <NavBar/>
    <main className="pt-32 pb-16">
      <section className="mb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search Bar */}
              <div className="flex-1 relative">
              <SearchInput />
                </div>
              {/* Filter Options */}
              <div className="flex flex-wrap gap-4">
                <select
                  className="modern-input py-3"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Category</option>
                  <option value="Development">Development</option>
                  <option value="Design">Design</option>
                  <option value="Business">Business</option>
                  <option value="AI & ML">AI & ML</option>
                </select>
                <select
                  className="modern-input py-3"
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="">Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
                <select
                  className="modern-input py-3"
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="">Price</option>
                  <option value="free">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <section>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Featured Courses</h1>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          <div className="flex justify-center mt-12">
            <div className="flex gap-2">
              <button className="outline-button-sm opacity-50 cursor-not-allowed">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button className="outline-button-sm bg-main-color text-white border-main-color">
                1
              </button>
              <button className="outline-button-sm">2</button>
              <button className="outline-button-sm">3</button>
              <button className="outline-button-sm">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer/>
    </>
    
  );
};

export default BrowseCourses;
