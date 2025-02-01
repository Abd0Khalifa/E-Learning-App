import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
    <NavBar />
    <div className="container mx-auto px-4 sm:px-6 max-w-md relative z-10 mt-40">
      <div className="glass-card bg-card-dark rounded-2xl p-8 backdrop-blur-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black gradient-text mb-2">SkillStack</h1>
          <p className="text-gray-400">
            Welcome back! Please login to continue
          </p>
        </div>
        <LoginForm />
        <br/>
        
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Login;
