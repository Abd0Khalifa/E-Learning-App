import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SearchInput = () => {
    return (
        <>
            <div className="relative flex-1 md:flex-none">
                <input
                    type="text"
                    placeholder="Search..."
                    className="modern-input py-2 pl-4 pr-10 w-full"
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
            </div>
        </>
    );
};

export default SearchInput;
