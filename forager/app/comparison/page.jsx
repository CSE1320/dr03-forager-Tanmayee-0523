"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import EditableTable from "../../components/EditableTable";
import WarningAlert from "../../components/WarningAlert";
import Polaroid from "../../components/Polaroid";
import { warningMessage, mushrooms } from "../../data/development";

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

  // Find mushrooms with ID 1 and 2
  const mushroom1 = mushrooms.find((m) => m.id === 6);
  const mushroom2 = mushrooms.find((m) => m.id === 1);

  // Check if any userInput contains "?" to trigger a warning
  const showWarning = attributes.some((attr) => attr.userInput.includes("?"));

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Green Top Bar (Full Width) */}
      <div className="bg-customGreen text-white p-4 flex items-center w-full">
        <Link href="/mushroom" className="mr-2 hover:opacity-80">
          <IoIosArrowBack size={24} />
        </Link>
        <h2 className="text-lg font-semibold">Compare</h2>
      </div>

      {/* Centered Page Content */}
      <div className="flex flex-col items-center p-6 w-full">
        
        {/* Container to Ensure Equal Width */}
        <div className="w-80 max-w-3xl space-y-4">
          {/* Show Warning if needed, ensuring full width */}
          {showWarning && (
            <WarningAlert message={warningMessage.message} icon={warningMessage.icon} />
          )}

          {/* Polaroid Comparison (Side by Side) */}
          <div className="flex justify-center space-x-4">
            {mushroom1 && (
              <Polaroid imageSrc={mushroom1.imageSrc} name={mushroom1.name} />
            )}
            {mushroom2 && (
              <Polaroid imageSrc={mushroom2.imageSrc} name={mushroom2.name} confidence="97% match" />
            )}
          </div>

          {/* Editable Comparison Table */}
          <div className="text-blue-800">
            <EditableTable attributes={attributes} />
          </div>
        </div>

      </div>
    </div>
  );
}
