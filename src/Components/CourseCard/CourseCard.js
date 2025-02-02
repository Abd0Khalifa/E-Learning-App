import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = ({ course }) => {
  return (
    <div className="course-card group">
      <div className="relative overflow-hidden rounded-xl">
        {course.imageBase64 ? (
          <img src={course.imageBase64} alt={course.title} className="w-full h-48 object-cover rounded-xl" />
        ) : (
          <div className="aspect-video bg-gradient-to-br from-main-color/20 to-purple-500/20 flex items-center justify-center p-8">
            <lord-icon src={course.icon} trigger="hover" colors="primary:#fa329c" style={{ width: "120px", height: "120px" }}></lord-icon>
          </div>
        )}
      </div>
      <div className="p-6 bg-card-dark rounded-xl mt-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 rounded bg-main-color/10 text-main-color text-xs">
            {course.category}
          </span>
          <span className="text-gray-400 text-sm">• {course.Duration}</span>
        </div>
        <h3
  className="text-white mt-2"
  style={{
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    lineHeight: "1.5",
    fontSize: "1.25rem",
    fontWeight: "600",
  }}
>
  {course.title}
</h3>
<p
  className="text-gray-400 text-sm"
  style={{
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    lineHeight: "1.5",
  }}
>
  {course.description}
</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-main-color font-bold text-2xl">${course.price}</span>
            {course.oldPrice && (
              <span className="text-gray-400 line-through text-sm ml-2">${course.oldPrice}</span>
            )}
          </div>
          <Link to={`/courseDetails/${course.id}`} className="outline-button-sm">
            <i className="fas fa-shopping-cart"></i>
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
