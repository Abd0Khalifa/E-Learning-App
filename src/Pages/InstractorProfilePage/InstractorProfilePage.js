import { useState } from "react";
import InstractorHeaderProfile from "../../Components/InstractorHeaderProfile/InstractorHeaderProfile";
import InstractorProfileForm from "../../Components/InstractorProfileForm/InstractorProfileForm";
import InstractorProfileOverview from "../../Components/InstractorProfileOverview/InstractorProfileOverview";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";

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
                    </div>
                    <div className="space-y-8">
                        {/* <StudentProfileAccountSettings />
                        <StudentProfileConnectedAccounts /> */}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default InstractorProfilePage;
