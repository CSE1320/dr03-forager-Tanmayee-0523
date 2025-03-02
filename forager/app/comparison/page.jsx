"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Green Top Bar */}
      <div className="bg-[#397367] text-white p-4 rounded-b-2xl flex items-center">
        {/* Arrow goes back to mushroom page */}
        <Link href="/mushroom" className="mr-2 hover:opacity-80">
          <IoIosArrowBack size={24} />
        </Link>
        <h2 className="text-lg font-semibold">Compare</h2>
      </div>

      {/* Page Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-black">Compare Page</h1>
        <p className="text-black">This is a temporary Compare page.</p>
      </div>
    </div>
  );
}
