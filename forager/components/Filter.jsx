"use client";
import React, { useState } from "react";
import Link from "next/link";

const FilterButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-3 py-1 rounded-full text-sm transition-colors ${
        isActive
          ? "bg-customGreen text-white"
          : "bg-gray-200 text-gray-500 hover:bg-gray-300"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const Filter = () => {
  const [activeTags, setActiveTags] = useState([]);
  const [activeRegions, setActiveRegions] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  const tags = ["Favorites", "Recent"];
  const regions = [
    "Texas",
    "North America",
    "South America",
    "Asia",
    "Europe",
    "Africa",
  ];
  const categories = ["Poisonous", "Medicinal", "Mythical", "Good for Broths"];

  const toggleFilter = (filterList, setFilterList, item) => {
    setFilterList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="w-64 p-4 bg-gray-100 rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">FILTER</h3>
        <Link href="/dashboard" className="text-gray-500 hover:text-gray-700">
          ✕
        </Link>
      </div>

      {/* Tags */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Tags</h4>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <FilterButton
              key={tag}
              label={tag}
              isActive={activeTags.includes(tag)}
              onClick={() => toggleFilter(activeTags, setActiveTags, tag)}
            />
          ))}
        </div>
      </div>

      {/* Regions */}
      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Regions</h4>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <FilterButton
              key={region}
              label={region}
              isActive={activeRegions.includes(region)}
              onClick={() => toggleFilter(activeRegions, setActiveRegions, region)}
            />
          ))}
        </div>
      </div>

      {/* Category */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Category</h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              isActive={activeCategories.includes(category)}
              onClick={() =>
                toggleFilter(activeCategories, setActiveCategories, category)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
