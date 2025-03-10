// components/ReportErrorSection.jsx
"use client";
import React from "react";

const ReportErrorSection = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="text-gray-500">Not what you expected?</div>
      <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors">
        Report Error &gt;
      </button>
    </div>
  );
};

export default ReportErrorSection;
