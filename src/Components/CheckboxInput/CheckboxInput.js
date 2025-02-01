import React from "react";

const CheckboxInput = ({
  label,
  name,
  checked,
  onChange,
  required,
  linkText,
  linkHref,
}) => {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={name}
        className=" w-4 h-4 rounded border-gray-600 text-main-color focus:ring-main-color bg-transparent"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
      />
      <label htmlFor={name} className="text-sm text-gray-400">
        {label}{" "}
        {linkText && (
          <a href={linkHref} className="text-main-color hover:underline">
            {linkText}
          </a>
        )}
      </label>
    </div>
  );
};

export default CheckboxInput;
