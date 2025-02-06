import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase"; // ملف تهيئة Firebase
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";
import ProgressOverviewCard from "../../Components/ProgressOverviewCard/ProgressOverviewCard";
import StudentProgressRow from "../../Components/StudentProgressRow/StudentProgressRow";
import SearchInput from "../../Components/SearchInput/SearchInput";

const StudentProgress = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  // الحصول على بيانات المستخدم (الانستراكتور) من Firebase Authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // جلب الكورسات الخاصة بالانستراكتور بناءً على user.uid
  useEffect(() => {
    if (!user) return;
    const fetchCourses = async () => {
      try {
        const coursesRef = collection(db, "courses");
        const q = query(coursesRef, where("course", "array-contains", user.uid));        
        const querySnapshot = await getDocs(q);
        const coursesData = [];
        querySnapshot.forEach((doc) => {
          coursesData.push({ id: doc.id, ...doc.data() });
        });
        console.log("Fetched Courses:", coursesData);
        setCourses(coursesData);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, [user]);

  // جلب الطلبة (التسجيلات) الذين اشتروا الكورس المحدد من Firestore
  useEffect(() => {
    const fetchStudents = async () => {
      if (!selectedCourse) {
        setStudents([]);
        return;
      }
      try {
        const enrollmentsRef = collection(db, "enrollments");
        const q = query(enrollmentsRef, where("courseId", "==", selectedCourse));
        const querySnapshot = await getDocs(q);
        const studentsData = [];
        querySnapshot.forEach((doc) => {
          studentsData.push({ id: doc.id, ...doc.data() });
        });
        console.log("Fetched Students:", studentsData);
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };
    fetchStudents();
  }, [selectedCourse]);

  // بيانات نظرة عامة على التقدم (يمكن تعديلها حسب الحاجة)
  const progressOverview = [
    { icon: "fa-users", value: "1,248", label: "Total Students" },
    { icon: "fa-graduation-cap", value: "85%", label: "Completion Rate" },
    { icon: "fa-clock", value: "4.2h", label: "Avg. Study Time" },
    { icon: "fa-star", value: "92%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeader />
        <div className="container mx-auto px-4 py-8">
          {/* بحث وتصفية الطلبة */}
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex items-center gap-4 flex-wrap">
                <SearchInput />
                <select
                  className="modern-input py-2"
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                >
                  <option value="">All Courses</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex gap-4">
                <button className="outline-button-sm">
                  <i className="fas fa-filter"></i> Filter
                </button>
                <button className="outline-button-sm">
                  <i className="fas fa-download"></i> Export Report
                </button>
              </div>
            </div>
          </div>

          {/* نظرة عامة على التقدم */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {progressOverview.map((item, index) => (
              <ProgressOverviewCard
                key={index}
                icon={item.icon}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>

          {/* قائمة الطلبة */}
          <div className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold mb-6">Student Progress</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-main-color/10">
                    <th className="pb-4">Student</th>
                    <th className="pb-4">Course</th>
                    <th className="pb-4">Progress</th>
                    <th className="pb-4">Last Active</th>
                    <th className="pb-4">Performance</th>
                    <th className="pb-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-main-color/10">
                  {students.map((student) => (
                    <StudentProgressRow/>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentProgress;
