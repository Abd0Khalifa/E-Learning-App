
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import React, { useState } from "react";

import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

const LoginForm = () => {

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password must not exceed 12 characters"),
    rememberMe: Yup.boolean(),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Login Form Data:", values);
    },
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>

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

        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <div className="text-red-500 text-sm">{formik.errors.email}</div>
      )}

        value={formData.email}
        onChange={handleChange}
        required
      />


      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        name="password"

        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <div className="text-red-500 text-sm">{formik.errors.password}</div>
      )}

        value={formData.password}
        onChange={handleChange}
        required
      />


      <CheckboxInput
        label="Remember me"
        name="rememberMe"

        checked={formik.values.rememberMe}
        onChange={formik.handleChange}

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
