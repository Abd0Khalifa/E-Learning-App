import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.js"; 

const LoginForm = () => {
  // Validation schema using Yup
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

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        console.log("User logged in:", user);
        // Redirect or update state as needed
      } catch (error) {
        console.error("Error logging in:", error.message);
        // Handle error (e.g., display error message to the user)
      }
    },
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      {/* Email Input */}
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

      {/* Password Input */}
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

      {/* Remember Me Checkbox */}
      <CheckboxInput
        label="Remember me"
        name="rememberMe"
        checked={formik.values.rememberMe}
        onChange={formik.handleChange}
      />

      {/* Submit Button */}
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
