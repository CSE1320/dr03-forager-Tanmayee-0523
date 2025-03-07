"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Polaroid from "@/components/Polaroid";
import MushroomHeader from "@/components/MushroomHeader";
import WarningAlert from "@/components/WarningAlert"; // Import the warning component
import { warningMessage } from "@/data/development"; // Import the warning message data

export default function MushroomPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const imageSrc = searchParams.get("imageSrc");
  const confidence = searchParams.get("confidence");

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Green Top Bar */}
      <MushroomHeader />

      {/* Page Content */}
      <div className="p-6 flex flex-col items-center">
        {/* Show Warning Message */}
        <WarningAlert message={warningMessage.message} icon={warningMessage.icon} />

        {imageSrc ? (
          <Polaroid imageSrc={imageSrc} name={name} confidence={confidence} />
        ) : (
          <p className="text-gray-500">Select a mushroom from the dashboard.</p>
        )}

        {/* Compare button navigating to /comparison */}
        <Link href="/comparison">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors">
            Compare
          </button>
        </Link>
      </div>
    </div>
  );
}
