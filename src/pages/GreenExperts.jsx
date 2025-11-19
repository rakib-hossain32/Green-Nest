import React from "react";

import {
  Star,
  Award,
  Clock,
  Calendar,
  Video,
  FileText,
  MessageCircle,
} from "lucide-react";
import { useNavigate } from "react-router";

const GreenExperts = () => {
  const navigate = useNavigate();

  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: " Plant Pathologist",
      specialization: "Tropical Plants & Disease Management",
      experience: "12+ years",
      rating: 4.9,
      consultations: 850,
      image:
        "https://images.unsplash.com/photo-1565980100090-3c8b3ec27c43?auto=format&fit=crop&w=800&q=80",
      alt: "Professional Asian woman botanist in white lab coat smiling while examining plant specimens in greenhouse",
      credentials: [
        "PhD in Plant Biology",
        "Certified Plant Health Specialist",
        "Published Researcher",
      ],
      languages: ["English", "Mandarin"],
      availability: "Mon-Fri, 9AM-5PM EST",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Indoor Gardening Specialist",
      specialization: "Houseplant Care & Urban Gardening",
      experience: "8+ years",
      rating: 4.8,
      consultations: 620,
      image:
        "https://images.unsplash.com/photo-1602761267591-6ed7da22096d?auto=format&fit=crop&w=800&q=80",
      alt: "Hispanic man with beard wearing green apron holding potted plant in modern indoor garden setting",
      credentials: [
        "Master Gardener Certification",
        "Urban Agriculture Expert",
        "Plant Care Author",
      ],
      languages: ["English", "Spanish"],
      availability: "Tue-Sat, 10AM-6PM EST",
    },
    {
      id: 3,
      name: "Emma Thompson",
      title: "Sustainable Horticulturist",
      specialization: "Eco-Friendly Plant Care & Propagation",
      experience: "10+ years",
      rating: 4.9,
      consultations: 740,
      image:
        "https://images.unsplash.com/photo-1585487000376-31e93cfda351?auto=format&fit=crop&w=800&q=80",
      alt: "Young woman with curly hair wearing earth-tone clothing tending to plants in sustainable greenhouse environment",
      credentials: [
        "BSc Horticulture",
        "Permaculture Design Certificate",
        "Organic Growing Specialist",
      ],
      languages: ["English", "French"],
      availability: "Wed-Sun, 8AM-4PM EST",
    },
    {
      id: 4,
      name: "Dr. James Park",
      title: "Air-Purifying Plant Expert",
      specialization: "Indoor Air Quality & Plant Selection",
      experience: "15+ years",
      rating: 4.7,
      consultations: 920,
      image:
        "https://images.unsplash.com/photo-1572989166914-0558951cdb8c?auto=format&fit=crop&w=800&q=80",
      alt: "Professional Asian man in business casual attire standing next to large air-purifying plants in modern office space",
      credentials: [
        "PhD Environmental Science",
        "NASA Clean Air Study Contributor",
        "Indoor Air Quality Consultant",
      ],
      languages: ["English", "Korean"],
      availability: "Mon-Thu, 11AM-7PM EST",
    },
  ];



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
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4">
            Meet Our Green Experts
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Get personalized guidance from certified botanists and plant care
            specialists who are passionate about helping your plants thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={expert.image}
                  alt={expert.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  {renderStars(expert.rating)}
                  <span className="text-sm font-medium text-gray-800 ml-1">
                    {expert.rating}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {expert.name}
                </h3>
                <p className="text-sm font-medium text-green-600 mb-1">
                  {expert.title}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {expert.specialization}
                </p>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Experience:</span>
                    <span className="font-medium text-gray-900">
                      {expert.experience}
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Consultations:</span>
                    <span className="font-medium text-gray-900">
                      {expert.consultations}+
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Languages:</span>
                    <span className="font-medium text-gray-900">
                      {expert.languages.join(", ")}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-500 mb-2">Top Credentials:</p>
                  <div className="space-y-1">
                    {expert.credentials.slice(0, 2).map((cred, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Award size={12} className="text-green-500" />
                        <span className="text-xs text-gray-800">{cred}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Clock size={14} className="text-gray-500" />
                    <span className="text-xs font-medium text-gray-800">
                      Availability
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{expert.availability}</p>
                </div>

                <button
                  onClick={() => navigate('/')}
                  className="w-full inline-flex items-center justify-center bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition cursor-pointer"
                >
                  <Calendar size={16} className="mr-2" />
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-4xl mx-auto shadow-md">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Video size={24} className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Video Consultations
                </h4>
                <p className="text-sm text-gray-600">
                  Face-to-face guidance from anywhere
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <FileText size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Care Plans</h4>
                <p className="text-sm text-gray-600">
                  Personalized care schedules
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MessageCircle size={24} className="text-yellow-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Follow-up Support
                </h4>
                <p className="text-sm text-gray-600">
                  Ongoing chat support included
                </p>
              </div>
            </div>

            <p className="text-gray-500 text-sm">
              All consultations include a detailed care plan, plant health
              assessment, and 30 days of follow-up support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenExperts;
