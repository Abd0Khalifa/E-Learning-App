import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import "./AddCourse.css";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorHeaderProfile from "../../Components/InstractorHeaderProfile/InstractorHeaderProfile";
import BasicInformation from "../../Components/BasicInformation/BasicInformation";
import CourseContent from "../../Components/CourseContent/CourseContent";
import CourseSettings from "../../Components/CourseSettings/CourseSettings";
import Requirements from "../../Components/Requirements/Requirements";
import ActionButtons from "../../Components/ActionButtons/ActionButtons";

const AddCourse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          setUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName || "Anonymous",
            photoURL: user.photoURL || "",
          })
        );
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const instructorId = useSelector((state) => state.auth.user?.uid);

  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    category: "",
    level: "",
    price: 0,
    youtubeLinks: [],
    imageBase64: "",
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

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCourseData({ ...courseData, imageBase64: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveCourse = async () => {
    try {
      if (!instructorId) {
        throw new Error("No instructor logged in.");
      }
      await addDoc(collection(db, "courses"), {
        ...courseData,
        instructorId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      Swal.fire({
        icon: "success",
        title: "Course Added Successfully!",
        text: "Your course has been successfully added to the platform.",
        confirmButtonText: "OK",
      });
      setCourseData({
        title: "",
        description: "",
        category: "",
        level: "",
        price: 0,
        youtubeLinks: [],
        imageBase64: "",
      });
    } catch (error) {
      console.error("Error saving course:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to Add Course",
        text: error.message,
        confirmButtonText: "Try Again",
      });
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
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Upload Course Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-2 p-2 border border-gray-600 rounded-md modern-input"
                  onChange={handleImageUpload}
                />
                {courseData.imageBase64 && (
                  <img
                    src={courseData.imageBase64}
                    alt="Course"
                    className="mt-4 w-32 h-32 object-cover rounded-md "
                  />
                )}
              </div>

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
