import React from "react";
import { useNavigate } from "react-router";
import AppNot from "../assets/App-Error.png";
import { ArrowLeft, House } from "lucide-react";

const PlantNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <img src={AppNot} alt="" className=" inline" />
          </div>
        </div>

        <h2 className="text-2xl font-medium  mb-2">OPPS!! PLANT NOT FOUND</h2>
        <p className=" mb-8">
          The page you're looking for doesn't exist. Let's get you back!
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="flex items-center gap-3 btn bg-[#2D5A3D] text-white  rounded-md px-3 "
            onClick={() => window.history?.back()}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>

          <button
            className="flex items-center gap-3 btn bg-[#2D5A3D] text-white  rounded-md px-3 "
            onClick={handleGoHome}
          >
            <House size={20} /> Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantNotFound;
