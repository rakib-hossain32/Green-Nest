import Header from "./Header";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
// import { useNavigate } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight, UserPlus } from "lucide-react";

const Navbar = () => {
  // const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Transform Your Home Into a Green Paradise",
      subtitle: "Discover the perfect indoor plants for your space",
      description:
        "Create a healthier, more beautiful living environment with our curated collection of air-purifying plants and expert care guidance.",
      image: "https://images.unsplash.com/photo-1646607523833-d791a89b3f99",
      alt: "Bright modern living room with multiple green plants on shelves and windowsill creating a natural indoor garden atmosphere",
      cta: "Explore Plants",
    },
    {
      id: 2,
      title: "Expert Plant Care Made Simple",
      subtitle: "Get personalized guidance from certified botanists",
      description:
        "Book one-on-one consultations with our green experts and learn the secrets to keeping your plants thriving year-round.",
      image: "https://images.unsplash.com/photo-1690292882719-86aec456418f",
      alt: "Professional botanist in white coat examining healthy green plant leaves in bright greenhouse setting",
      cta: "Meet Our Experts",
    },
    {
      id: 3,
      title: "Seasonal Plant Care Tips",
      subtitle: "Keep your plants healthy through every season",
      description:
        "Learn essential watering, lighting, and fertilizing techniques that change with the seasons to ensure your plants flourish.",
      image: "https://images.unsplash.com/photo-1627786174131-9b84a032f050",
      alt: "Close-up of vibrant green plant leaves with water droplets in natural sunlight showing healthy plant care results",
      cta: "Learn Care Tips",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides?.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides?.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides?.length) % slides?.length);
  };
  return (
    <div>
      <div className="mt-30">
        <div className="relative h-[800px] lg:h-[700px] overflow-hidden ">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <div className="grid lg:grid-cols-2 h-full items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-6 lg:pr-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-4"
                  >
                    <p className="text-secondary font-medium text-lg">
                      {slides?.[currentSlide]?.subtitle}
                    </p>
                    <h1 className="text-4xl lg:text-6xl  font-semibold leading-tight">
                      {slides?.[currentSlide]?.title}
                    </h1>
                    <p className=" text-lg lg:text-xl leading-relaxed max-w-lg">
                      {slides?.[currentSlide]?.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <button className="w-full sm:w-auto flex items-center gap-2   text-white  justify-center whitespace-nowrap text-sm font-medium  transition-colors disabled:opacity-50 bg-[#2D5A3D] hover:bg-[#2D5A3D]/90 h-9 rounded-md px-3">
                      {slides?.[currentSlide]?.cta}
                      <ArrowRight size={18} />
                    </button>
                    <button className="w-full sm:w-auto flex items-center gap-2  justify-center whitespace-nowrap text-sm font-medium transition-colors  disabled:opacity-50 hover:bg-[#2D5A3D] hover:text-white  h-9 rounded-md px-3">
                      Join GreenNest
                      <UserPlus size={18} />
                    </button>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="relative h-96 lg:h-full"
                >
                  <div className="absolute inset-0  rounded-2xl overflow-hidden ">
                    <img
                      src={slides?.[currentSlide]?.image}
                      alt={slides?.[currentSlide]?.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12  backdrop-blur-sm border border-[rgba(45,90,61,0.12)] rounded-full flex items-center justify-center  "
            >
              <ChevronLeft />
            </button>

            <div className="flex space-x-2">
              {slides?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentSlide ? "bg-[#2D5A3D]" : "bg-gray-300/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 backdrop-blur-sm border border-[rgba(45,90,61,0.12)] rounded-full flex items-center justify-center "
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
