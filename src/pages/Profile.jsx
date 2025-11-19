"use client";

import React, { use, useState } from "react";

import { motion } from "motion/react";
import { CheckCircle, User, Mail, X, Edit, Settings, Save } from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, updateUserProfile } = use(AuthContext);

  const { displayName, photoURL, email } = user || {};

  const [isEditing, setIsEditing] = useState(false);

  const [imagePreview, setImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "photoURL") setImagePreview(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.displayName.value;
    const photo = e.target.photoURL.value;

    updateUserProfile(name, photo)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error(error.message);
      });

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsEditing(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto p-4 mt-20 min-h-screen ">
      <div className="bg-white rounded-lg p-6 shadow border border-[rgba(45,90,61,0.12)] mb-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
              {photoURL ? (
                <img
                  referrerPolicy="no-referrer"
                  src={photoURL}
                  alt="Profile"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              ) : (
                <User size={32} className="text-gray-400" />
              )}
            </div>
            <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <CheckCircle size={16} color="white" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold mb-1">
                  {displayName ? displayName : "Your Name"}
                </h1>
                <p className="text-gray-500 flex items-center gap-2">
                  <Mail size={16} /> {email}
                </p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                {isEditing ? <X size={16} /> : <Edit size={16} />}
                {isEditing ? "Cancel" : "Edit Profile"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg p-6 shadow border border-[rgba(45,90,61,0.12)]"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Settings size={20} className="text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">
                Update Profile Information
              </h2>
              <p className="text-sm text-gray-500">
                Keep your profile up to date
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Display Name
                  </label>
                  <input
                    type="text"
                    name="displayName"
                    defaultValue={displayName}
                    // onChange={handleInputChange}
                    required
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Profile Photo URL
                  </label>
                  <input
                    type="text"
                    name="photoURL"
                    defaultValue={photoURL}
                    onChange={handleInputChange}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Profile Photo Preview
                  </label>
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border border-[rgba(45,90,61,0.12)] mx-auto flex items-center justify-center">
                    {imagePreview ? (
                      <img
                        referrerPolicy="no-referrer"
                        src={imagePreview}
                        alt="Preview"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <User size={40} className="text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition"
              >
                <Save size={16} />
                {isLoading ? "Updating..." : "Update Profile"}
              </button>

              {/* <button
                type="button"
                // onClick={resetChanges}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-50 transition"
              >
                <RotateCcw size={16} /> Reset Changes
              </button> */}
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default Profile;
