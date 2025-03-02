"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";

export default function DashboardPage() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    setSearchResults([`Result for "${query}"`]);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <NavBar />
      <div className="p-6">
        <SearchBar onSearch={handleSearch} />
        {/* Temporary Button to navigate to Mushroom Page */}
        <div className="mt-4">
          <Link href="/mushroom">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors">
              Go to Mushroom Page
            </button>
          </Link>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Results:</h2>
          {searchResults.length === 0 ? (
            <p className="text-gray-500">No results found.</p>
          ) : (
            searchResults.map((result, index) => <p key={index}>{result}</p>)
          )}
        </div>
      </div>
    </div>
  );
}
