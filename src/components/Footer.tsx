import { ChefHat, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <span className="ml-2 text-xl font-bold text-white">HomePlate</span>
            </div>
            <p className="text-gray-400 text-base">
              Connecting passionate home chefs with food lovers seeking authentic homemade meals.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">For Customers</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">How it works</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Browse Meals</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Safety Standards</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQs</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">For Chefs</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Join as Chef</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Earnings</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Requirements</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Chef Support</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">About</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Press</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Terms</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Cookie Policy</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            © 2024 HomePlate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}