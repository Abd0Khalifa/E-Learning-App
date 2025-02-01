import { faSignInAlt, faSignOutAlt, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = {
    name: "Ahmed",
    avatar: "https://i.pravatar.cc/40", 
  };

  return (
    <header id="mainHeader">
      <div className="bg-card-dark/80 backdrop-blur-xl border-b border-main-color/10">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-black gradient-text">
                SkillStack
              </div>
            </div>

            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <Link to={"/sProfile"}>
                  <img
                    src={user.avatar}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full border border-gray-300"
                  />
                  </Link>
                
                  <span className="text-white hidden md:block">Hello, {user.name}</span>
                  <button
                    className="outline-button-sm"
                    onClick={() => setIsLoggedIn(false)}
                  >
                  <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="hidden md:flex">Logout</span>
                  </button>
                </div>
              ) : (
                <>
                  <Link className="outline-button-sm hidden md:flex" to={"/login"}>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span className="hidden md:flex">Sign In</span>
                  </Link>
                  <Link
                    className="gradient-button-sm"
                    onClick={() => setIsLoggedIn(true)}
                  >
                    <FontAwesomeIcon icon={faUserGraduate} />
                    <span className="hidden md:flex">Start Free</span>
                  </Link>
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
