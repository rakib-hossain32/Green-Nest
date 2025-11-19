import React from "react";
import { ArrowRight, Eye, Package, Star } from "lucide-react";
import { Link, NavLink } from "react-router";

const PlantCard = ({ plant }) => {

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars?.push(
        <Star
          key={i}
          name="Star"
          size={16}
          className="text-[#F4A261] fill-current"
        />
      );
    }

    if (hasHalfStar) {
      stars?.push(
        <Star
          key="half"
          name="Star"
          size={16}
          className="text-[#F4A261] fill-current opacity-50"
        />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars?.push(
        <Star
          key={`empty-${i}`}
          name="Star"
          size={16}
          className="text-[#5A6B5A]"
        />
      );
    }

    return stars;
  };

  
  return (
    <div className="bg-[#F8FAF7] border border-[rgba(45,90,61,0.12)] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_4px_16px_rgba(45,90,61,0.12),0_2px_6px_rgba(45,90,61,0.16)] transition-all duration-200 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
      <div className="relative h-64 overflow-hidden">
        <img
          src={plant?.image}
          alt={plant?.alt}
          className="w-full h-full object-cover hover:scale-105 transition-all duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        />

        <div className="absolute top-4 right-4 bg-[#FEFFFE]/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-[#1A2E1A] ">
            ${plant?.price}
          </span>
        </div>
        <div className="absolute top-4 left-4  bg-[#FEFFFE]/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-[#1A2E1A]">
            {plant?.careLevel}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-xl font-semibold text-[#1A2E1A] mb-1">
            {plant?.plantName}
          </h3>
          <p className="text-sm text-[#5A6B5A]">
            {plant?.category} • {plant?.providerName}
          </p>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex items-center mr-2">
            {renderStars(plant?.rating)}
          </div>
          <span className="text-sm font-medium text-[#1A2E1A]">
            {plant?.rating}
          </span>
          {/* <span className="text-sm text-muted-foreground ml-1">
                    ({Math.floor(Math.random() * 200) + 50} reviews)
                  </span> */}
        </div>

        <p className="text-[#5A6B5A] text-sm mb-4 line-clamp-2">
          {plant?.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2">
              {/* <Icon
                        name="Package"
                        size={16}
                        className="text-muted-foreground mr-1"
                      /> */}
              <Package size={18} />
              <span className="text-sm text-[#5A6B5A]">
                {plant?.availableStock} in stock
              </span>
            </div>
          </div>
        </div>

        <NavLink
          to={`/plant-details/${plant.plantId}`}
          className=" flex flex-col items-center justify-center text-white whitespace-nowrap rounded-md text-sm font-medium transition-colors   disabled:opacity-50 bg-[#2D5A3D] hover:bg-[#2D5A3D]/90 h-10 px-4 py-2  w-full"
        >
          <p className="flex items-center gap-2 ">
            <Eye /> View Details
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default PlantCard;
