import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-2">
        <button className="outline-button-sm opacity-50 cursor-not-allowed">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="outline-button-sm bg-main-color text-white border-main-color">
          1
        </button>
        <button className="outline-button-sm">2</button>
        <button className="outline-button-sm">3</button>
        <button className="outline-button-sm">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
