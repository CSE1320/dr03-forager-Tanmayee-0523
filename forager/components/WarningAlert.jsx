"use client";
import React from "react";

const WarningAlert = ({ message, icon }) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-lg flex items-start shadow-md w-full">
      {/* Icon */}
      <img src={icon} alt="Warning Icon" className="w-8 h-8 mr-3 mt-1" />

      {/* Text Content */}
      <div className="w-full">
        {/* WARNING Title */}
        <p className="text-lg font-medium uppercase">WARNING</p>

        {/* Warning Message */}
        <p className="text-sm font-medium whitespace-normal">{message}</p>
      </div>
    </div>
  );
};

export default WarningAlert;
