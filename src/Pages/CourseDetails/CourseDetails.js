import { doc, getDoc } from "firebase/firestore";
import CourseDetailsHero from "../../Components/CourseDetailsHero/CourseDetailsHero";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

function CourseDetails() {
  const getCourseDetails = async (id) => {
    try {
      const docRef = doc(db, "courses", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log("this course does not exist");
      }
    } catch (error) {
      console.error("Error fetching course details", error);
    }
  };

  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourseDetails(id);
      setCourse(data);
    };

    fetchData();
  }, [id]);

  if (!course) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <main className="flex-grow pt-32">
        <CourseDetailsHero course={course} />
      </main>
      <Footer />
    </>
  );
}

export default CourseDetails;
