import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const InstractorDashboardWelcomeSection = () => {
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const instructorDocRef = doc(db, "users", user.uid);
        try {
          const instructorDocSnap = await getDoc(instructorDocRef);
          if (instructorDocSnap.exists()) {
            const instructorData = instructorDocSnap.data();
            const fullName = `Prof. ${instructorData.firstName} ${instructorData.lastName}`;
            setUserName(fullName);
          } else {
            setUserName(`Prof. ${user.displayName || "Instructor"}`);
          }
        } catch (error) {
          console.error("Error fetching instructor data:", error);
          setUserName("Prof. Instructor");
        }
      } else {
        setUserName("");
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="glass-card p-6 md:p-8 mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-gray-400">
            Here's what's happening with your courses today
          </p>
        </div>
        <Link to={"/addCourse"} className="gradient-button w-fit ">
          <i class="fas fa-plus"></i>
          Add Course
        </Link>
      </div>
    </div>
  );
};

export default InstractorDashboardWelcomeSection;
