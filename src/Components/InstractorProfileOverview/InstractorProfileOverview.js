import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faEdit, faEye, faShare, faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const InstractorProfileOverview = ({ onEdit }) => {
    const [userData, setUserData] = useState({ name: "", role: "", bio: "" });

    const fetchUserData = async (user) => {
        if (user) {
            const userDocRef = doc(db, "users", user.uid);
            const userDocSnap = await getDoc(userDocRef);
            if (userDocSnap.exists()) {
                const data = userDocSnap.data();
                const fullName = `${data.firstName} ${data.lastName}`.trim();
                setUserData({ name: fullName, role: data.role, bio: data.bio });
            } else {
                setUserData({ name: user.displayName || "User", role: "N/A", bio: "" });
            }
        } else {
            setUserData({ name: "Guest", role: "N/A", bio: "" });
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            await fetchUserData(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="glass-card p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-main-color/20 flex items-center justify-center">
                        <FontAwesomeIcon icon={faUser} className="text-4xl text-main-color" />
                    </div>
                    <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-main-color flex items-center justify-center">
                        <FontAwesomeIcon icon={faCamera} />
                    </button>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">
                        {userData.name || "Loading..."}
                    </h2>
                    <p className="text-gray-400 mb-4">
                        {userData.role || "Loading..."}
                    </p>
                    <p className="text-gray-400 mb-4">
                        {userData.bio || "No bio available"}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <button className="gradient-button-sm" onClick={() => onEdit(userData)}>
                            <FontAwesomeIcon icon={faEdit} /> Edit Profile
                        </button>
                        <button className="outline-button-sm">
                            <FontAwesomeIcon icon={faShare} /> Share Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstractorProfileOverview;
