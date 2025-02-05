import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Swal from "sweetalert2";
import { Link } from "react-router-dom"; // Import Link for navigation

const CourseItem = ({ course, onDelete }) => {
  const handleDelete = async () => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this course!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (confirm.isConfirmed) {
      try {
        await deleteDoc(doc(db, "courses", course.id));
        Swal.fire("Deleted!", "Your course has been deleted.", "success");
        onDelete(course.id);
      } catch (error) {
        Swal.fire(
          "Error!",
          `Failed to delete course: ${error.message}`,
          "error"
        );
        console.error("Delete Error:", error);
      }
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Course Image */}
        <div className="w-full md:w-64 flex-shrink-0">
          {course.imageBase64 ? (
            <img
              src={course.imageBase64}
              alt={course.title}
              className="w-full rounded-xl"
            />
          ) : (
            <div className="aspect-video bg-gradient-to-br from-main-color/20 to-purple-500/20 rounded-xl flex items-center justify-center">
              <i className="fas fa-book text-gray-300 text-3xl"></i>
            </div>
          )}
        </div>

        {/* Course Details */}
        <div className="flex-grow">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-main-color/10 text-main-color text-xs">
                  {course.category}
                </span>
                <span className="text-gray-400 text-sm">• {course.level}</span>
                <span className="text-green-500 text-sm font-semibold">
                  ${course.price}
                </span>
              </div>
              <h3 className="text-xl font-bold">{course.title}</h3>
              <p className="text-gray-400 text-sm">{course.description}</p>
            </div>

            {/* Edit & Delete Buttons */}
            <div className="flex gap-2">
              {/* Edit Button */}
              <Link
                to={`/editCourse/${course.id}`}
                state={{ course }}
                className="outline-button-sm"
              >
                <i className="fas fa-edit"></i>
                Edit
              </Link>

              {/* Delete Button */}
              <button
                className="outline-button-sm text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
                onClick={handleDelete}
              >
                <i className="fas fa-trash-alt"></i>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
