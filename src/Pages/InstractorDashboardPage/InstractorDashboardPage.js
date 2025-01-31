import { useState } from "react";
import InstractorHeaderProfile from "../../Components/InstractorHeaderProfile/InstractorHeaderProfile";
import InstractorProfileForm from "../../Components/InstractorProfileForm/InstractorProfileForm";
import InstractorProfileOverview from "../../Components/InstractorProfileOverview/InstractorProfileOverview";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorProfileAccountSettings from "../../Components/InstractorProfileAccountSettings/InstractorProfileAccountSettings";
import InsatractorProfessionalLinks from "../../Components/InsatractorProfessionalLinks/InsatractorProfessionalLinks";
import InstractorVerificationStatus from "../../Components/InstractorVerificationStatus/InstractorVerificationStatus";
import InstractorStatistics from "../../Components/InstractorStatistics/InstractorStatistics";
import InstractorDashboardHeader from "../../Components/InstractorDashboardHeader/InstractorDashboardHeader";
import InstractorDashboardWelcomeSection from "../../Components/InstractorDashboardWelcomeSection/InstractorDashboardWelcomeSection";
import InstractorDashboardStatsOverview from "../../Components/InstractorDashboardStatsOverview/InstractorDashboardStatsOverview";
import InstractorDashboardRecentActivity from "../../Components/InstractorDashboardRecentActivity/InstractorDashboardRecentActivity";
import InstractorDashboardCoursePerformance from "../../Components/InstractorDashboardCoursePerformance/InstractorDashboardCoursePerformance";
import InstractorDashboardStudentFeedback from "../../Components/InstractorDashboardStudentFeedback/InstractorDashboardStudentFeedback";
import InstractorDashboardMonthlyEarnings from "../../Components/InstractorDashboardMonthlyEarnings/InstractorDashboardMonthlyEarnings";

const InstractorDashboardPage = () => {
    return (
        <div className="min-h-screen flex bg-custom-dark">
            <InstractorSidebarProfile />
            <main className="flex-1 md:ml-64 p-6 text-white">
                <InstractorDashboardHeader />
                <br/>
                <InstractorDashboardWelcomeSection />
                <InstractorDashboardStatsOverview />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                    <InstractorDashboardRecentActivity />
                    <InstractorDashboardStudentFeedback />
                    </div>
                    <div className="space-y-8">
                    <InstractorDashboardCoursePerformance />
                    <InstractorDashboardMonthlyEarnings /> 
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InstractorDashboardPage;
