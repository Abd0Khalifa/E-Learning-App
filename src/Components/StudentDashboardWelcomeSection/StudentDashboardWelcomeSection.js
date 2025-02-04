import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const StudentDashboardWelcomeSection = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const fullName = `${userData.firstName} ${userData.lastName}`;
          setUserName(fullName);
        } else {
          setUserName(user.displayName || "User");
        }
      } else {
        setUserName("Guest");
      }
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
          <p className="text-gray-400">Pick up where you left off</p>
        </div>
        <Link to={"/MyCourses"} className="gradient-button w-fit ">
          <FontAwesomeIcon icon={faBagShopping} />
          My Courses
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboardWelcomeSection;
