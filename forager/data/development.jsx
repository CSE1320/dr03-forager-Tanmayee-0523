// data/development.js

// Array of mushroom objects
const mushrooms = [
    {
      id: 1,
      name: "Death Cap",
      imageSrc: "/images/paddy-straw.jpg",
      tags: ["Favorites"],
      regions: ["North America"],
      categories: ["Medicinal"],
    },
    {
      id: 2,
      name: "Paddy Straw",
      imageSrc: "/images/amanita.jpg",
      tags: ["Recent"],
      regions: ["Europe"],
      categories: ["Poisonous"],
    },
    {
      id: 3,
      name: "Destroying Angel",
      imageSrc: "/images/shiitake.jpg",
      tags: ["Favorites"],
      regions: ["Asia"],
      categories: ["Good for Broths", "Medicinal"],
    },
    // ... add more mushrooms as needed
  ];
  

  
  // Example warningMessage
  const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution.",
  };
  
  // Two flavors of exporting:
  // export default mushrooms; // If you want a default export
  
  // More than one export (named exports):
  export { mushrooms, warningMessage };
  