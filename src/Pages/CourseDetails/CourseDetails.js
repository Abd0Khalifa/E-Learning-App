import { doc, getDoc } from "firebase/firestore";
import CourseDetailsHero from "../../Components/CourseDetailsHero/CourseDetailsHero";
import Footer from "../../Components/Footer/Footer";
import InstructorInfo from "../../Components/InstructorInfo/InstructorInfo";
import NavBar from "../../Components/NavBar/NavBar";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


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
    
      if (!course) return <div>Loading...</div>;
    
    return (
        <>
        <NavBar/>
            <main className="flex-grow pt-32">
                <CourseDetailsHero course={course}/>

            

                <InstructorInfo />

            </main>
            <Footer/>
        </>
    );
}

export default CourseDetails;
