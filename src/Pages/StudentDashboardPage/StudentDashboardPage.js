import StudentDashboardAchievement from "../../Components/StudentDashboardAchievement/StudentDashboardAchievement";
import StudentDashboardCurrentCourses from "../../Components/StudentDashboardCurrentCourses/StudentDashboardCurrentCourses";
import StudentDashboardStatsOverview from "../../Components/StudentDashboardStatsOverview/StudentDashboardStatsOverview";
import StudentDashboardUpcomingSchedule from "../../Components/StudentDashboardUpcomingSchedule/StudentDashboardUpcomingSchedule";
import StudentDashboardWelcomeSection from "../../Components/StudentDashboardWelcomeSection/StudentDashboardWelcomeSection";
import StudentSidebarProfile from "../../Components/StudentSidebarProfile/StudentSidebarProfile";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";

const StudentDashboardPage = () => {
  return (
    <div className="min-h-screen flex bg-custom-dark ">
      <StudentSidebarProfile />
      <main className="flex-1 md:ml-64 text-white ">
        <StudentHeader />
        <br />
        <div class="p-5">
          <StudentDashboardWelcomeSection />
          <StudentDashboardStatsOverview />
          <StudentDashboardCurrentCourses />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <StudentDashboardUpcomingSchedule />
            </div>
            <div className="space-y-8">
              <StudentDashboardAchievement />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboardPage;
