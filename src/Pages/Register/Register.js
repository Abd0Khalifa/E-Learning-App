import React from "react";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 max-w-md relative z-10 mt-40">
      <div className="glass-card bg-card-dark rounded-2xl p-8 backdrop-blur-xl login-box">
        <div className="text-center mb-8 ">
          <h1 className="text-3xl font-black gradient-text mb-2">SkillStack</h1>
          <p className="text-gray-400">Create your account to start learning</p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
