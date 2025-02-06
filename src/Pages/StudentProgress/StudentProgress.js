import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../../firebase";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";
import ProgressOverviewCard from "../../Components/ProgressOverviewCard/ProgressOverviewCard";
import SearchInput from "../../Components/SearchInput/SearchInput";

const StudentProgress = () => {
  const [user, setUser] = useState(null);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [enrollments, setEnrollments] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [totalStudents, setTotalStudents] = useState(0);
  const [tableRowCount, setTableRowCount] = useState(0); // حالة لتخزين عدد الصفوف في الجدول

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

  // جلب عدد الطلاب من Firestore
  useEffect(() => {
    const fetchTotalStudents = async () => {
      try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("role", "==", "student"));
        const querySnapshot = await getDocs(q);
        setTotalStudents(querySnapshot.size);
      } catch (error) {
        console.error("Error fetching total students:", error);
      }
    };

    fetchTotalStudents();
  }, []);

  // جلب الطلاب
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const usersRef = collection(db, "users");
        const querySnapshot = await getDocs(usersRef);
        const studentsData = [];
        querySnapshot.forEach((doc) => {
          studentsData.push({ id: doc.id, ...doc.data() });
        });
        setStudents(studentsData);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, []);

  // جلب الكورسات الخاصة بالانستراكتور
  useEffect(() => {
    const fetchCourses = async () => {
      if (user) {
        try {
          const coursesRef = collection(db, "courses");
          const q = query(coursesRef, where("instructorId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          const coursesData = [];
          querySnapshot.forEach((doc) => {
            coursesData.push({ id: doc.id, ...doc.data() });
          });
          setCourses(coursesData);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
    };

    fetchCourses();
  }, [user]);

  // جلب التسجيلات
  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const enrollmentsRef = collection(db, "enrollments");
        const querySnapshot = await getDocs(enrollmentsRef);
        const enrollmentsData = [];
        querySnapshot.forEach((doc) => {
          enrollmentsData.push({ id: doc.id, ...doc.data() });
        });
        setEnrollments(enrollmentsData);
      } catch (error) {
        console.error("Error fetching enrollments:", error);
      }
    };

    fetchEnrollments();
  }, []);

  // حساب عدد الصفوف في الجدول
  useEffect(() => {
    const filteredEnrollments = enrollments.filter((enrollment) =>
      courses.some(
        (course) =>
          course.id === enrollment.courseId && course.instructorId === user?.uid
      )
    );
    setTableRowCount(filteredEnrollments.length); // تحديث عدد الصفوف
  }, [enrollments, courses, user]);

  const getStudentName = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    return student ? `${student.firstName} ${student.lastName}` : "Unknown";
  };

  const getStudentEmail = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    return student ? student.email : "Unknown";
  };

  const getCourseName = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    return course ? course.title : "Unknown Course";
  };

  const getCoursePrice = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    return course ? course.price : "Free";
  };

  const getCourseDuration = (courseId) => {
    const course = courses.find((course) => course.id === courseId);
    return course ? course.Duration : "N/A";
  };

  // تحديث قيمة Total Students بناءً على عدد الصفوف في الجدول
  const progressOverview = [
    { icon: "fa-users", value: tableRowCount.toString(), label: "Total Students" },
    { icon: "fa-graduation-cap", value: "85%", label: "Completion Rate" },
    { icon: "fa-clock", value: "4.2h", label: "Avg. Study Time" },
    { icon: "fa-star", value: "92%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeader />

        <div className="container mx-auto px-4 py-8 mt-20">
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
                    <th className="pb-4">Student Name</th>
                    <th className="pb-4">Email</th>
                    <th className="pb-4">Course Name</th>
                    <th className="pb-4">Course Duration</th>
                    <th className="pb-4">Purchase Date</th>
                    <th className="pb-4">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-main-color/10">
                  {enrollments
                    .filter((enrollment) =>
                      courses.some(
                        (course) =>
                          course.id === enrollment.courseId &&
                          course.instructorId === user?.uid
                      )
                    )
                    .map((enrollment) => (
                      <tr key={enrollment.id} className="hover:bg-main-color/5">
                        <td className="py-4">
                          {getStudentName(enrollment.uid)}
                        </td>
                        <td className="py-4">
                          {getStudentEmail(enrollment.uid)}
                        </td>
                        <td className="py-4">
                          {getCourseName(enrollment.courseId)}
                        </td>
                        <td className="py-4">
                          {getCourseDuration(enrollment.courseId)}
                        </td>
                        <td className="py-4">{enrollment.paymentDate}</td>
                        <td className="py-4">
                          {getCoursePrice(enrollment.courseId)}
                        </td>
                      </tr>
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