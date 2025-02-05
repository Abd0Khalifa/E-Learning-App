import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const StudentStatistics = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [learningTime, setLearningTime] = useState(0); 
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

  useEffect(() => {
    const fetchCoursesData = async () => {
      if (!userId) return;

      const enrollmentsRef = collection(db, "enrollments");
      const q = query(enrollmentsRef, where("uid", "==", userId));
      const querySnapshot = await getDocs(q);

      setCoursesCount(querySnapshot.size); 

      if (querySnapshot.empty) {
        setLearningTime(0); 
        return;
      }

      const courseIds = querySnapshot.docs.map((doc) => doc.data().courseId);

      if (courseIds.length > 0) {
        let totalHours = ''; 

        for (const courseId of courseIds) {
          const courseRef = doc(db, "courses", courseId);
          const courseSnapshot = await getDoc(courseRef);

          if (courseSnapshot.exists()) {
            const courseData = courseSnapshot.data();
            totalHours += courseData.duration || 0;
          }
        }

        setLearningTime(totalHours); 
      } else {
        setLearningTime(0);
      }
    };

    fetchCoursesData();
  }, [userId]);

  return (
    <div className="glass-card p-6">
      <h3 className="text-xl font-bold mb-6">Learning Statistics</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-main-color mb-2">
            {coursesCount}
          </div>
          <div className="text-gray-400">Active Courses</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-main-color mb-2">
            {learningTime}h
          </div>
          <div className="text-gray-400">Learning Time</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-main-color mb-2">3</div>
          <div className="text-gray-400">Certificates</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-main-color mb-2">85%</div>
          <div className="text-gray-400">Avg. Score</div>
        </div>
      </div>
    </div>
  );
};

export default StudentStatistics;