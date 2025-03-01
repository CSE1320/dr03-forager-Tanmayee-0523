// app/page.jsx
import React from "react";
import Filter from "../../components/Filter";

const Home = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">My App</h1>
      <Filter />
    </div>
  );
};

export default Home;
