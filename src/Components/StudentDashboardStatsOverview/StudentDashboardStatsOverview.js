import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCertificate,
  faClock,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const StudentDashboardStatsOverview = () => {
  const [activeCourses, setActiveCourses] = useState(0);
  const [learningTime, setLearningTime] = useState("28h");
  const [certificates, setCertificates] = useState(0);
  const [avgScore, setAvgScore] = useState("85%");
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUserId(firebaseUser.uid);
      } else {
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchStats = async () => {
    setLoading(true);
    try {
      if (!userId) {
        console.log("No user logged in.");
        return;
      }

      // Fetch enrollments for the logged-in student
      const enrollmentsRef = collection(db, "enrollments");
      const enrollmentsQuery = query(
        enrollmentsRef,
        where("uid", "==", userId)
      );
      const enrollmentsSnapshot = await getDocs(enrollmentsQuery);

      setActiveCourses(enrollmentsSnapshot.size);

      // Fetch certificates for the logged-in student
      const certificatesRef = collection(db, "certificates");
      const certificatesQuery = query(
        certificatesRef,
        where("uid", "==", userId)
      );
      const certificatesSnapshot = await getDocs(certificatesQuery);

      setCertificates(certificatesSnapshot.size);

      // Placeholder logic for learning time and average score
      setLearningTime("28h");
      setAvgScore("85%");
    } catch (error) {
      console.error("Error fetching student stats:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [userId]);

  if (loading) {
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
      {/* Active Courses */}
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

      {/* Learning Time */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faClock}
              className="text-xl text-main-color"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">{learningTime}</div>
            <div className="text-gray-400">Learning Time</div>
          </div>
        </div>
      </div>

      {/* Certificates */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faCertificate}
              className="text-xl text-main-color"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">{certificates}</div>
            <div className="text-gray-400">Certificates</div>
          </div>
        </div>
      </div>

      {/* Average Score */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-main-color/20 flex items-center justify-center">
            <FontAwesomeIcon
              icon={faStar}
              className="text-xl text-main-color"
            />
          </div>
          <div>
            <div className="text-2xl font-bold">{avgScore}</div>
            <div className="text-gray-400">Avg. Score</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboardStatsOverview;
