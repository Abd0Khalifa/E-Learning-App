import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CourseFeatureItem({ icon, label, value }) {
    return (
        <li className="flex items-center justify-between text-gray-400">
            <span className="flex items-center gap-2">
                <FontAwesomeIcon icon={icon} className="text-main-color" />
                {label}
            </span>
            <span>{value}</span>
        </li>
    );
}

export default CourseFeatureItem;
