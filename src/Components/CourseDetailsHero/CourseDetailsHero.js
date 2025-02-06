import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faLevelUp, faClock } from "@fortawesome/free-solid-svg-icons";
import { faPaypal, faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { useNavigate, useParams } from "react-router-dom";
import { db, auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Swal from "sweetalert2"; // Import SweetAlert

const CourseDetailsHero = ({ course }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        checkEnrollment(firebaseUser.uid);
      } else {
        setUser(null);
        setIsEnrolled(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const checkEnrollment = async (userId) => {
    try {
      const enrollmentRef = collection(db, "enrollments");
      const q = query(
        enrollmentRef,
        where("uid", "==", userId),
        where("courseId", "==", id)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setIsEnrolled(true);
      } else {
        setIsEnrolled(false);
      }
    } catch (error) {
      console.error("Error checking enrollment:", error);
    }
  };

  const handleCheckout = () => {
    if (!user) {
      Swal.fire({
        title: "Please log in",
        text: "You need to log in to proceed with checkout.",
        icon: "warning",
        confirmButtonText: "Go to Login",
      }).then(() => {
        navigate("/login"); // Navigate to login page if not logged in
      });
    } else {
      navigate(`/checkout/${id}`, {
        state: { courseId: id, courseName: course.name },
      });
    }
  };

  const handleShowCourse = () => {
    navigate(`/EnrolledCourse/${id}`);
  };

  if (!course || typeof course !== "object") {
    return <div className="text-red-500">Error: Course data is missing</div>;
  }

  return (
    <>
      <section className="relative py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-main-color/10 text-main-color text-sm">
                  {course.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {course.title}
              </h1>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faTypo3} className="text-main-color" />
                <span className="font-bold">Category:</span>
                <span className="text-gray-400">{course.category}</span>
              </div>
              <br />
              <span className="font-bold">Description:</span>
              <p className="text-xl text-gray-400 mb-6">
                {course.description}.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faLevelUp}
                    className="text-main-color"
                  />
                  <span className="font-bold">Course Level:</span>
                  <span className="text-gray-400">{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faClock} className="text-main-color" />
                  <span className="font-bold">Duration:</span>
                  <span className="text-gray-400">{course.Duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                {isEnrolled ? (
                  <button
                    onClick={handleShowCourse}
                    className="gradient-button w-full"
                  >
                    <FontAwesomeIcon icon={faPlay} />
                    Continue Watching
                  </button>
                ) : (
                  <button
                    onClick={handleCheckout}
                    className="gradient-button w-full"
                  >
                    <FontAwesomeIcon icon={faPaypal} />
                    Checkout Now ${course.price}
                  </button>
                )}
              </div>
            </div>

            <div className="relative flex-grow">
              <div className="rounded-xl flex items-center justify-center">
                <img
                  src={course.imageBase64}
                  alt={course.title}
                  className="w-3/4 h-auto object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailsHero;
