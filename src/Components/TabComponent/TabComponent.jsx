import React, { useState } from "react";
import { Link } from "react-router-dom";

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Job schedule",
      content: "Welcome to Login",
      button: "GET STARTED",
    },
    {
      id: 1,
      label: " List of jobs",
      content: "Welcome to Login",
      button: "GET STARTED",
    },
  ];

  return (
    <div className="md:w-[40%]   p-1 md:p-10 mx-auto mt-10">
      {/* Tabs */}
      <div className="flex border-b bg-white p-2 rounded-md border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`flex-1 text-center py-2 px-4 ${
              activeTab === tab.id
                ? index === 0
                  ? "border-b-2 border-white border-2 bg-cyan-200 md:text-2xl  shadow-xl font-extrabold  text-white"
                  : "border-b-2 border-white border-2 bg-green-200 md:text-2xl shadow-xl font-extrabold  text-white"
                : "text-black md:text-2xl  font-bold"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-9 bg-white shadow-lg text-center   md:text-2xl text-xl font-bold   mt-4">
        <p className=" shadow-2xl md:text-4xl ">{tabs[activeTab].content}</p>
        <Link to="/login">
          <button className="p-4 mt-6 px-4 bg-gradient-to-r from-cyan-300 to-green-300 shadow-2xl animate-pulse">
            {tabs[activeTab].button}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TabComponent;
