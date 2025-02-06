import { useState } from "react";
import InstractorHeaderProfile from "../../Components/InstractorHeader/InstractorHeader";
import InstractorProfileForm from "../../Components/InstractorProfileForm/InstractorProfileForm";
import InstractorProfileOverview from "../../Components/InstractorProfileOverview/InstractorProfileOverview";
import InstractorSidebarProfile from "../../Components/InstractorSidebarProfile/InstractorSidebarProfile";
import InstractorProfileAccountSettings from "../../Components/InstractorProfileAccountSettings/InstractorProfileAccountSettings";
import InsatractorProfessionalLinks from "../../Components/InsatractorProfessionalLinks/InsatractorProfessionalLinks";
import InstractorVerificationStatus from "../../Components/InstractorVerificationStatus/InstractorVerificationStatus";
import InstractorStatistics from "../../Components/InstractorStatistics/InstractorStatistics";
import InstractorHeader from "../../Components/InstractorHeader/InstractorHeader";
import StudentProfileForm from "../../Components/StudentProfileForm/StudentProfileForm";
import StudentProfileConnectedAccounts from "../../Components/StudentProfileConnectedAccounts/StudentProfileConnectedAccounts";

const InstractorProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({});
  
    const handleEdit = (data) => {
      setUserData(data);
      setIsEditing(true);
    };
  
    const handleSave = async (updatedData) => {
      try {
        console.log("Updated Data:", updatedData);
        setIsEditing(false);
      } catch (error) {
        console.error("Error updating user data:", error);
      }
    };
  
    return (
        <div className="min-h-screen flex bg-custom-dark">
            <InstractorSidebarProfile />
            <main className="flex-1 md:ml-64 text-white">
            <InstractorHeader />
                <br/>
                <div className="p-5">
          {isEditing ? (
            <StudentProfileForm userData={userData} onSave={handleSave} />
          ) : (
            <InstractorProfileOverview onEdit={handleEdit} />
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {!isEditing && <InstractorStatistics />}
            </div>
            <div className="space-y-8">
              <InstractorProfileAccountSettings />
              <StudentProfileConnectedAccounts />
            </div>
          </div>
        </div>
            </main>
        </div>
    );
};

export default InstractorProfilePage;
