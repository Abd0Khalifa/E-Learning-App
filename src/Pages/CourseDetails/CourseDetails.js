import CourseContent from "../../Components/CourseContent";
import CourseDetailsHero from "../../Components/CourseDetailsHero";
import CourseFeatures from "../../Components/CourseFeatures";
import InstructorInfo from "../../Components/InstructorInfo";
import Requirements from "../../Components/Requirements";
import WhatYouLearn from "../../Components/WhatYouLearn";


function CourseDetails() {
    return (
        <>
            <main className="flex-grow pt-32">
                <CourseDetailsHero />
                <section className="py-16 bg-card-dark/30">
                    <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="md:col-span-2">
                                <WhatYouLearn skill1={"gjkdhks"} skill2={"jdhksjdh"} skill3={"djshfs"} skill4={"ksjdfadjfgaj"} />
                                <CourseContent />
                                <Requirements />

                            </div>

                            <div className="md:col-span-1">
                                <CourseFeatures />
                            </div>

                        
                        </div>
                        <InstructorInfo />
                    </div>
                </section>

            </main>
        </>
    );
}

export default CourseDetails;
