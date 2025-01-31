import React from "react";
import { useFormik } from "formik";
import TextInput from "../../Components/TextInput/TextInput";
import PasswordInput from "../../Components/PasswordInput/PasswordInput";
import CheckboxInput from "../../Components/CheckboxInput/CheckboxInput";
import * as Yup from "yup"

const RegisterForm = () => {

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("First Name is required")
      .matches(/^[A-Za-z0-9 ]+$/, "No special characters allowed").min(3,'Please enter more that 2 inputs'),
    lastName: Yup.string()
      .required("Last Name is required")
      .matches(/^[A-Za-z0-9 ]+$/, "No special characters allowed").min(2,'Please enter more that 2 inputs'),
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
    agreeTerms: Yup.boolean()
      .oneOf([true], "You must agree to the terms and conditions"),
  });
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Registration Form Data:", values);
    },
  });

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit} noValidate>
      <div className="grid grid-cols-2 gap-4">
        <div>        <TextInput
          label="First Name"
          type="text"
          placeholder="John"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
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
        <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
      )}

      <CheckboxInput
        label="I agree to the Terms of Service and Privacy Policy"
        name="agreeTerms"
        checked={formik.values.agreeTerms}
        onChange={formik.handleChange}
      />
      {formik.touched.agreeTerms && formik.errors.agreeTerms && (
        <div className="text-red-500 text-sm">{formik.errors.agreeTerms}</div>
      )}

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
