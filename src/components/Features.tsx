import { UtensilsCrossed, Clock, Heart, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Authentic Home Cooking',
      description: 'Enjoy genuine homemade meals prepared with care and traditional recipes.',
      icon: UtensilsCrossed,
    },
    {
      name: 'Fresh & On-Demand',
      description: 'Food is prepared fresh when you order, not pre-cooked or stored.',
      icon: Clock,
    },
    {
      name: 'Empowering Home Chefs',
      description: 'Support local home chefs and help them earn from their culinary skills.',
      icon: Heart,
    },
    {
      name: 'Quality Assured',
      description: 'All our home chefs are verified and follow strict hygiene protocols.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="py-12 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">How it works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to enjoy home-cooked meals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Connecting passionate home chefs with food lovers seeking authentic homemade meals.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}