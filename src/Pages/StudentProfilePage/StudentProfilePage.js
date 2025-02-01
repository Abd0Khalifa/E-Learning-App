import { useState } from "react";
import StudentSidebarProfile from "../../Components/StudentSidebarProfile/StudentSidebarProfile";
import StudentProfileForm from "../../Components/StudentProfileForm/StudentProfileForm";
import StudentProfileAccountSettings from "../../Components/StudentProfileAccountSettings/StudentProfileAccountSettings";
import StudentProfileConnectedAccounts from "../../Components/StudentProfileConnectedAccounts/StudentProfileConnectedAccounts";
import StudentProfileOverview from "../../Components/StudentProfileOverview/StudentProfileOverview";
import StudentStatistics from "../../Components/StudentStatistics/StudentStatistics";
import StudentHeader from "../../Components/StudentHeader/StudentHeader";

const StudentProfilePage = () => {
    return (
        <div className="min-h-screen flex bg-custom-dark">
            <StudentSidebarProfile />
            <main className="flex-1 md:ml-64 text-white">
            <StudentHeader />
                <br/>
                <StudentProfileOverview />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <StudentProfileForm />
                        <StudentStatistics />
                    </div>
                    <div className="space-y-8">
                        <StudentProfileAccountSettings />
                        <StudentProfileConnectedAccounts />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default StudentProfilePage;
