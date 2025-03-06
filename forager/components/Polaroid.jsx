"use client";
import React from "react";

const Polaroid = ({ imageSrc, name, confidence }) => {
  return (
    <div className="w-48 bg-white rounded-md shadow-md overflow-hidden relative">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full"
        />
        {/* Confidence Label (e.g. "90%") */}
        {confidence && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
            {confidence}
          </div>
        )}
      </div>
      {/* Name under the polaroid */}
      <div className="p-2 text-center text-gray-800 font-semibold">
        {name}
      </div>
    </div>
  );
};

export default Polaroid;
