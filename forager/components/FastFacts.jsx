// components/FastFacts.jsx
"use client";
import React from "react";

const FastFacts = ({ capDiameter, gillColor, stemColor, habitat }) => {
  return (
    <div className="bg-customRed rounded-3xl p-4 mt-4">
      <h3 className="text-lg font-semibold">Fast Facts</h3>
      <ul>
        <li>Cap Diameter: {capDiameter}</li>
        <li>Gill Color: {gillColor}</li>
        <li>Stem Color: {stemColor}</li>
        <li>Habitat: {habitat}</li>
      </ul>
    </div>
  );
};

export default FastFacts;
