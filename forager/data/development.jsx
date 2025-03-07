// Array of mushroom objects
const mushrooms = [
    {
      id: 1,
      name: "Death Cap",
      imageSrc: "/icons/death-cap.jpg",
      tags: ["Favorites"],
      regions: ["North America"],
      categories: ["Poisonous"],
    },
    {
      id: 2,
      name: "Paddy Straw",
      imageSrc: "/icons/paddy straw.jpg",
      tags: ["Recent"],
      regions: ["Europe"],
      categories: ["Mythical"],
    },
    {
      id: 3,
      name: "Destroying Angel",
      imageSrc: "/icons/destroying angel.jpg",
      tags: ["Favorites"],
      regions: ["Asia"],
      categories: ["Good for Broths", "Medicinal"],
    },
    {
      id: 4,
      name: "False Death Cap",
      imageSrc: "/icons/false death cap.jpg",
      tags: ["Favorites"],
      regions: ["Asia"],
      categories: ["Good for Broths", "Medicinal"],
    },
    {
      id: 5,
      name: "Puffball",
      imageSrc: "/icons/puffball.jpg",
      tags: ["Recents"],
      regions: ["Europe", "North America"],
      categories: [],
    },
  ];
  

  
  // Example warningMessage
  const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution.",
  };
  
  // More than one export (named exports):
  export { mushrooms, warningMessage };
  