import {
  faSignInAlt,
  faSignOutAlt,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import avatar from "../../images/avatar.png";
import { toggleLang } from "../../Redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    avatar: avatar,
    role: "",
  });
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.auth.lang);
  const navigate = useNavigate();

  const translations = currentLang === "ar" ? ar : en;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsLoggedIn(true);
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        if (userDocSnap.exists()) {
          const userData = userDocSnap.data();
          setUser({
            firstName: userData.firstName,
            lastName: userData.lastName,
            avatar: avatar,
            role: userData.role,
          });
        } else {
          setUser({
            firstName: "User",
            lastName: "",
            avatar: avatar,
          });
        }
      } else {
        setIsLoggedIn(false);
        setUser(null);
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
    <header id="mainHeader">
      <div className="bg-card-dark/80 backdrop-blur-xl border-b border-main-color/10">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Link to="/" className="text-3xl font-black gradient-text">
                SkillStack
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <Link
                    className="hidden md:flex flex items-center gap-2 border border-gray-300 py-1 px-3 rounded-2xl"
                    to={user?.role === "student" ? "/sProfile" : "/iProfile"}
                  >
                    <img
                      src={user?.avatar}
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full border border-gray-300"
                    />
                    <span className="text-white hidden md:block">
                      {user?.firstName} {user?.lastName}
                    </span>
                  </Link>

                  <Link
                    className="hidden md:block gradient-button-sm"
                    to={
                      user?.role === "student" ? "/sDashboard" : "/iDashboard"
                    }
                  >
                    <i className="fa-solid fa-gauge"></i>
                    <span className="hidden md:flex">
                      {translations.dashboard}
                    </span>
                  </Link>
                  <button className="outline-button-sm" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="hidden md:flex">
                      {translations.logout}
                    </span>
                  </button>
                  <div>
                    <button
                      onClick={() => dispatch(toggleLang())}
                      className="outline-button-sm lang-button"
                    >
                      {currentLang === "ar" ? "EN" : "AR"}
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    className="outline-button-sm hidden md:flex"
                    to={"/login"}
                  >
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span className="hidden md:flex">
                      {translations.sign_in}
                    </span>
                  </Link>
                  <Link className="gradient-button-sm" to={"/signup"}>
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <span className="hidden md:flex">
                      {translations.start_free}
                    </span>
                  </Link>
                  <button
                    onClick={() => dispatch(toggleLang())}
                    className="outline-button-sm lang-button"
                  >
                    {currentLang}
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
