import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

const JobScheduler = () => {
  const [selectedFrequency, setSelectedFrequency] = useState("");
  const [inputs, setInputs] = useState({
    runNow: "",
    hourly: "",
    weekly: "",
    monthly: "",
  });

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: duration of the animation
      easing: "ease-in-out", // Optional: easing function
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleFrequencySelect = (frequency) => {
    setSelectedFrequency(frequency);
  };

  return (
    <div className="min-h-screen p-3 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Form */}
        <div className="lg:col-span-5 bg-white shadow-md rounded-lg p-6">
          <h2 className="md:text-4xl bg-white shadow-lg p-4  font-semibold text-gray-700 mb-10 text-center">
            Schedule Jobs
          </h2>

          {/* Options */}
          <div className="space-y-12">
            {/* Run Now */}
            <div className="flex items-center">
              <button
                onClick={() => handleFrequencySelect("runNow")}
                className={`p-2 rounded-full shadow-md ${
                  selectedFrequency === "runNow" ? "bg-blue-500" : "bg-gray-200"
                }`}
              >
                ▶
              </button>
              <label className="ml-4 text-2xl text-cyan-500  font-bold">Run Now</label>
              {/* <input
                type="text"
                name="runNow"
                value={inputs.runNow}
                onChange={handleInputChange}
                className="ml-auto px-3 py-2 border rounded-lg w-20"
                disabled={selectedFrequency !== "runNow"}
              /> */}
            </div>

            {/* Hourly */}
            <div className="flex items-center">
              <input
                type="radio"
                id="hourly"
                name="frequency"
                value="hourly"
                checked={selectedFrequency === "hourly"}
                onChange={() => handleFrequencySelect("hourly")}
                className="mr-2 "
              />
              <label htmlFor="hourly" className="text-gray-700 font-medium">
                Hourly
              </label>
              <input
                type="text"
                name="hourly"
                value={inputs.hourly}
                onChange={handleInputChange}
                className="ml-auto px-3 py-2 border rounded-lg w-20"
                disabled={selectedFrequency !== "hourly"}
              />

              <input
                type="text"
                name="hourly"
                value={inputs.hourly}
                onChange={handleInputChange}
                className="ml-auto px-3 py-2 border rounded-lg w-20"
                disabled={selectedFrequency !== "hourly"}
              />
            </div>

            {/* Weekly */}
            <div className="flex items-center">
              <input
                type="radio"
                id="weekly"
                name="frequency"
                value="weekly"
                checked={selectedFrequency === "weekly"}
                onChange={() => handleFrequencySelect("weekly")}
                className="mr-2"
              />
              <label htmlFor="weekly" className="text-gray-700 font-medium">
                Weekly
              </label>
              <input
                type="text"
                name="weekly"
                value={inputs.weekly}
                onChange={handleInputChange}
                className="ml-auto px-3 py-2 border rounded-lg w-20"
                disabled={selectedFrequency !== "weekly"}
              />
              <input
                type="text"
                name="weekly"
                value={inputs.weekly}
                onChange={handleInputChange}
                className="ml-auto px-3 py-2 border rounded-lg w-20"
                disabled={selectedFrequency !== "weekly"}
              />
            </div>

            {/* Monthly */}
            <div className="flex items-center">
              <input
                type="radio"
                id="monthly"
                name="frequency"
                value="monthly"
                checked={selectedFrequency === "monthly"}
                onChange={() => handleFrequencySelect("monthly")}
                className="mr-2"
              />
              <label htmlFor="monthly" className="text-gray-700 font-medium">
                Monthly
              </label>
              <input
                type="text"
                name="monthly"
                value={inputs.monthly}
                onChange={handleInputChange}
                className="ml-auto px-3 py-2 border rounded-lg w-20"
                disabled={selectedFrequency !== "monthly"}
              />

              <input
                type="text"
                name="monthly"
                value={inputs.monthly}
                onChange={handleInputChange}
                className="ml-auto px-3 py-2 border rounded-lg w-20"
                disabled={selectedFrequency !== "monthly"}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:col-span-7 flex items-center justify-center">
          <img
            src="https://blog.zoho.com/sites/zblogs/images/people/new-2019-01.gif"
            alt="Placeholder"
            className="rounded-lg shadow-md w-full lg:w-auto"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  );
};

export default JobScheduler;
