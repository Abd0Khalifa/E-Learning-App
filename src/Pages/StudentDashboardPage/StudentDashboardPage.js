import StudentDashboardHeader from "../../Components/StudentDashboardHeader/StudentDashboardHeader";
import StudentDashboardStatsOverview from "../../Components/StudentDashboardStatsOverview/StudentDashboardStatsOverview";
import StudentDashboardWelcomeSection from "../../Components/StudentDashboardWelcomeSection/StudentDashboardWelcomeSection";
import StudentSidebarProfile from "../../Components/StudentSidebarProfile/StudentSidebarProfile";

const StudentDashboardPage = () => {
    return (
        <div className="min-h-screen flex bg-custom-dark">
            <StudentSidebarProfile />
            <main className="flex-1 md:ml-64 p-6 text-white">
                <StudentDashboardHeader />
                <br/>
                <StudentDashboardWelcomeSection />
                <StudentDashboardStatsOverview />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                    {/* <InstractorDashboardRecentActivity />
                    <InstractorDashboardStudentFeedback /> */}
                    </div>
                    <div className="space-y-8">
                    {/* <InstractorDashboardCoursePerformance />
                    <InstractorDashboardMonthlyEarnings />  */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentDashboardPage;
