import {
  faCertificate,
  faCheck,
  faClock,
  faPuzzlePiece,
  faShoppingCart,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import CourseFeatureItem from "../CourseFeatureItem/CourseFeatureItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function CourseFeatures() {
  return (
    <div className="md:col-span-1">
      <div className="glass-card p-6 sticky  animate-on-scroll">
        <h3 className="text-xl font-bold mb-4">Course Features</h3>
        <ul className="space-y-4 mb-6">
          <CourseFeatureItem icon={faClock} label="Duration" value="12 weeks" />
          <CourseFeatureItem icon={faVideo} label="Lessons" value="48 videos" />
          <CourseFeatureItem
            icon={faPuzzlePiece}
            label="Projects"
            value="8 projects"
          />
          <CourseFeatureItem
            icon={faCertificate}
            label="Certificate"
            value="Yes"
          />
        </ul>
        {/* <Link to={"/checkout"} className="gradient-button w-full mb-4">
          <FontAwesomeIcon icon={faPaypal} />
          checkout Now
        </Link> */}
       
      </div>
    </div>
  );
}

export default CourseFeatures;
