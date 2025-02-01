import React from "react";

const Pagination = ({ onNext, onPrev, hasMore, hasPrev }) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex gap-2">
        <button
          className={`outline-button-sm ${
            !hasPrev ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={onPrev}
          disabled={!hasPrev}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className={`outline-button-sm ${
            hasMore
              ? "bg-main-color text-white"
              : "opacity-50 cursor-not-allowed"
          }`}
          onClick={onNext}
          disabled={!hasMore}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
