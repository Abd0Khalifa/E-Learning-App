import { doc, getDoc, deleteDoc } from "firebase/firestore";
import CourseDetailsHero from "../../Components/CourseDetailsHero/CourseDetailsHero";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { db, auth } from "../../firebase";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faLevelUp,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import Swal from "sweetalert2"; // Import SweetAlert

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const navigate = useNavigate(); // For redirecting after unenrollment

  const getCourseDetails = async (id) => {
    try {
      const docRef = doc(db, "courses", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("This course does not exist");
        return null;
      }
    } catch (error) {
      console.error("Error fetching course details", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourseDetails(id);
      setCourse(data);
      setLoading(false);
    };

    fetchData();
  }, [id]);

  const handleUnenroll = async () => {
    const user = auth.currentUser;
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "You must be logged in to unenroll.",
        confirmButtonColor: "#FF0000",
      });
      return;
    }

    // Show confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "You will be unenrolled from this course.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unenroll!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          // Delete the enrollment record from Firestore
          const enrollmentRef = doc(db, "enrollments", `${user.uid}_${id}`);
          await deleteDoc(enrollmentRef);

          // Show success message
          Swal.fire({
            icon: "success",
            title: "Unenrolled!",
            text: "You have been unenrolled from the course.",
            confirmButtonColor: "#4CAF50",
          });

          // Redirect to the dashboard or another page
          navigate("/sDashboard");
        } catch (error) {
          console.error("Error unenrolling:", error);
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Failed to unenroll. Please try again.",
            confirmButtonColor: "#FF0000",
          });
        }
      }
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <p className="text-gray-400">Course not found.</p>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <main className="flex-grow pt-32">
        <section className="relative py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-main-color/10 text-main-color text-sm">
                    {course.category}
                  </span>
                  <span className="text-gray-400">• Bestseller</span>
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
                <Link
                  to={`/CourseDetails/${id}`}
                  className="gradient-button-sm my-5 w-fit"
                >
                  ShowDetails
                </Link>
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
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-main-color"
                    />
                    <span className="font-bold">Duration:</span>
                    <span className="text-gray-400">{course.Duration}</span>
                  </div>
                </div>

                {/* Unenroll Button */}
                <button
                  onClick={handleUnenroll}
                  className="gradient-button-sm bg-red-500 hover:bg-red-600 my-5 w-fit"
                >
                  Unenroll
                </button>
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

        {/* Course Content Section */}
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">Course Content</h2>

          {/* Main Video Player and Side List */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Video Player */}
            <div className="lg:w-3/4">
              <div className="glass-card p-6">
                <ReactPlayer
                  url={course.youtubeLinks[currentVideoIndex]}
                  controls
                  width="100%"
                  height="500px"
                />
                <h3 className="font-bold text-lg mt-4">
                  Video {currentVideoIndex + 1}
                </h3>
                <p className="text-gray-400">
                  {course.youtubeLinks[currentVideoIndex]}
                </p>
              </div>
            </div>
            <div className="lg:w-1/4">
              <div className="glass-card p-6">
                <h3 className="font-bold text-lg mb-4">Course Videos</h3>
                <div className="space-y-4">
                  {course.youtubeLinks.map((link, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
                        index === currentVideoIndex
                          ? "bg-main-color/20"
                          : "hover:bg-main-color/10"
                      }`}
                      onClick={() => setCurrentVideoIndex(index)}
                    >
                      <FontAwesomeIcon
                        icon={faPlayCircle}
                        className="text-xl text-main-color"
                      />
                      <div>
                        <h4 className="font-medium">Video {index + 1}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CourseDetails;
