"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import CameraComponent from "../../components/CameraComponent";

export default function PhotoSearchPage() {
  const [capturedImage, setCapturedImage] = useState(null);
  const router = useRouter(); // Initialize useRouter

  const handleCapture = (imageDataUrl) => {
    setCapturedImage(imageDataUrl); // Save the captured image for further processing
    console.log("Captured Image:", imageDataUrl); // You can send this to a server or process it further
  };

  const goToMushroomPage = () => {
    router.push("/mushroom"); // Navigate to /mushroom
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Photo Search</h1>
      
      {/* Camera Component */}
      <CameraComponent onCapture={handleCapture} />

      {/* Display Captured Image and Button */}
      {capturedImage && (
        <div className="mt-6 w-full max-w-md flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Captured Image</h2>
          <img
            src={capturedImage}
            alt="Captured"
            className="w-full rounded-xl shadow-md"
          />
          <button
            onClick={goToMushroomPage}
            className="mt-4 px-6 py-2 bg-[#397367] text-white font-medium rounded-full shadow hover:bg-[#315f58] transition-colors"
          >
            Go to Mushroom Page
          </button>
        </div>
      )}
    </div>
  );
}
