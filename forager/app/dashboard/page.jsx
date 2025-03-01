"use client";
import { useState } from "react";
import NavBar from "../../components/NavBar"; // Adjust the path as necessary
import SearchBar from "../../components/SearchBar"; // Import the SearchBar component

export default function DashboardPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Placeholder logic for search results
    setSearchResults([`Result for "${query}"`]); 
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <NavBar />

      {/* Dashboard Content */}
      <div className="p-6">
        {/* Search Bar with filter button linked to /filter */}
        <SearchBar onSearch={handleSearch} />

        {/* Display search results */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Results:</h2>
          {searchResults.length === 0 ? (
            <p className="text-gray-500">No results found.</p>
          ) : (
            searchResults.map((result, index) => (
              <p key={index}>{result}</p>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
