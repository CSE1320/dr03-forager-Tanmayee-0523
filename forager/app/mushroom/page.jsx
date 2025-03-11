"use client";
import React, { useState } from "react";
import Link from "next/link";
import Polaroid from "../../components/Polaroid";
import MushroomHeader from "../../components/MushroomHeader";
import WarningAlert from "../../components/WarningAlert";
import { mushrooms, warningMessage } from "../../data/development";
import ReportError from "../../components/ReportError";
import PlusButton from "../../components/PlusButton";
import FastFacts from "../../components/FastFacts";
import Description from "../../components/Description";

export default function MushroomPage() {
  // State to manage notification visibility
  const [showNotification, setShowNotification] = useState(false);

  // Fetch mushroom with ID 1
  const selectedMushroom = mushrooms.find((m) => m.id === 1);

  console.log("Mushrooms Data:", mushrooms);
  console.log("Selected Mushroom:", selectedMushroom);

  // If mushroom is not found, show a message
  if (!selectedMushroom) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-xl font-semibold text-gray-600">
          Mushroom with ID 1 not found.
        </h2>
      </div>
    );
  }

  // Handle double-click event
  const handleDoubleClick = () => {
    setShowNotification(true); // Show notification
    setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
  };

   // Define similar mushroom IDs
   const similarMushroomIds = [2, 3, 4, 5];

   // Filter similar mushrooms based on IDs
   const similarMushrooms = mushrooms.filter(m => similarMushroomIds.includes(m.id));

  return (
    <div className="min-h-screen bg-gray-100 pb-20 relative">
      {/* Green Top Bar */}
      <MushroomHeader />

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 bg-customGreen text-white px-4 py-2 rounded shadow-lg">
          Added to favorites!
        </div>
      )}

      {/* Page Content */}
      <div className="p-6 flex flex-col items-center">
        {/* Show Warning Message if the mushroom is poisonous */}
        {selectedMushroom.categories.includes("Poisonous") && (
          <>
            <div className="mb-4 w-48">
              <ReportError />
            </div>
            <div className="mb-4 w-48">
              <WarningAlert
                message={warningMessage.message}
                icon={warningMessage.icon}
              />
            </div>
          </>
        )}

        {/* Compare link navigating to /comparison */}
        <div className="w-48 flex justify-end">
          <Link
            href="/comparison"
            className="mt-4 text-gray-500 hover:text-gray-700"
          >
            Compare &gt;
          </Link>
        </div>

        {/* Mushroom Image */}
        <div className="w-fit">
          <Polaroid
            imageSrc={selectedMushroom.imageSrc}
            name={selectedMushroom.name}
            confidence={selectedMushroom.confidence}
            onDoubleClick={handleDoubleClick} // Pass double-click handler here
          />
        </div>

        {/* Name, Scientific Name, and Plus Button */}
        <div className="w-48 flex justify-between items-center mt-4">
          {/* Names */}
          <div className="text-left">
            <h1 className="text-xl font-bold text-gray-900">{selectedMushroom.name}</h1>
            <p className="text-sm italic text-gray-500">{selectedMushroom.scientificName}</p>
          </div>

          {/* Plus Button */}
          <div className="flex justify-end">
            <PlusButton />
          </div>
        </div>


        {/* Mushroom Details */}
        <FastFacts
          capDiameter={selectedMushroom.capDiameter}
          gillColor={selectedMushroom.gillColor}
          stemColor={selectedMushroom.stemColor}
          habitat={selectedMushroom.habitat}
        />
        <div className="w-48 flex justify-middle">
          <Description description={selectedMushroom.description} />
        </div>

         {/* Similar Matches Section */}
         <div className="mt-8 w-48">
            <h2 className="text-xl text-center font-semibold text-gray-800 mb-4">Similar Matches</h2>
            <div className="w-48">
              {similarMushrooms.map(mushroom => (
                <Polaroid
                  key={mushroom.id}
                  name={mushroom.name}
                  imageSrc={mushroom.imageSrc}
                  confidence={mushroom.confidence}
                />
              ))}
            </div>
          </div>
      </div>
    </div>
  );
}
