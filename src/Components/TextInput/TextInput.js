import React from "react";

const TextInput = ({
  label,
  type,
  placeholder,
  name,
  value,
  onChange,
  required,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        className="modern-input"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
