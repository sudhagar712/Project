import React, { useState } from "react";
import Listofjob from "../../Pages/ListofJob/Listofjob";


const TabComponent = () => {
  const [activeTab, setActiveTab] = useState("jobSchedule");

  return (
    <div className="md:w-[100%] md:p-10 p-2 mx-auto mt-10 bg-white   rounded-lg shadow-lg">
      {/* Tabs Header */}
      <div className="flex border-b border-gray-200 p-10 bg-gray-500 rounded-t-lg">
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "jobSchedule"
              ? "border-b-2 border-white text-black font-semibold "
              : "text-white "
          }`}
          onClick={() => setActiveTab("jobSchedule")}
        >
          Job Schedule
        </button>
        <button
          className={`flex-1 py-3 text-center ${
            activeTab === "jobList"
              ? "border-b-2 border-white text-black font-semibold"
              : "text-white"
          }`}
          onClick={() => setActiveTab("jobList")}
        >
          List of Jobs
        </button>
      </div>

      {/* Tabs Content */}
      <div className="p-6 bg-white border border-gray-300 border-t-0 rounded-b-lg">
        {activeTab === "jobSchedule" && (
          <div>
            <h2 className="text-xl font-semibold text-blue-600">
              Job Schedule
            </h2>
           <div>
            <Listofjob/>
           </div>
          </div>
        )}
        {activeTab === "jobList" && (
          <div>
            <h2 className="text-xl font-semibold text-blue-600">
              List of Jobs
            </h2>
            <p className="text-gray-700 mt-2">
              Content for List of Jobs goes here. Add dynamic data here if
              needed.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
