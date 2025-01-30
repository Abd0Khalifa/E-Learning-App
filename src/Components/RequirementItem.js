import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function RequirementItem({ text }) {
    return (
        <li className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCircle} className="text-xs text-main-color" />
            {text}
        </li>
    );
}

export default RequirementItem;
