import CourseDetailsHero from "../../Components/CourseDetailsHero";
import WhatYouLearn from "../../Components/WhatYouLearn";


function CourseDetails() {
    return (
        <>
            <main class="flex-grow pt-32">
                <CourseDetailsHero />
                <section class="py-16 bg-card-dark/30">
                    <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
                        <div class="grid md:grid-cols-3 gap-12">
                            <div class="md:col-span-2">
                                <WhatYouLearn skill1={"gjkdhks"} skill2={"jdhksjdh"} skill3={"djshfs"} skill4={"ksjdfadjfgaj"}/>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}

export default CourseDetails;
