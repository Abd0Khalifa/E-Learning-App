import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function CourseModule({ icon, title, lessons, time }) {
    return (
        <div className="feature-card group cursor-pointer">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <FontAwesomeIcon icon={icon} className="text-main-color" />
                    <div>
                        <h3 className="font-bold">{title}</h3>
                        <p className="text-gray-400">{lessons} • {time}</p>
                    </div>
                </div>
                <FontAwesomeIcon icon={faChevronDown} className="text-main-color" />
            </div>
        </div>
    );
}

export default CourseModule;
