import { ChefHat, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">HomePlate</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {isHome ? (
                <>
                  <a href="#how-it-works" className="text-gray-700 hover:text-orange-500">How It Works</a>
                  <a href="#join-as-chef" className="text-gray-700 hover:text-orange-500">Become a Chef</a>
                  <a href="#testimonials" className="text-gray-700 hover:text-orange-500">Testimonials</a>
                </>
              ) : (
                <Link to="/" className="text-gray-700 hover:text-orange-500">Home</Link>
              )}
              <Link to="/order" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                Order Now
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {isHome ? (
              <>
                <a href="#how-it-works" className="block px-3 py-2 text-gray-700 hover:text-orange-500">How It Works</a>
                <a href="#join-as-chef" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Become a Chef</a>
                <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Testimonials</a>
              </>
            ) : (
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-orange-500">Home</Link>
            )}
            <Link to="/order" className="block w-full mt-2 bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition text-center">
              Order Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}