// app/components/mushroom/page.jsx
"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
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
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const imageSrc = searchParams.get("imageSrc");
  const confidence = searchParams.get("confidence");
  const mushroomId = searchParams.get("id");

  // Find the selected mushroom from the dataset
  const selectedMushroom = mushrooms.find((m) => m.name === name);
   const selectedMushroomID = mushrooms.find((m) => m.id == mushroomId);

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Green Top Bar */}
      <MushroomHeader />

      {/* Page Content */}
      <div className="p-6 flex flex-col items-center">
        {/* Show Warning Message only if the mushroom is poisonous */}
        {selectedMushroom?.categories.includes("Poisonous") && (
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

        {imageSrc ? (
          <div className="w-fit"> {/* Adjust width here */}
            <Polaroid
              imageSrc={imageSrc}
              name={name}
              confidence={confidence}
            />
          </div>
        ) : (
          <p className="text-gray-500">Select a mushroom from the dashboard.</p>
        )}
        <div className="w-48 flex justify-end mt-4">
          <PlusButton />
        </div>
        {selectedMushroomID && (
          <>
           <FastFacts
                capDiameter={selectedMushroomID.capDiameter}
                gillColor={selectedMushroomID.gillColor}
                stemColor={selectedMushroomID.stemColor}
                habitat={selectedMushroomID.habitat}
              />
              <div className="w-48 flex justify-middle">
             <Description description={selectedMushroomID.description} />
             </div>
          </>
        )}
      </div>
    </div>
  );
}
