import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../firebase";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import CourseCard from "../CourseCard/CourseCard";

const FeaturedCourses = () => {
  const lang = useSelector((state) => state.auth.lang);
  const translations = lang === "ar" ? ar : en;

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const coursesRef = collection(db, "courses");
        const querySnapshot = await getDocs(coursesRef);

        if (!querySnapshot.empty) {
          const coursesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          const randomCourses = getRandomCourses(coursesData, 3);
          setCourses(randomCourses);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const getRandomCourses = (courseList, n) => {
    const shuffled = [...courseList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section id="courses" className="py-24" dir="ltr">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-4 py-2 rounded-full bg-main-color/10 text-main-color text-sm font-medium inline-block mb-4">
            <i className="fas fa-sparkles mr-2"></i>
            {translations.top_rated}
          </span>
          <h2 className="text-4xl font-bold mb-4">
            <span className="gradient-text">
              {translations.featured_courses}
            </span>
          </h2>
          <p className="text-gray-400">{translations.description}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              path={"courseDetails"}
              title={translations.show_details}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
