import React, { useState } from "react";

const Listofjob = () => {
  const [formData, setFormData] = useState({
    username: "",
    jobType: "",
    startTime: "",
    endTime: "",
    statusCheck: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAction = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  const handleCancel = () => {
    setFormData({
      username: "",
      jobType: "",
      startTime: "",
      endTime: "",
      statusCheck: false,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 md:p-10 ">
      {/* Header */}
      <div className="mb-6 text-center">
        <h1 className="text-xl md:text-3xl  font-bold bg-white shadow-lg p-3">List of Jobs</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side Image */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Job Illustration"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Job Form</h2>
            <form>
              {/* Username */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Job Type */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="jobType"
                >
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Select a job type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>

              {/* Start Time */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="startTime"
                >
                  Start Time
                </label>
                <input
                  type="time"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* End Time */}
              <div className="mb-4">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="endTime"
                >
                  End Time
                </label>
                <input
                  type="time"
                  id="endTime"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              {/* Status Check */}
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="statusCheck"
                  name="statusCheck"
                  checked={formData.statusCheck}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label
                  className="text-gray-700 font-medium"
                  htmlFor="statusCheck"
                >
                  Status Check
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handleAction}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
                >
                  Action
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listofjob;
