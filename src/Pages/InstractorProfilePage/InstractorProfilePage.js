import { useState } from "react";
import InstractorHeaderProfile from "../../Components/InstractorHeaderProfile/InstractorHeaderProfile";
import InstractorProfileForm from "../../Components/InstractorProfileForm/InstractorProfileForm";
import InstractorProfileOverview from "../../Components/InstractorProfileOverview/InstractorProfileOverview";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorProfileAccountSettings from "../../Components/InstractorProfileAccountSettings/InstractorProfileAccountSettings";
import InsatractorProfessionalLinks from "../../Components/InsatractorProfessionalLinks/InsatractorProfessionalLinks";
import InstractorVerificationStatus from "../../Components/InstractorVerificationStatus/InstractorVerificationStatus";
import InstractorStatistics from "../../Components/InstractorStatistics/InstractorStatistics";

const InstractorProfilePage = () => {
    return (
        <div className="min-h-screen flex bg-custom-dark">
            <InstractorSidebarProfile />
            <main className="flex-1 md:ml-64 p-6 text-white">
                <InstractorHeaderProfile />
                <br/>
                <InstractorProfileOverview />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <InstractorProfileForm />
                        <InstractorStatistics />
                    </div>
                    <div className="space-y-8">
                        <InstractorProfileAccountSettings />
                        <InsatractorProfessionalLinks />
                        <InstractorVerificationStatus />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InstractorProfilePage;
