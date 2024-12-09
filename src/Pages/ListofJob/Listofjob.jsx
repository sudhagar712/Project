import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const Listofjob = () => {
  const [formData, setFormData] = useState({
    username: "",
    jobType: "",
    startTime: "",
    endTime: "",
    statusCheck: false,
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false); // Controls visibility of dropdown

  const options = [
    "PO Header",
    "Document Task",
    "View Events",
    "Contract System View",
    "PR Header",
    "PR Details",
    "Sourcing Project",
    "Supplier Fact System View",
    "Document Task System View",
  ];

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setSelectedOptions((prev) => [...prev, value]);
    } else {
      setSelectedOptions((prev) => prev.filter((item) => item !== value));
    }
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: duration of the animation
      easing: "ease-in-out", // Optional: easing function
    });
  }, []);

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
    <div className="min-h-screen bg-gray-50 md:p-10 p-2">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side Image */}
        <div className="lg:col-span-6 flex justify-center">
          <img
            src="https://images.pexels.com/photos/68761/pexels-photo-68761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Job Illustration"
            data-aos="fade-right"
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
                  API Name
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

              {/* PO Details */}
              <div className="mb-4 relative">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="poDetails"
                >
                  PO Details
                </label>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="w-full px-3 py-2 border rounded-lg bg-white focus:outline-none focus:ring focus:border-blue-300"
                >
                  {selectedOptions.length > 0
                    ? selectedOptions.join(", ")
                    : "Select PO Details"}
                </button>
                {showDropdown && (
                  <div className="absolute left-0 top-full mt-1 w-full bg-white border rounded-lg shadow-lg z-10">
                    {options.map((option, index) => (
                      <label
                        key={index}
                        className="block px-3 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          checked={selectedOptions.includes(option)}
                          onChange={handleCheckboxChange}
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Remaining Form Fields */}

              {/* Frequency */}
              <div className="space-y-3">
                <div className="">
                  <label className="">Frequency</label>
                  <br />
                  <input
                    type="checkbox"
                    className="mt-5 accent-red-700 "
                  />{" "}
                  <span>Once</span>
                </div>

                <div className="">
                  <input type="checkbox" className=" accent-red-700 " />{" "}
                  <span>Repeating</span>
                </div>
              </div>

              {/* Recurrence */}

              <div className="mb-4 mt-6">
                <label
                  className="block text-gray-700 font-medium mb-2"
                  htmlFor="jobType"
                >
                  Recurrence
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  value={formData.jobType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                >
                  <option value="">Select a recurrence</option>

                  <option value="Full-time">Hours</option>
                  <option value="Part-time">Weekly</option>
                  <option value="Contract">Monthly</option>
                </select>
              </div>

              {/* Start Time */}
              <div className="mb-4 mt-5">
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

              {/* Add your remaining form fields here */}

              {/* Buttons */}
              <div className="flex justify-between mt-6">
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
