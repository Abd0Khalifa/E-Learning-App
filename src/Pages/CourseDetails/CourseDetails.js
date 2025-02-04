import { doc, getDoc } from "firebase/firestore";
import CourseDetailsHero from "../../Components/CourseDetailsHero/CourseDetailsHero";
import Footer from "../../Components/Footer/Footer";
import InstructorInfo from "../../Components/InstructorInfo/InstructorInfo";
import NavBar from "../../Components/NavBar/NavBar";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscourse } from "@fortawesome/free-brands-svg-icons";
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
    const youtubeLinks = course.youtubeLinks || [];

    return (
        <>
            <NavBar />
            <main className="flex-grow pt-32">
                <CourseDetailsHero course={course} />

                <div className="p-8 mb-8">
                                    
                <h1 className="text-2xl font-bold mb-8 text-main-color text-center">
                <FontAwesomeIcon icon={faBook} className="text-main-color" /> Course Content</h1>
                    <h3 className="text-xl font-bold mb-4">All Videos: {youtubeLinks.length}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {youtubeLinks.map((url, index) => (
                            <div
                                key={index}
                                className="transition-transform transform hover:scale-105 hover:shadow-lg p-4 rounded-lg shadow-md"
                            >
                                <h4 className="text-lg font-semibold mb-2 text-gray-400">Video {index + 1}</h4>
                                <ReactPlayer
                                    url={url}
                                    width="100%"
                                    height="auto"
                                    controls={true}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <InstructorInfo />

            </main>
            <Footer />
        </>
    );
}

export default CourseDetails;
