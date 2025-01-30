import { faBook, faCode } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import CourseModule from './CourseModule';

function CourseContent() {
    return (
        <div className="glass-card p-8 mb-8 animate-on-scroll">
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <div className="space-y-4">
                <CourseModule 
                    icon={faBook} 
                    title="Module 1: HTML & CSS Fundamentals" 
                    lessons="8 lessons" 
                    time="2.5 hours" 
                />
                <CourseModule 
                    icon={faCode} 
                    title="Module 2: JavaScript Essentials" 
                    lessons="12 lessons" 
                    time="4 hours" 
                />
                <CourseModule 
                    icon={faReact} 
                    title="Module 3: React.js Development" 
                    lessons="10 lessons" 
                    time="3.5 hours" 
                />
            </div>
        </div>
    );
}

export default CourseContent;
