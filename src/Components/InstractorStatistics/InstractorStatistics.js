import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

const InstractorStatistics = () => {
     const [activeCourses, setActiveCourses] = useState(0);
      const [totalStudents, setTotalStudents] = useState(0);
      const [totalEarnings, setTotalEarnings] = useState(0);
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            try {
              setIsLoading(true);
  
              const coursesQuery = query(
                collection(db, "courses"),
                where("instructorId", "==", user.uid)
              );
              const coursesSnapshot = await getDocs(coursesQuery);
    
              setActiveCourses(coursesSnapshot.size);
    
              let totalStudentsCount = 0;
              let totalEarningsAmount = 0;
    
              const courseIds = coursesSnapshot.docs.map((doc) => doc.id);
    
              if (courseIds.length > 0) {
  
                const enrollmentsQuery = query(
                  collection(db, "enrollments"),
                  where("courseId", "in", courseIds) 
                );
                const enrollmentsSnapshot = await getDocs(enrollmentsQuery);
    
                totalStudentsCount = enrollmentsSnapshot.size;
                enrollmentsSnapshot.forEach((doc) => {
                  totalEarningsAmount += doc.data().price || 0; 
                });
              }
    
              setTotalStudents(totalStudentsCount);
              setTotalEarnings(totalEarningsAmount);
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
        <div className="glass-card p-6">
            <h3 className="text-xl font-bold mb-6">Teaching Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">{activeCourses}</div>
                    <div className="text-gray-400">Active Courses</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">{totalStudents}</div>
                    <div className="text-gray-400">Total Students</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">4.8</div>
                    <div className="text-gray-400">Average Rating</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl font-bold text-main-color mb-2">${totalEarnings}</div>
                    <div className="text-gray-400">Total Earnings</div>
                </div>
            </div>
        </div>
    );
};

export default InstractorStatistics;
