import React from "react";

const NavBar = () => {
  return (
    <header
      className="fixed w-full z-50 transition-all duration-300"
      id="mainHeader"
    >
      <div className="bg-card-dark/80 backdrop-blur-xl border-b border-main-color/10">
        <div className="container mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="text-3xl font-black gradient-text">
                SkillStack
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="outline-button-sm hidden md:flex">
                <i className="fas fa-sign-in-alt"></i>
                <span className="hidden md:flex">Sign In</span>
              </button>
              <button className="gradient-button-sm">
                <i className="fas fa-user-graduate"></i>
                <span className="hidden md:flex">Start Free</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
