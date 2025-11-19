import React from "react";
import { Mail, ArrowRight } from "lucide-react";


const Newsletter = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4">
            Stay Connected with GreenNest
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Get weekly plant care tips, seasonal guides, and exclusive offers
            delivered to your inbox. Join our community of plant enthusiasts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            />
            <button
              // onClick={() => <Navigate to={"/"} />}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Subscribe</span>
              <ArrowRight size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
