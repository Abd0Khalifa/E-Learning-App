import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase"; // Adjust the path as necessary
import "./AddCourse.css";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeaderProfile from "../../Components/InstractorHeaderProfile/InstractorHeaderProfile";
import BasicInformation from "../../Components/BasicInformation/BasicInformation";
import CourseContent from "../../Components/CourseContent/CourseContent";
import CourseSettings from "../../Components/CourseSettings/CourseSettings";
import Requirements from "../../Components/Requirements/Requirements";
import ActionButtons from "../../Components/ActionButtons/ActionButtons";
const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    price: 0,
    youtubeLinks: [],
  });
  const handleBasicInfoChange = (field, value) => {
    setCourseData({ ...courseData, [field]: value });
  };

  const handleContentChange = (youtubeLinks) => {
    setCourseData({ ...courseData, youtubeLinks });
  };
  const handleSettingsChange = (price) => {
    setCourseData({ ...courseData, price });
  };
  const handleSaveCourse = async () => {
    try {
      await addDoc(collection(db, "courses"), {
        ...courseData,
        instructorId: "xyz456", 
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      alert("Course saved successfully!");
      setCourseData({
        title: "",
        description: "",
        category: "",
        level: "",
        price: 0,
        youtubeLinks: [],
      });
    } catch (error) {
      console.error("Error saving course:", error);
      alert("Failed to save course. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeaderProfile />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <BasicInformation onChange={handleBasicInfoChange} />
              <CourseContent onContentChange={handleContentChange} />
            </div>

            <div className="space-y-8">
              <CourseSettings onChange={handleSettingsChange} />
              <Requirements />
              <ActionButtons onSave={handleSaveCourse} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddCourse;
