"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const MushroomHeader = () => {
  return (
    <div className="bg-customGreen text-white p-4 w-full rounded-b-2xl flex items-center">
      {/* Back to Dashboard Button */}
      <Link href="/dashboard" className="mr-2 hover:opacity-80">
        <IoIosArrowBack size={24} />
      </Link>
      <h2 className="text-lg font-semibold">Match Results</h2>
    </div>
  );
};

export default MushroomHeader;
