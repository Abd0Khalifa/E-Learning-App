import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("You must enter your email")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("You must enter the password")
    .min(6, "Your password must be at least 6 characters")
    .max(8, "Your password must not exceed 8 characters")
    .matches(/^[A-Z][a-z0-9]{5,7}$/, "Password must start with an uppercase letter"),
});

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Login successful", values);
      resetForm();
    },
  });


import React from "react";

export default function Login() {

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 flex justify-center items-center px-4 sm:px-6">
      <div className="max-w-screen-xl w-full bg-gray-800 shadow-lg sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Login
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="flex flex-col items-center">

                <button className="outline-button-sm w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-700 text-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:bg-gray-600 hover:shadow">
                  <FontAwesomeIcon icon={faGoogle} />
                  <span className="ml-2">Login with Google</span>

                <button className="outline-button-sm w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-700 text-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:bg-gray-600 hover:shadow focus:shadow-sm focus:shadow-outline">
                  <FontAwesomeIcon icon={faGoogle} />
                  Login with Google

                </button>
              </div>
              <div className="my-12 border-b border-gray-600 text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-400 tracking-wide font-medium bg-gray-800 transform translate-y-1/2">
                  Or login with e-mail

                </div>
              </div>
              <form className="mx-auto max-w-xs" onSubmit={formik.handleSubmit} noValidate>
                <div>
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-700 border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-gray-600 text-gray-300"
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div className="mt-5">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-700 border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-gray-600 text-gray-300"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.password && formik.errors.password && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.password}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-gray-100 w-full py-4 rounded-lg hover:from-purple-500 hover:to-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <span className="ml-3">Login</span>
                </button>
              </form>

              <p className="mt-6 text-xs text-gray-400 text-center">
                Don't have an account?{" "}
                <a href="/signup" className="text-purple-400 hover:underline">
                  Sign up
                </a>
              </p>

                </div>
              </div>
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-700 border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-gray-600 text-gray-300"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-700 border border-gray-600 placeholder-gray-400 text-sm focus:outline-none focus:border-purple-400 focus:bg-gray-600 text-gray-300 mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-gradient-to-r from-purple-400 to-pink-600 text-gray-100 w-full py-4 rounded-lg hover:from-purple-500 hover:to-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">Login</span>
                </button>
                <p className="mt-6 text-xs text-gray-400 text-center">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-purple-400 hover:underline">
                    Sign up
                  </a>
                </p>
              </div>

            </div>
          </div>
        </div>
        <div
          className="flex-1 min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
}
