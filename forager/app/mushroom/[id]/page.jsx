"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { mushrooms } from "../../../data/development";
import Polaroid from "../../../components/Polaroid"; 

export default function MushroomDetailPage() {
  const { id } = useParams();
  const mushroom = mushrooms.find((m) => m.id === parseInt(id));

  if (!mushroom) {
    return (
      <div className="min-h-screen bg-gray-100 p-6 pb-20">
        <p>Mushroom not found.</p>
        <Link href="/dashboard" className="text-blue-500 underline">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Top Bar */}
      <div className="bg-customGreen text-white p-4 rounded-b-2xl flex items-center">
        <Link href="/dashboard" className="mr-2 hover:opacity-80">
          &larr; Back
        </Link>
        <h2 className="text-lg font-semibold">{mushroom.name}</h2>
      </div>

      {/* Detail Content */}
      <div className="p-6 flex flex-col items-center">
        <Polaroid
          imageSrc={mushroom.imageSrc}
          name={mushroom.name}
          confidence={mushroom.confidence}
        />
        <p className="mt-4 text-gray-700">
          <strong>Tags:</strong> {mushroom.tags.join(", ")}
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Regions:</strong> {mushroom.regions.join(", ")}
        </p>
        <p className="mt-2 text-gray-700">
          <strong>Categories:</strong> {mushroom.categories.join(", ")}
        </p>
      </div>
    </div>
  );
}
