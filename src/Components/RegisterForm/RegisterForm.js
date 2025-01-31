import React, { useState } from "react";
import TextInput from "../../Components/TextInput/TextInput";
import PasswordInput from "../../Components/PasswordInput/PasswordInput";
import CheckboxInput from "../../Components/CheckboxInput/CheckboxInput";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registration Form Data:", formData);
    // Add your registration logic here
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          label="First Name"
          type="text"
          placeholder="John"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <TextInput
          label="Last Name"
          type="text"
          placeholder="Doe"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <TextInput
        label="Email Address"
        type="email"
        placeholder="john.doe@example.com"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <PasswordInput
        label="Password"
        placeholder="Create a strong password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <CheckboxInput
        label="I agree to the Terms of Service and Privacy Policy"
        name="agreeTerms"
        checked={formData.agreeTerms}
        onChange={handleChange}
        required
        linkText="Terms of Service"
        linkHref="#"
      />

      <button
        type="submit"
        className="gradient-button w-full justify-center py-3 mt-6"
      >
        <i className="fas fa-user-plus"></i>
        Create Account
      </button>
    </form>
  );
};

export default RegisterForm;
