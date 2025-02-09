import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";
import { useDispatch, useSelector } from "react-redux";

const CourseCard = ({ course, path, title }) => {
  if (!course || typeof course !== "object") {
    return <div className="text-red-500">Error: Course data is missing</div>;
  }
  // const dispatch = useDispatch();
  // const favorites = useSelector((state) => state.courses);
  // const isFavorite = favorites.some((course) => course.id === id);

  // const handleFavoriteToggle = () => {
  //     if (isFavorite) {
  //         dispatch(removeFavorite(id));
  //     } else {
  //         dispatch(addFavorite({ courses }));
  //     }
  // };
  return (
    <div className="course-card group">
      <div className="relative overflow-hidden rounded-xl">
        {course.imageBase64 ? (
          <img
            src={course.imageBase64}
            alt={course.title}
            className="w-full h-48 object-cover rounded-xl"
          />
        ) : (
          <div className="aspect-video bg-gradient-to-br from-main-color/20 to-purple-500/20 flex items-center justify-center p-8">
            {course.icon ? (
              <lord-icon
                src={course.icon}
                trigger="hover"
                colors="primary:#fa329c"
                style={{ width: "120px", height: "120px" }}
              ></lord-icon>
            ) : (
              <span className="text-gray-400">No Image</span>
            )}
          </div>
        )}
      </div>
      <div className="p-6 bg-card-dark rounded-xl mt-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 rounded bg-main-color/10 text-main-color text-xs">
            {course.category || "No Category"}
          </span>
          <span className="text-gray-400 text-sm">
            • {course.Duration || "N/A"}
          </span>
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
          {course.title || "No Title"}
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
          {course.description || "No Description Available"}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-main-color font-bold text-2xl">
              ${course.price || "0.00"}
            </span>
            {course.oldPrice && (
              <span className="text-gray-400 line-through text-sm ml-2">
                ${course.oldPrice}
              </span>
            )}
          </div>
          <Link to={`/${path}/${course.id}`} className="outline-button-sm">
            {title}
          </Link>
          {/* <button
                        className={`btn ${isFavorite ? "btn-danger" : "btn-outline-success"} w-50`}
                        onClick={handleFavoriteToggle}
                    >
                        {isFavorite ? <i className="bi bi-balloon-heart-fill"></i> : <i className="bi bi-balloon-heart"></i>}
                    </button> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
