import React from "react";
import "./AddCourse.css";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeaderProfile from "../../Components/InstractorHeaderProfile/InstractorHeaderProfile";
import BasicInformation from "../../Components/BasicInformation/BasicInformation";
import CourseContent from "../../Components/CourseContent/CourseContent";
import CourseMedia from "../../Components/CourseMedia/CourseMedia";
import CourseSettings from "../../Components/CourseSettings/CourseSettings";
import Requirements from "../../Components/Requirements/Requirements";
import ActionButtons from "../../Components/ActionButtons/ActionButtons";

const AddCourse = () => {
  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeaderProfile />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-8">
              <BasicInformation />
              <CourseContent />
              <CourseMedia />
            </div>

            <div className="space-y-8">
              <CourseSettings />
              <Requirements />
              <ActionButtons />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddCourse;
