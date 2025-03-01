"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import Link from "next/link";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(query); // Call search function on Enter key press
    }
  };

  return (
    <div className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
      {/* Search Icon */}
      <FaSearch className="text-gray-400 mr-2" />

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a mushroom"
        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />

      {/* Filter Button as a Link */}
      <Link href="/filter" className="text-[#397367] ml-2">
        <FiFilter size={20} />
      </Link>
    </div>
  );
};

export default SearchBar;
