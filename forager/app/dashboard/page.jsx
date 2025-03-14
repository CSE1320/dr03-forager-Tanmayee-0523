"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/SearchBar";
import Polaroid from "../../components/Polaroid";
import { mushrooms } from "../../data/development";
import DashboardTitle from "../../components/DashboardTitle";

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    tags: [],
    regions: [],
    categories: [],
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const tagsParam = searchParams.get("tags");
    const regionsParam = searchParams.get("regions");
    const categoriesParam = searchParams.get("categories");
    const tags = tagsParam ? JSON.parse(tagsParam) : [];
    const regions = regionsParam ? JSON.parse(regionsParam) : [];
    const categories = categoriesParam ? JSON.parse(categoriesParam) : [];
    setActiveFilters({ tags, regions, categories });
  }, [searchParams]);

  const handleSearch = (query) => {
    setSearchTerm(query.toLowerCase());
  };

  const handlePolaroidClick = (mushroom) => {
    const query = new URLSearchParams({
      id: mushroom.id,
      name: mushroom.name,
      imageSrc: mushroom.imageSrc,
      confidence: mushroom.confidence || "",
    }).toString();
    router.push(`/mushroom?${query}`); // Update URL to mushroom page with query params
  };

  // Dashboard Component
  const filteredMushrooms = mushrooms
    .filter((m) => m.id !== 6) // Excluding the special mushroom
    .filter((mushroom) => {
      const matchesSearch = mushroom.name.toLowerCase().includes(searchTerm);
      const matchesFilters = () => {
        const { tags, regions, categories } = activeFilters;
        if (tags.length > 0 && !tags.some((tag) => mushroom.tags.includes(tag))) return false;
        if (regions.length > 0 && !regions.some((region) => mushroom.regions.includes(region))) return false;
        if (categories.length > 0 && !categories.some((cat) => mushroom.categories.includes(cat))) return false;
        return true;
      };
      return matchesSearch && matchesFilters();
    });

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <DashboardTitle /> {/* Add DashboardTitle here */}
      <NavBar />
      <div className="p-6">
        <SearchBar onSearch={handleSearch} />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {filteredMushrooms.length === 0 ? (
            <p className="text-gray-500">No mushrooms found.</p>
          ) : (
            filteredMushrooms.map((mushroom) => (
              <Polaroid
                key={mushroom.id}
                imageSrc={mushroom.imageSrc}
                name={mushroom.name}
                confidence={mushroom.confidence}
                onClick={() => handlePolaroidClick(mushroom)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
