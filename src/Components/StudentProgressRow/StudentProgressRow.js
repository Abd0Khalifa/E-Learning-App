import React from "react";
import { getAuth } from "firebase/auth";

const StudentProgressRow = ({ student }) => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  // نقارن بين uid للمستخدم الحالي وuid الموجود في بيانات التسجيل
  const isCurrentUserEnrollment = currentUser && student.uid === currentUser.uid;

  return (
    <tr className="hover:bg-main-color/5">
      <td className="py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-main-color/20 flex items-center justify-center">
            <i className="fas fa-user text-main-color"></i>
          </div>
          <div>
            <div className="font-medium">
              {student.name}
              {isCurrentUserEnrollment && (
                <span className="ml-2 text-sm text-green-500">(You)</span>
              )}
            </div>
            <div className="text-sm text-gray-400">{student.email}</div>
          </div>
        </div>
      </td>
      <td className="py-4">{student.course}</td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-main-color to-purple-500 rounded-full"
              style={{ width: `${student.progress}%` }}
            ></div>
          </div>
          <span>{student.progress}%</span>
        </div>
      </td>
      <td className="py-4">{student.lastActive}</td>
      <td className="py-4">
        <span
          className={`px-2 py-1 rounded ${
            student.performance === "Excellent"
              ? "bg-green-500/20 text-green-500"
              : "bg-yellow-500/20 text-yellow-500"
          }`}
        >
          {student.performance}
        </span>
      </td>
      <td className="py-4">
      
        <button className="outline-button-sm">View Details</button>
      
      </td>
    </tr>
  );
};

export default StudentProgressRow;
