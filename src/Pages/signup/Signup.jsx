import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

let validation = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Minimum length is 3')
    .max(10, 'Maximum length is 10'),
  email: Yup.string()
    .required('Email is required')
    .email('Enter a valid email'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^01[1250][0-9]{8}$/, 'Phone number is not valid'),
  password: Yup.string()
    .required('Password is required')
    .matches(/^[A-Z][a-z0-9]{6,8}$/, 'Password not valid'),
  rePassword: Yup.string()
    .required('RePassword is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
});

export default function Signup() {
  const handleRegister = (values, { resetForm }) => {
    console.log('Registration', values);
    resetForm(); // إعادة تعيين الحقول إلى حالتها الأولية
  };

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    onSubmit: handleRegister,
    validationSchema: validation,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-6">
      <div className="bg-gray-800 rounded-2xl p-8 backdrop-blur-xl w-full max-w-xl"> {/* زيادة العرض إلى max-w-xl */}
        <h2 className="text-center text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          EduFlow
        </h2>
        <p className="text-center text-gray-400 text-lg mb-8">
          Create your account to start learning
        </p>

        {/* Social Registration Buttons */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button className="flex items-center justify-center py-3 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 text-base">
            <i className="fab fa-google mr-2"></i>
            Google
          </button>
          <button className="flex items-center justify-center py-3 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700 text-base">
            <i className="fab fa-github mr-2"></i>
            GitHub
          </button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gray-800 px-4 text-sm text-gray-400">
              Or register with email
            </span>
          </div>
        </div>

        {/* Registration Form */}
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                First Name
              </label>
              <input
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="John"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-purple-400 text-base"
                required
              />
              {formik.touched.name && formik.errors.name && (
                <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Doe"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-purple-400 text-base"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="john.doe@example.com"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-purple-400 text-base"
              required
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Create a strong password"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-purple-400 pr-12 text-base"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400"
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            )}
            <div className="mt-2">
              <div className="flex gap-2 items-center text-sm text-gray-400">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>At least 8 characters</span>
              </div>
              <div className="flex gap-2 items-center text-sm text-gray-400">
                <i className="fas fa-check-circle text-green-500"></i>
                <span>Contains numbers and special characters</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-purple-400 pr-12 text-base"
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-purple-400"
              >
                <i className="fas fa-eye"></i>
              </button>
            </div>
            {formik.touched.rePassword && formik.errors.rePassword && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.rePassword}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="01XXXXXXXXX"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-purple-400 text-base"
              required
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="terms"
              className="mt-1.5 w-5 h-5 rounded border-gray-600 text-purple-400 focus:ring-purple-400 bg-transparent"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-400">
              I agree to the{' '}
              <a href="#" className="text-purple-400 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-400 hover:underline">
                Privacy Policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full justify-center py-3 mt-6 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded-lg hover:from-purple-500 hover:to-pink-700 text-lg font-semibold"
          >
            <i className="fas fa-user-plus mr-2"></i>
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-6 text-gray-400 text-base">
          Already have an account?{' '}
          <a href="login.html" className="text-purple-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}