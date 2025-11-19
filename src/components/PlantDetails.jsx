import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Star } from "lucide-react";
import { useParams } from "react-router";

import { toast } from "react-toastify";

import PlantNotFound from "../pages/PlantNotFound";

const PlantDetails = () => {
  const { plants } = use(AuthContext);
  const { id } = useParams();
 
  const [plant, setPlant] = useState(null);


  

  useEffect(() => {

    // if (!id) {
    //   return 
    // }

    const foundPlant = plants.find((p) => p.plantId === id);
    setPlant(foundPlant);

    
  }, [plants, id]);

  // console.log(plant)


  const handleBookNow = (event) => {
    event.preventDefault();
    toast.success("Booking Successful");
    event.target.reset();
  };

  if (!plant)
    return (
      <PlantNotFound/>
    );

  return (
    <div className="min-h-screen flex flex-col  items-center bg-gray-50 py-30 ">
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <img
                src={plant?.image}
                alt={plant?.plantName}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {plant?.category}
                </span>
                <span className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="ml-1 font-bold">{plant?.rating}</span>
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {plant?.plantName}
              </h1>
              <p className="text-gray-600 mb-6">{plant?.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-2xl font-bold text-green-600">
                    ${plant?.price}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Care Level</p>
                  <p className="text-lg font-bold">{plant?.careLevel}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">In Stock</p>
                  <p className="text-lg font-bold">
                    {plant?.availableStock} units
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Provider</p>
                  <p className="text-lg font-bold">{plant?.providerName}</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4">Book a Consultation</h3>
                <form onSubmit={handleBookNow} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-bold"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
