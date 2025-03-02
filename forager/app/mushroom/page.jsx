"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function MushroomPage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Green Top Bar */}
      <div className="bg-[#397367] text-white p-4 rounded-b-2xl flex items-center">
        {/* Arrow goes back to dashboard */}
        <Link href="/dashboard" className="mr-2 hover:opacity-80">
          <IoIosArrowBack size={24} />
        </Link>
        <h2 className="text-lg font-semibold">Match Results</h2>
      </div>

      {/* Page Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Mushroom Page</h1>
        <p className="text-black">This is a temporary Mushroom page.</p>
        {/* Compare button navigating to /comparison */}
        <Link href="/comparison">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors">
            Compare
          </button>
        </Link>
      </div>
    </div>
  );
}
