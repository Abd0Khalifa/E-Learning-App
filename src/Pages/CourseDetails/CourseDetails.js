import { doc, getDoc } from "firebase/firestore";
import CourseDetailsHero from "../../Components/CourseDetailsHero/CourseDetailsHero";
import Footer from "../../Components/Footer/Footer";
import InstructorInfo from "../../Components/InstructorInfo/InstructorInfo";
import NavBar from "../../Components/NavBar/NavBar";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player';



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
      const youtubeLinks = course.youtubeLinks || [];
    
    return (
        <>
        <NavBar/>
            <main className="flex-grow pt-32">
                <CourseDetailsHero course={course}/>

                <div className="p-8 mb-8">
          <h3 className="text-xl font-bold mb-4">Videos numbers: {youtubeLinks.length}</h3>
          <p>This course have {youtubeLinks.length} videos : </p>
          <div className="space-y-4">
            {youtubeLinks.map((url, index) => (
              <div key={index}>
                <h4 className="text-lg">video {index + 1}</h4>
                <ReactPlayer 
                  url={url} 
                  width="320px"
                  height="240px"
                  controls={true}
                />
              </div>
            ))}
          </div>
        </div>

                
                <InstructorInfo />

            </main>
            <Footer/>
        </>
    );
}

export default CourseDetails;
