"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import EditableTable from "../../components/EditableTable";
import WarningAlert from "../../components/WarningAlert";
import { warningMessage } from "../../data/development";

export default function ComparePage() {
  const attributes = [
    { label: "Cap Shape", value: "Flat", userInput: "Flat" },
    { label: "Cap Color", value: "Yellow", userInput: "Brown" },
    { label: "Cap Texture", value: "Smooth", userInput: "Smooth" },
    { label: "Gills Type", value: "Free", userInput: "Free" },
    { label: "Gills Color", value: "White", userInput: "White" },
    { label: "Stem Shape", value: "Slender", userInput: "Slender" },
    { label: "Stem Color", value: "White", userInput: "White" },
    { label: "Stem Ring", value: "Absent", userInput: "Absent" },
    { label: "Habitat", value: "Near oak/beech", userInput: "?" },
  ];

  // Check if any userInput contains "?" to trigger a warning
  const showWarning = attributes.some(attr => attr.userInput.includes("?"))

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Green Top Bar (Full Width) */}
      <div className="bg-customGreen text-white p-4 flex items-center w-full">
        <Link href="/mushroom" className="mr-2 hover:opacity-80">
          <IoIosArrowBack size={24} />
        </Link>
        <h2 className="text-lg font-semibold">Compare</h2>
      </div>

      {/* Page Content - Centered */}
      <div className="flex flex-col items-center p-6">
        
        {/* Show Warning if needed */}
        {showWarning && (
          <div className="mb-4 w-100 max-w-3xl">
            <WarningAlert message={warningMessage.message} icon={warningMessage.icon} />
          </div>
        )}

        {/* Editable Comparison Table */}
        <div className="w-full text-blue-800 max-w-3xl">
          <EditableTable attributes={attributes} />
        </div>
      </div>
    </div>
  );
}
