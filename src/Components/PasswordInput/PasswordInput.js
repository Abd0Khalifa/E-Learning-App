import React, { useState } from "react";

const PasswordInput = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  required,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          className="modern-input pr-12"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
        />
        <button
          type="button"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-main-color"
          onClick={togglePasswordVisibility}
        >
          <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
