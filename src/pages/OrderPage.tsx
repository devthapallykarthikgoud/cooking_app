import { useState } from 'react';
import { MapPin, Search, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SAMPLE_CHEFS = [
  {
    id: 1,
    name: "Priya's Kitchen",
    rating: 4.8,
    cuisine: "North Indian",
    deliveryTime: "30-40",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    menu: [
      { id: 1, name: "Butter Chicken", price: 320, description: "Creamy, rich curry with tender chicken" },
      { id: 2, name: "Dal Makhani", price: 220, description: "Black lentils cooked overnight" },
    ]
  },
  {
    id: 2,
    name: "Anjali's Homestyle",
    rating: 4.6,
    cuisine: "Gujarati",
    deliveryTime: "25-35",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    menu: [
      { id: 1, name: "Thali", price: 250, description: "Complete meal with rotis, sabzi, dal, and rice" },
      { id: 2, name: "Dhokla", price: 150, description: "Steamed savory cake" },
    ]
  }
];

export default function OrderPage() {
  const [location, setLocation] = useState('');
  const [selectedChef, setSelectedChef] = useState<number | null>(null);
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId] > 1) {
        newCart[itemId]--;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Location Search */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-orange-500" />
              <input
                type="text"
                placeholder="Enter your delivery location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="flex-1 border-none focus:ring-0 text-lg"
              />
              <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                Locate Me
              </button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for dishes or home chefs"
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <select className="border rounded-full px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                <option>All Cuisines</option>
                <option>North Indian</option>
                <option>South Indian</option>
                <option>Gujarati</option>
                <option>Bengali</option>
              </select>
              <select className="border rounded-full px-4 py-2 focus:border-orange-500 focus:ring-1 focus:ring-orange-500">
                <option>Rating 4.0+</option>
                <option>Rating 4.5+</option>
                <option>Rating 3.5+</option>
              </select>
            </div>
          </div>

          {/* Chefs List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAMPLE_CHEFS.map((chef) => (
              <div key={chef.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img src={chef.image} alt={chef.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{chef.name}</h3>
                      <p className="text-sm text-gray-500">{chef.cuisine}</p>
                    </div>
                    <div className="flex items-center bg-green-100 px-2 py-1 rounded">
                      <span className="text-sm font-medium text-green-600">★ {chef.rating}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">🕒 {chef.deliveryTime} mins</p>
                  </div>
                  <button
                    onClick={() => setSelectedChef(chef.id)}
                    className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Menu Modal */}
          {selectedChef && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        {SAMPLE_CHEFS.find(c => c.id === selectedChef)?.name}
                      </h2>
                      <p className="text-gray-500">
                        {SAMPLE_CHEFS.find(c => c.id === selectedChef)?.cuisine}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedChef(null)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-6">
                    {SAMPLE_CHEFS.find(c => c.id === selectedChef)?.menu.map((item) => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="text-gray-500">{item.description}</p>
                          <p className="text-orange-500 font-medium">₹{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {cart[`${selectedChef}-${item.id}`] ? (
                            <>
                              <button
                                onClick={() => removeFromCart(`${selectedChef}-${item.id}`)}
                                className="w-8 h-8 flex items-center justify-center text-orange-500 border border-orange-500 rounded-full"
                              >
                                -
                              </button>
                              <span className="w-8 text-center">
                                {cart[`${selectedChef}-${item.id}`]}
                              </span>
                              <button
                                onClick={() => addToCart(`${selectedChef}-${item.id}`)}
                                className="w-8 h-8 flex items-center justify-center text-orange-500 border border-orange-500 rounded-full"
                              >
                                +
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => addToCart(`${selectedChef}-${item.id}`)}
                              className="px-4 py-2 text-orange-500 border border-orange-500 rounded-full hover:bg-orange-50"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Cart Button */}
          {Object.keys(cart).length > 0 && (
            <div className="fixed bottom-4 right-4">
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>View Cart ({Object.values(cart).reduce((a, b) => a + b, 0)} items)</span>
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}