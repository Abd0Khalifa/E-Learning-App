import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../firebase"; // تأكد أن المسار صحيح
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const StudentHeader = () => {
  const [userName, setUserName] = useState("Loading...");

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
    <header className="bg-card-dark border-b border-main-color/10 p-4 sticky top-0 z-30">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4 w-full md:w-auto"></div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} className="text-main-color" />
            </div>
            <span className="font-medium hidden md:inline">{userName}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;
