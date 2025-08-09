import { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-amber-800">COFFEE</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-amber-900 font-medium hover:text-amber-700 transition"
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-gray-700 font-medium hover:text-amber-700 transition"
            >
              Menu
            </a>
            <a
              href="#about"
              className="text-gray-700 font-medium hover:text-amber-700 transition"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 font-medium hover:text-amber-700 transition"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 font-medium hover:text-amber-700 transition"
            >
              Contact
            </a>
            <button className="flex items-center text-gray-700 hover:text-amber-700">
              <FiShoppingCart className="h-6 w-6" />
              <span className="ml-1 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              className="text-gray-700 hover:text-amber-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-amber-900 font-medium"
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 text-gray-700 font-medium"
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 font-medium"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 text-gray-700 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 font-medium"
            >
              Contact
            </a>
            <button className="flex items-center px-3 py-2 text-gray-700">
              <FiShoppingCart className="h-6 w-6" />
              <span className="ml-1 bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
