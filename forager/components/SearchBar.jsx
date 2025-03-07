"use client";
import { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { FaTimes } from "react-icons/fa"; // Import the X icon
import Link from "next/link";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(query); // Call search function on Enter key press
    }
  };

  const handleClear = () => {
    setQuery(""); // Clear the search query
    onSearch(""); // Notify parent component to clear results
    if (searchInputRef.current) {
      searchInputRef.current.focus(); // Refocus on the input after clearing
    }
  };

  // focus on the search bar as soon as the page loads
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex items-center">
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
          ref={searchInputRef}
        />

        {/* Clear Button */}
        {query && (
          <button onClick={handleClear} className="focus:outline-none">
            <FaTimes className="text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Filter Button as a Link - positioned outside the input div */}
      <Link href="/filter" className="text-[#397367] ml-2">
        <FiFilter size={20} />
      </Link>
    </div>
  );
};

export default SearchBar;
