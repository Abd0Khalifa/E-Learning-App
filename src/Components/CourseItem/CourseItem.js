import React from "react";

const CourseItem = ({ course }) => {
  return (
    <div className="glass-card p-6">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="aspect-video bg-gradient-to-br from-main-color/20 to-purple-500/20 rounded-xl flex items-center justify-center">
            <lord-icon
              src={course.icon}
              trigger="hover"
              colors="primary:#fa329c"
              style={{ width: "64px", height: "64px" }}
            ></lord-icon>
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 rounded bg-main-color/10 text-main-color text-xs">
                  {course.category}
                </span>
                <span className={`text-${course.statusColor}-500 text-sm`}>
                  • {course.status}
                </span>
              </div>
              <h3 className="text-xl font-bold">{course.title}</h3>
            </div>
            <div className="flex gap-2">
              <button className="outline-button-sm">
                <i className="fas fa-edit"></i>
                Edit
              </button>
              <button className="outline-button-sm text-red-500 border-red-500 hover:bg-red-500 hover:text-white">
                <i className="fas fa-trash-alt"></i>
                Delete
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <div className="text-gray-400 text-sm">Students</div>
              <div className="text-xl font-bold">{course.students}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Rating</div>
              <div className="text-xl font-bold flex items-center gap-1">
                {course.rating}{" "}
                <i className="fas fa-star text-main-color text-sm"></i>
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Revenue</div>
              <div className="text-xl font-bold">${course.revenue}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm">Completion Rate</div>
              <div className="text-xl font-bold">{course.completionRate}%</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="outline-button-sm">
              <i className="fas fa-eye"></i>
              Preview
            </button>
            <button className="outline-button-sm">
              <i className="fas fa-users"></i>
              Manage Students
            </button>
            <button className="outline-button-sm">
              <i className="fas fa-chart-bar"></i>
              Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
