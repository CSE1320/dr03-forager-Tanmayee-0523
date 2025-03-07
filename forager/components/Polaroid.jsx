"use client";
import React from "react";

const Polaroid = ({ imageSrc, name, confidence, onClick }) => {
  return (
    <div
      className="w-48 bg-white rounded-md shadow-md overflow-hidden relative cursor-pointer"
      onClick={onClick}  // Call the passed function when clicked
    >
      <div className="relative h-48 bg-white-100 p-2">
        <img src={imageSrc} alt={name} className="object-cover w-full h-full" />
        {confidence && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
            {confidence}
          </div>
        )}
      </div>
      <div className="p-2 text-center text-gray-800 font-semibold">
        {name}
      </div>
    </div>
  );
};

export default Polaroid;
