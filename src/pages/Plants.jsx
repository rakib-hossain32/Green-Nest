import React, { useContext } from "react";

import PlantCard from "../components/PlantCard";
import { AuthContext } from "../context/AuthContext";


const Plants = () => {
  const { plants } = useContext(AuthContext);

  

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
      <h1 className="text-3xl lg:text-4xl font-semibold text-[#1A2E1A] mb-4 text-center">
        All Plants{" "}
      </h1>
      <p className="text-[#5A6B5A] text-lg max-w-2xl mx-auto text-center ">
        Explore, choose, and bring home your greenery
      </p>
      <div className="divider text-gray-600 my-10">&&</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {plants.map((plant) => (
          <PlantCard key={plant?.plantId} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default Plants;
