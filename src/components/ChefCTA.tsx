import { DollarSign, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChefCTA() {
  return (
    <div className="relative bg-orange-500" id="join-as-chef">
      <div className="h-56 bg-orange-500 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Happy home chef"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="md:ml-auto md:w-1/2 md:pl-10">
          <h2 className="text-base font-semibold uppercase tracking-wider text-white">
            Join our community
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Turn your cooking passion into profit
          </p>
          <p className="mt-3 text-lg text-orange-100">
            Join HomePlate as a home chef and start earning by doing what you love. Set your own schedule, prices, and menu.
          </p>
          <div className="mt-8">
            <div className="flex space-x-8">
              <div>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 text-white" />
                  <span className="ml-2 text-2xl font-bold text-white">5000+</span>
                </div>
                <p className="mt-1 text-sm text-orange-100">Average monthly earnings</p>
              </div>
              <div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-white" />
                  <span className="ml-2 text-2xl font-bold text-white">1000+</span>
                </div>
                <p className="mt-1 text-sm text-orange-100">Active home chefs</p>
              </div>
              <div>
                <div className="flex items-center">
                  <Star className="h-6 w-6 text-white" />
                  <span className="ml-2 text-2xl font-bold text-white">4.8/5</span>
                </div>
                <p className="mt-1 text-sm text-orange-100">Average rating</p>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/become-chef"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-orange-600 bg-white hover:bg-orange-50"
              >
                Start cooking today
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}