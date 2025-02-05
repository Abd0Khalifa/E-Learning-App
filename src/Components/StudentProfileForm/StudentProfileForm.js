import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import Swal from "sweetalert2"; // Import SweetAlert

const StudentProfileForm = ({ userData, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bio: "",
    role: "", // Add role field
  });

  // Define roles for the select list
  const roles = ["student", "instructor"];

  useEffect(() => {
    if (userData) {
      setFormData({
        fullName: userData.name || "",
        email: userData.email || "",
        bio: userData.bio || "",
        role: userData.role || "", // Load role from userData
      });
    }
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        await updateDoc(userDocRef, {
          firstName: formData.fullName.split(" ")[0] || "",
          lastName: formData.fullName.split(" ")[1] || "",
          email: formData.email,
          bio: formData.bio,
          role: formData.role, // Update role in Firebase
        });

        onSave(formData); // Update UI after save

        // Show success message with SweetAlert
        Swal.fire({
          icon: "success",
          title: "Profile Updated!",
          text: "Your profile has been updated successfully.",
          confirmButtonColor: "#4CAF50",
        });
      } catch (error) {
        console.error("Error updating profile:", error);

        // Show error message with SweetAlert
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to update profile. Please try again.",
          confirmButtonColor: "#FF0000",
        });
      }
    }
  };

  return (
    <div className="glass-card p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div className="space-y-2">
          <label htmlFor="full-name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
          />
        </div>

        {/* Bio */}
        <div className="space-y-2">
          <label htmlFor="bio" className="text-sm font-medium">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            placeholder="Tell us about yourself"
            value={formData.bio}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
          ></textarea>
        </div>

        {/* Role (Dropdown Select List) */}
        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-card-dark border border-main-color/20 text-white focus:outline-none focus:ring-2 focus:ring-main-color"
          >
            <option value="" disabled>
              Select your role
            </option>
            {roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        {/* Save Button */}
        <div className="space-y-4">
          <button
            type="submit"
            className="gradient-button w-full py-3 text-xl text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-main-color"
          >
            <FontAwesomeIcon icon={faSave} /> Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentProfileForm;
