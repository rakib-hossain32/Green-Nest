import { ArrowRight } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { Link,  } from "react-router";
import { AuthContext } from "../context/AuthContext";
import PlantCard from "../components/PlantCard";

const TopRatedPlants = () => {
  const { plants } = use(AuthContext);

 

  // console.log(plants);
  const [topRatedPlants , setTopRatedPlants] = useState([])

  useEffect(() => { 
    const topPlants = plants.filter((plant) => plant?.rating > 4.5);
    setTopRatedPlants(topPlants);
   },[plants])

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#1A2E1A] mb-4">
            Top-Rated Indoor Plants
          </h2>
          <p className="text-[#5A6B5A] text-lg max-w-2xl mx-auto">
            Discover our most beloved plants, carefully selected and rated by
            our community of plant enthusiasts
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedPlants?.map((plant) => (
            <PlantCard key={plant?.plantId} plant={plant} />
          ))}
        </div>
        <div className="flex items-center gap-2  justify-center flex-col mt-12">
          <Link
            to={"/plants"}
            className="w-full sm:w-auto flex items-center gap-2  justify-center whitespace-nowrap text-sm font-medium transition-colors  disabled:opacity-50 hover:bg-[#2D5A3D] hover:text-white  h-11 rounded-md px-3"
          >
            View All Plants <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopRatedPlants;
