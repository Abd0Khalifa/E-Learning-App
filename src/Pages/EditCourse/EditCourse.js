import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Redux/authSlice";
import { onAuthStateChanged } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import BasicInformation from "../../Components/BasicInformation/BasicInformation";
import CourseContent from "../../Components/CourseContent/CourseContent";
import CourseSettings from "../../Components/CourseSettings/CourseSettings";
import ActionButtons from "../../Components/ActionButtons/ActionButtons";
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";

const EditCourse = () => {
  const navigate = useNavigate();
  const { id } = useParams();
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

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      category: "",
      level: "",
      price: 0,
      youtubeLinks: [],
      imageBase64: "",
      Duration: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Course title is required"),
      description: Yup.string().required("Course description is required"),
      category: Yup.string().required("Category is required"),
      level: Yup.string().required("Level is required"),
      price: Yup.number()
        .required("Price is required")
        .min(0, "Price cannot be negative"),
      youtubeLinks: Yup.array().of(Yup.string().url("Invalid YouTube URL")),
      imageBase64: Yup.string().required("Course image is required"),
      Duration: Yup.string()
        .required("Course duration is required")
        .matches(
          /^\d+\s?(weeks|days|months|hours)?$/,
          "Invalid duration format"
        ),
    }),
    onSubmit: async (values) => {
      try {
        if (!instructorId) {
          throw new Error("No instructor logged in.");
        }

        const courseRef = doc(db, "courses", id);
        await updateDoc(courseRef, {
          ...values,
          updatedAt: new Date().toISOString(),
        });

        Swal.fire({
          icon: "success",
          title: "Course Updated Successfully!",
          text: "Your course details have been updated.",
          confirmButtonText: "OK",
        });
        navigate("/manageCourses");
      } catch (error) {
        console.error("Error updating course:", error);
        Swal.fire({
          icon: "error",
          title: "Failed to Update Course",
          text: error.message,
          confirmButtonText: "Try Again",
        });
      }
    },
  });

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      try {
        const courseRef = doc(db, "courses", id);
        const courseSnap = await getDoc(courseRef);
        if (courseSnap.exists()) {
          formik.setValues(courseSnap.data());
        } else {
          console.error("Course not found!");
        }
      } catch (error) {
        console.error("Error fetching course:", error);
      } finally {
      }
    };

    fetchCourse();
  }, [id]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        formik.setFieldValue("imageBase64", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white">
        <InstractorHeader />
        <div className="container mx-auto px-4 py-8">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <BasicInformation
                  values={formik.values}
                  onChange={(field, value) =>
                    formik.setFieldValue(field, value)
                  }
                  errors={formik.errors}
                  touched={formik.touched}
                />

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300">
                    Course Duration (e.g., "12 weeks", "3 months")
                  </label>
                  <input
                    type="text"
                    className="modern-input"
                    value={formik.values.Duration}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="Duration"
                  />
                  {formik.errors.Duration && formik.touched.Duration && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.Duration}
                    </div>
                  )}
                </div>

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
                  {formik.errors.imageBase64 && formik.touched.imageBase64 && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.imageBase64}
                    </div>
                  )}
                  {formik.values.imageBase64 && (
                    <img
                      src={formik.values.imageBase64}
                      alt="Course"
                      className="mt-4 w-32 h-32 object-cover rounded-md"
                    />
                  )}
                </div>

                <CourseContent
                  onContentChange={(youtubeLinks) =>
                    formik.setFieldValue("youtubeLinks", youtubeLinks)
                  }
                  errors={formik.errors}
                  touched={formik.touched}
                />
              </div>

              <div className="space-y-8">
                <CourseSettings
                  onChange={(price) => formik.setFieldValue("price", price)}
                  errors={formik.errors}
                  touched={formik.touched}
                />
                <ActionButtons onSave={formik.handleSubmit} />
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default EditCourse;
