import React from "react";

const SearchInput = ({ value, onChange, onSearch }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        className="modern-input w-full"
        placeholder="Search courses..."
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-main-color"
        onClick={onSearch}
      >
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
};

export default SearchInput;