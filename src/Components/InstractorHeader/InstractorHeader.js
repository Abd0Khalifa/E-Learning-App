import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faTachometerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../images/avatar.png";

const InstructorHeader = () => {
  const [userName, setUserName] = useState("Loading...");
  const [userRole, setUserRole] = useState("");
  const [avatarImage, setAvatarImage] = useState(avatar);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          const fullName = `${userData.firstName} ${userData.lastName}`;
          setUserName(fullName);
          setUserRole(userData.role);
          setAvatarImage(userData.avatar || avatar);
        } else {
          setUserName(user.displayName || "User");
          setUserRole("");
        }
      } else {
        setUserName("Guest");
        setUserRole("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <header id="">
      <div className="bg-card-dark/80 backdrop-blur-xl border-b border-main-color/10">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center gap-4">
              {userRole && userRole === "instructor" && (
                <div className="flex items-center gap-3">
                  <Link
                    className="hidden md:flex flex items-center gap-2 border border-gray-300 py-1 px-3 rounded-2xl"
                    to={"/iProfile"}
                  >
                    <img
                      src={avatarImage}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <span className="text-white hidden md:block">
                      {userName}
                    </span>
                  </Link>

                  <Link
                    className="hidden md:block gradient-button-sm"
                    to={"/iDashboard"}
                  >
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <span className="hidden md:flex">Dashboard</span>
                  </Link>

                  <button className="outline-button-sm" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="hidden md:flex">Logout</span>
                  </button>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default InstructorHeader;
