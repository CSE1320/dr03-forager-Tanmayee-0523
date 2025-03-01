"use client";
import Link from "next/link";
import { TbMushroom } from "react-icons/tb";
import { FaHome, FaCamera } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#397367] rounded-t-2xl p-4 flex flex-col items-center z-50">
      {/* Icon Row */}
      <div className="flex items-center justify-around w-full max-w-sm">
        <Link href="/mushroom" className="text-white hover:opacity-80">
          <TbMushroom size={24} />
        </Link>
        <Link href="/dashboard" className="text-green-200 hover:opacity-80">
          <FaHome size={24} />
        </Link>
        <Link href="/photos" className="text-white hover:opacity-80">
          <FaCamera size={24} />
        </Link>
      </div>
      <div className="mt-2 h-1 w-1/2 bg-white rounded-full" />
    </nav>
  );
}
