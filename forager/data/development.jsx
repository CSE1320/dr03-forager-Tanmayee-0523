// data/development.jsx

// Array of mushroom objects
const mushrooms = [
  {
    id: 1,
    name: "Death Cap",
    imageSrc: "/icons/death-cap.jpg",
    tags: ["Favorites"],
    regions: ["North America"],
    categories: ["Poisonous"],
    scientificName: "Amanita phalloides",
    capDiameter: "5-15cm",
    gillColor: "White",
    stemColor: "White",
    habitat: "Temperate regions",
    description:
      "The death cap is one of the most poisonous of all known mushrooms. Its principal toxic constituent is α-amanitin, which damages the liver and kidneys, often fatally.",
  },
  {
    id: 2,
    name: "Paddy Straw",
    imageSrc: "/icons/paddy straw.jpg",
    tags: ["Recent"],
    regions: ["Europe"],
    categories: ["Mythical"],
    capDiameter: "3-8cm",
    gillColor: "Pinkish",
    stemColor: "White to pale brown",
    habitat: "Paddy fields and grassy areas",
    description:
      "Volvariella volvacea, commonly known as paddy straw mushroom or straw mushroom, is an edible mushroom cultivated in Southeast Asia and East Asia.",
  },
  {
    id: 3,
    name: "Destroying Angel",
    imageSrc: "/icons/destroying angel.jpg",
    tags: ["Favorites"],
    regions: ["Asia"],
    categories: ["Good for Broths", "Poisonous"],
      capDiameter: "6-12cm",
    gillColor: "White",
    stemColor: "White",
    habitat: "Woodlands",
    description:
      "Amanita virosa, commonly known as the destroying angel, is a deadly poisonous basidiomycete fungus in the genus Amanita.",
  },
  {
    id: 4,
    name: "False Death Cap",
    imageSrc: "/icons/false death cap.jpg",
    tags: ["Favorites"],
    regions: ["Asia"],
    categories: ["Poisonous", "Mythical"],
     capDiameter: "5-10cm",
    gillColor: "Yellowish-green",
    stemColor: "Pale yellow",
    habitat: "Coniferous and deciduous woods",
    description:
      "Amanita citrina, commonly known as the false death cap or citron amanita, is a basidiomycete mushroom of the genus Amanita.",
  },
  {
    id: 5,
    name: "Puffball",
    imageSrc: "/icons/puffball.jpg",
    tags: ["Recents"],
    regions: ["Europe", "North America"],
    categories: [],
     capDiameter: "Variable, up to 50cm",
    gillColor: "N/A (Puffballs do not have gills)",
    stemColor: "N/A",
    habitat: "Fields and open woods",
    description:
      "Puffballs are a group of fungi in the division Basidiomycota. They are so named because clouds of brown dust-like spores are emitted when the mature fruitbody bursts or is impacted.",
  },
  {
    id: 6,
    name: "Your Photo",
    imageSrc: "/icons/yourphoto.png",
    tags: ["Recents"],
    regions: ["Europe", "North America"],
    categories: [],
     capDiameter: "Variable, up to 50cm",
    gillColor: "N/A (Puffballs do not have gills)",
    stemColor: "N/A",
    habitat: "Fields and open woods",
    description:
      "Puffballs are a group of fungi in the division Basidiomycota. They are so named because clouds of brown dust-like spores are emitted when the mature fruitbody bursts or is impacted.",
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
