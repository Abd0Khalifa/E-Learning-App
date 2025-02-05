import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../../Components/TextInput/TextInput";
import PasswordInput from "../../Components/PasswordInput/PasswordInput";
import CheckboxInput from "../../Components/CheckboxInput/CheckboxInput";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase.js";
import { doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/authSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Listen for authentication changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || "Anonymous",
            photoURL: user.photoURL || "",
          })
        );
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [dispatch]);

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z0-9 ]+$/, "No special characters allowed")
      .min(3, "Please enter more than 2 characters"),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z0-9 ]+$/, "No special characters allowed")
      .min(2, "Please enter more than 2 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(12, "Password must not exceed 12 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    role: Yup.string()
      .required("Role is required")
      .oneOf(["student", "instructor"], "Invalid role selected"),
    agreeTerms: Yup.boolean().oneOf(
      [true],
      "You must agree to the terms and conditions"
    ),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      agreeTerms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        const user = userCredential.user;

        // Save user to Firestore
        const userData = {
          uid: user.uid,
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          role: values.role,
          createdAt: new Date().toISOString(),
        };

        await setDoc(doc(db, "users", user.uid), userData);

        // Dispatch to Redux store
        dispatch(setUser(userData));

        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: "You have been successfully registered!",
        });

        // Redirect to dashboard
        navigate("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      }
    },
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <TextInput
            label="First Name"
            type="text"
            placeholder="John"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-red-500 text-sm">
              {formik.errors.firstName}
            </div>
          )}
        </div>
        <div>
          <TextInput
            label="Last Name"
            type="text"
            placeholder="Doe"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
          )}
        </div>
      </div>

      <TextInput
        label="Email Address"
        type="email"
        placeholder="john.doe@example.com"
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
        placeholder="Create a strong password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password && (
        <div className="text-red-500 text-sm">{formik.errors.password}</div>
      )}

      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm your password"
        name="confirmPassword"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && (
        <div className="text-red-500 text-sm">
          {formik.errors.confirmPassword}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Role
        </label>
        <select
          name="role"
          value={formik.values.role}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full p-2 border border-gray-300 rounded-md modern-input"
        >
          <option value="">Select Role</option>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>
        {formik.touched.role && formik.errors.role && (
          <div className="text-red-500 text-sm">{formik.errors.role}</div>
        )}
      </div>

      <CheckboxInput
        label="I agree to the Terms of Service and Privacy Policy"
        name="agreeTerms"
        checked={formik.values.agreeTerms}
        onChange={formik.handleChange}
      />
      {formik.touched.agreeTerms && formik.errors.agreeTerms && (
        <div className="text-red-500 text-sm">{formik.errors.agreeTerms}</div>
      )}

      <br />

      <Link
        to="/login"
        className="text-sm text-white-500 hover:text-blue-600 transition duration-300"
      >
        I already have an account
      </Link>

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
