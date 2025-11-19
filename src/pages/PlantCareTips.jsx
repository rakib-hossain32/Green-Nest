import React from "react";
import {
  Droplets,
  Sun,
  Sprout,
  Lightbulb,
  BookOpen,
  CheckCircle,
} from "lucide-react";

const PlantCareTips = () => {
  const careTips = [
    {
      id: 1,
      icon: <Droplets size={32} className="text-blue-600" />,
      title: "Watering Wisdom",
      description:
        "Check soil moisture before watering. Most plants prefer slightly dry soil between waterings.",
      tips: [
        "Stick your finger 1-2 inches into soil",
        "Water thoroughly until it drains from bottom",
        "Use room temperature water",
        "Water in morning for best absorption",
      ],
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      color: "text-blue-600",
    },
    {
      id: 2,
      icon: <Sun size={32} className="text-yellow-600" />,
      title: "Light Requirements",
      description:
        "Understanding your plant's light needs is crucial for healthy growth and vibrant foliage.",
      tips: [
        "Bright indirect light for most houseplants",
        "Rotate plants weekly for even growth",
        "Use sheer curtains to filter harsh sunlight",
        "Consider grow lights for dark spaces",
      ],
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      color: "text-yellow-600",
    },
    {
      id: 3,
      icon: <Sprout size={32} className="text-green-600" />,
      title: "Fertilizing Facts",
      description:
        "Proper nutrition helps plants thrive. Feed during growing season for best results.",
      tips: [
        "Fertilize monthly during spring and summer",
        "Use diluted liquid fertilizer",
        "Reduce feeding in fall and winter",
        "Look for balanced N-P-K ratios",
      ],
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      color: "text-green-600",
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Essential Plant Care Tips
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Master the fundamentals of plant care with our expert guidance for
            healthy, thriving indoor gardens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careTips.map((tip) => (
            <div
              key={tip.id}
              className={`bg-white border-2 ${tip.borderColor} rounded-2xl p-8 shadow-md hover:shadow-lg transition-transform hover:-translate-y-1`}
            >
              <div
                className={`w-16 h-16 ${tip.bgColor} rounded-2xl flex items-center justify-center mb-6`}
              >
                {tip.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {tip.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {tip.description}
              </p>

              <div className="space-y-3">
                {tip.tips.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div
                      className={`w-2 h-2 ${tip.bgColor} rounded-full mt-2 shrink-0`}
                    />
                    <p className="text-sm text-gray-800 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500">
                  Pro Tip
                </span>
                <Lightbulb size={16} className={tip.color} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <BookOpen size={24} className="text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Want More Detailed Care Guides?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized care instructions for your specific plants and
              receive seasonal reminders to keep them thriving year-round.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                "Plant identification help",
                "Seasonal care calendars",
                "Troubleshooting guides",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-sm text-gray-600"
                >
                  <CheckCircle size={16} className="text-green-600" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantCareTips;
