import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Form Data:", formData);
    // Add your login logic here
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <TextInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <CheckboxInput
        label="Remember me"
        name="rememberMe"
        checked={formData.rememberMe}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="gradient-button w-full justify-center py-3 mt-6"
      >
        <i className="fas fa-sign-in-alt"></i>
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
