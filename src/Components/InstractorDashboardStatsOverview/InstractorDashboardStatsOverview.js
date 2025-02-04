import {
  faBook,
  faDollarSign,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const InstractorDashboardStatsOverview = () => {
  const [activeCourses, setActiveCourses] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const coursesQuery = query(
            collection(db, "courses"),
            where("instructorId", "==", user.uid)
          );
          const coursesSnapshot = await getDocs(coursesQuery);

          setActiveCourses(coursesSnapshot.size);

          let totalStudentsCount = 0;
          coursesSnapshot.forEach((courseDoc) => {
            const enrollmentsQuery = query(
              collection(db, "enrollments"),
              where("courseId", "==", courseDoc.id)
            );
            const enrollmentsSnapshot = getDocs(enrollmentsQuery);
            totalStudentsCount += enrollmentsSnapshot.size;
          });

          setTotalStudents(totalStudentsCount);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    });
    return () => unsubscribe();
  }, []);
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="glass-card p-6 animate-pulse">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-main-color/20"></div>
              <div>
                <div className="h-8 bg-gray-700 rounded w-16 mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-24"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBook}
              className="text-xl text-main-color"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">{activeCourses}</div>
            <div className="text-gray-400">Active Courses</div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-xl text-main-color"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">{totalStudents}</div>
            <div className="text-gray-400">Total Students</div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faStar}
              className="text-xl text-main-color"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">4.8</div>
            <div className="text-gray-400">Avg. Rating</div>
          </div>
        </div>
      </div>

      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-xl text-main-color"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">$2,450</div>
            <div className="text-gray-400">Monthly Earnings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstractorDashboardStatsOverview;
