import React from "react";
import { Link } from "react-router";


const DecorIdea = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A2E1A]">
          Eco Décor Ideas
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Refresh your home with sustainable, nature-inspired décor that brings
          calm and greenery indoors.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1536260454352-a931acd0c989?auto=format&fit=crop&w=1000&q=80"
              alt="Vertical Garden Wall"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3  text-[#1A2E1A]">
              Vertical Garden Wall
            </h3>
            <p className=" text-slate-500 mb-5">
              Create a living wall using vertical planters for a lush,
              space-saving green accent that adds life to your home.
            </p>
            <Link
              to={"/plants"}
              className="inline-block text-primary hover:text-primary/80 font-medium transition"
            >
              Read more →
            </Link>
          </div>
        </div>

        <div className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=1000&q=80"
              alt="Cozy Plant Corner"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3 text-[#1A2E1A]">
              Cozy Plant Corner
            </h3>
            <p className="text-slate-500 mb-5">
              Turn an empty nook into a peaceful sanctuary with layered plants,
              warm lighting, and natural textures.
            </p>
            <Link
              to={"/plants"}
              className="inline-block text-primary hover:text-primary/80 font-medium transition"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorIdea;
