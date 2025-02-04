import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faLevelUp, faClock } from "@fortawesome/free-solid-svg-icons";
import { faPaypal, faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate, useParams } from "react-router-dom";


const CourseDetailsHero = ({ course }) => {
    const navigate = useNavigate();
        const { id } = useParams();
    
const handleCheckout = () => {

    navigate(`/checkout/${id}`, { state: { courseId: id, courseName: course.name } });
};
    if (!course || typeof course !== "object") {
        return <div className="text-red-500">Error: Course data is missing</div>;
    }
    return (
        <>
            <section className="relative py-16">
                <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <span
                                    className="px-3 py-1 rounded-full bg-main-color/10 text-main-color text-sm">{course.category}</span>
                                <span className="text-gray-400">• Bestseller</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
                            <div className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faTypo3} className="text-main-color" />
                                <span className="font-bold">Category:</span>
                                <span className="text-gray-400">{course.category}</span>
                            </div>
                            <br />
                            <span className="font-bold">Description:</span>
                            <p className="text-xl text-gray-400 mb-6">{course.description}.</p>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faLevelUp} className="text-main-color" />
                                    <span className="font-bold">Course Level:</span>
                                    <span className="text-gray-400">{course.level}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faClock} className="text-main-color" />
                                    <span className="font-bold">Duration:</span>
                                    <span className="text-gray-400">{course.Duration}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Link onClick={handleCheckout()} className="gradient-button w-full">
                                    <FontAwesomeIcon icon={faPaypal} />
                                    checkout Now ${course.price}
                                </Link>
                                <button className="outline-button">
                                    <FontAwesomeIcon icon={faPlay} className="text-main-color" />
                                    Preview
                                </button>
                            </div>
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

        </>
    );
}

export default CourseDetailsHero;
