import {
  Mail,
  Leaf,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#1A2E1A] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Leaf size={20} className="text-white" />
                </div>
                <span className="text-xl font-semibold">GreenNest</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Transform your home into a green paradise with our curated
                collection of indoor plants and expert care guidance.
              </p>
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Facebook size={16} />
                </a>
                <a
                  href="/"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="/"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Twitter size={16} />
                </a>
                <a
                  href="/"
                  className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "About Us",
                  "Plant Care Guide",
                  "Expert Consultations",
                  "Plant Collection",
                  "Blog",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Help Center",
                  "Shipping Info",
                  "Returns & Exchanges",
                  "Plant Guarantee",
                  "Contact Us",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-white transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <Mail size={16} className="text-gray-400" />
                  <span className="text-gray-400">hello@greennest.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone size={16} className="text-gray-400" />
                  <span className="text-gray-400">123456789</span>
                </div>
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="text-gray-400 mt-0.5" />
                  <span className="text-gray-400">
                    Bakhrer Kandi, Shibchar
                    <br />
                    Madaripur, Bangladesh
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} GreenNest. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link) => (
                  <a
                    key={link}
                    href="/"
                    className="text-gray-500 hover:text-white text-sm transition"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
