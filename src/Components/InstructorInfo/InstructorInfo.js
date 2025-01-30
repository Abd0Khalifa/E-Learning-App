import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faStar, faAward, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function InstructorInfo() {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                <div className="glass-card p-8 animate-on-scroll">
                    <h2 className="text-2xl font-bold mb-8">Your Instructor</h2>
                    <div className="flex items-start gap-8">
                        <div className="w-24 h-24 rounded-full bg-main-color/20 items-center justify-center flex-shrink-0 hidden md:flex">
                            <FontAwesomeIcon icon={faUser} className="text-3xl text-main-color" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">John Smith</h3>
                            <p className="text-main-color mb-4">Senior Web Developer & Instructor</p>
                            <p className="text-gray-400 mb-4">
                                With over 10 years of industry experience, John has worked with major tech companies and has
                                helped thousands of students master web development. His practical teaching approach ensures you
                                learn real-world skills.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faStar} className="text-main-color" />
                                    <span>4.9 Instructor Rating</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faAward} className="text-main-color" />
                                    <span>50,000+ Students</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faPlayCircle} className="text-main-color" />
                                    <span>12 Courses</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InstructorInfo;
