import { useState } from "react";

import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorDashboardWelcomeSection from "../../Components/InstractorDashboardWelcomeSection/InstractorDashboardWelcomeSection";
import InstractorDashboardStatsOverview from "../../Components/InstractorDashboardStatsOverview/InstractorDashboardStatsOverview";
import InstractorDashboardRecentActivity from "../../Components/InstractorDashboardRecentActivity/InstractorDashboardRecentActivity";
import InstractorDashboardCoursePerformance from "../../Components/InstractorDashboardCoursePerformance/InstractorDashboardCoursePerformance";
import InstractorDashboardStudentFeedback from "../../Components/InstractorDashboardStudentFeedback/InstractorDashboardStudentFeedback";
import InstractorDashboardMonthlyEarnings from "../../Components/InstractorDashboardMonthlyEarnings/InstractorDashboardMonthlyEarnings";
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";

const InstractorDashboardPage = () => {
  return (
    <div className="min-h-screen flex bg-custom-dark">
      <InstractorSidebarProfile />
      <main className="flex-1 md:ml-64 text-white ">
        <InstractorHeader />

        <div className="p-5 mt-20">
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
        </div>
      </main>
    </div>
  );
};

export default InstractorDashboardPage;
