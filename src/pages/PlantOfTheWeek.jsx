import { Star } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const PlantOfTheWeek = () => {
  const featuredPlant = {
    plantId: "zz-plant-special-007",
    plantName: "ZZ Plant (Zamioculcas zamiifolia)",
    category: "Low Maintenance",
    originalPrice: 42.99,
    salePrice: 29.99,
    discount: 30,
    rating: 4.8,
    description: `Perfect for busy plant parents and low-light spaces! The ZZ Plant is virtually indestructible with its glossy, waxy leaves that store water for weeks. This week's special includes a premium ceramic planter and care guide.`,
    image: "https://images.unsplash.com/photo-1723473362336-25be2d06c631",
    alt: "Glossy ZZ plant with thick waxy green leaves in modern white ceramic planter on wooden table near window",
    availableStock: 18,
    careLevel: "Very Easy",
    providerName: "GreenNest Exclusive",
    features: [
      "Thrives in low to bright indirect light",
      "Water only when soil is completely dry",
      "Air-purifying qualities",
      "Pet-safe alternative available",
    ],
    weeklySpecial: {
      endsDate: "2025-10-28",
      includes: [
        "Premium ceramic planter",
        "Detailed care guide",
        "30-day plant guarantee",
        "Free consultation session",
      ],
    },
  };


const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
      );
    }
    if (hasHalf) {
      stars.push(
        <Star
          key="half"
          size={14}
          className="text-yellow-500 fill-yellow-500 opacity-50"
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-4">
            <span className="text-green-600 font-medium">
              🌿 Plant of the Week
            </span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            This Week's Special Selection
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Handpicked by our experts for its beauty, ease of care, and special
            seasonal benefits
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-lg max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-96 lg:h-full">
              <img
                src={featuredPlant.image}
                alt={featuredPlant.alt}
                className="w-full h-full object-cover"
              />

              <div className="absolute top-6 left-6 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                {featuredPlant.discount}% OFF
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Special ends in:</p>
                      <div className="flex items-center space-x-8 mt-1">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {4}
                          </div>
                          <div className="text-xs text-gray-500">days</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">
                            {20}
                          </div>
                          <div className="text-xs text-gray-500">hours</div>
                        </div>
                      </div>
                    </div>
                    <span className="text-green-600 text-xl">⏰</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPlant.careLevel}
                  </span>
                  <span className="text-sm text-gray-400">•</span>
                  <span className="text-sm text-gray-500">
                    {featuredPlant.category}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
                  {featuredPlant.plantName}
                </h3>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex">
                    {renderStars(featuredPlant.rating)}
                    {/* <span className="text-yellow-500">★</span> */}
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {featuredPlant.rating}
                  </span>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-3xl font-bold text-gray-900">
                    ${featuredPlant.salePrice}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    ${featuredPlant.originalPrice}
                  </span>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                    Save $
                    {(
                      featuredPlant.originalPrice - featuredPlant.salePrice
                    ).toFixed(2)}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                {featuredPlant.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Why Plant Parents Love It:
                </h4>
                <ul className="space-y-2">
                  {featuredPlant.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-0.5">✔</span>
                      <span className="text-sm text-gray-800">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-3">
                  This Week's Special Includes:
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {featuredPlant.weeklySpecial.includes.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-green-500">🎁</span>
                      <span className="text-sm text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <Link to='/plants' className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors inline-block">
                  🛒 Get This Week's Special
                </Link>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>🚚</span>
                    <span>Free shipping</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>🛡️</span>
                    <span>30-day guarantee</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📦</span>
                    <span>{featuredPlant.availableStock} in stock</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
