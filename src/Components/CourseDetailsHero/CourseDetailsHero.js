import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faStar, faUsers, faShoppingCart, faPlay } from "@fortawesome/free-solid-svg-icons";


const CourseDetailsHero=({ course }) =>{
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
                                    className="px-3 py-1 rounded-full bg-main-color/10 text-main-color text-sm">Development</span>
                                <span className="text-gray-400">• Bestseller</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
                            <p className="text-xl text-gray-400 mb-6">Master modern web development with hands-on projects and
                                real-world applications.</p>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faStar} className="text-main-color" />
                                    <span className="font-bold">4.9</span>
                                    <span className="text-gray-400">(2.5k reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUsers} className="text-main-color" />
                                    <span className="text-gray-400">15,000+ students</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="gradient-button">
                                    <FontAwesomeIcon icon={faShoppingCart} className="text-white" />
                                    Enroll Now - $49.99
                                </button>
                                <button className="outline-button">
                                    <FontAwesomeIcon icon={faPlay} className="text-main-color" />
                                    Preview
                                </button>
                            </div>
                        </div>
                        <div className="relative flex-grow">
                            <div className="w-full h-full aspect-video bg-gradient-to-br from-main-color/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                                <FontAwesomeIcon icon={faPenToSquare} className="text-main-color text-9xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default CourseDetailsHero;
