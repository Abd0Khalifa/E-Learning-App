import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../TextInput/TextInput";
import PasswordInput from "../PasswordInput/PasswordInput";
import CheckboxInput from "../CheckboxInput/CheckboxInput";

import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase.js";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom"; // Enable navigation

import { Link } from "react-router-dom";


const LoginForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
          })
        );
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

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
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: async (values) => {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || "Anonymous",
            photoURL: user.photoURL || "",
          })
        );

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been successfully logged in!",
        });
        // navigate("/dashboard");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      }
    },
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
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

      <br/>

      <Link to="/signup" className="text-sm text-white-500 hover:text-blue-600 transition duration-300">
        I don't have an account yet
      </Link>

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
