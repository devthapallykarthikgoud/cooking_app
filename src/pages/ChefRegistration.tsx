import { useState } from 'react';
import { ChefHat, Plus, Trash2 } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: string;
}

export default function ChefRegistration() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [newItem, setNewItem] = useState<MenuItem>({
    name: '',
    description: '',
    price: '',
    category: 'main',
  });

  const addMenuItem = () => {
    if (newItem.name && newItem.price) {
      setMenuItems([...menuItems, newItem]);
      setNewItem({
        name: '',
        description: '',
        price: '',
        category: 'main',
      });
    }
  };

  const removeMenuItem = (index: number) => {
    setMenuItems(menuItems.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="flex items-center mb-8">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <h1 className="ml-3 text-2xl font-bold text-gray-900">Chef Registration</h1>
            </div>

            {/* Personal Information */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">Kitchen Address</label>
                  <textarea
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                  />
                </div>
              </div>
            </section>

            {/* Menu Items */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Menu Items</h2>
              
              {/* Add new item form */}
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Item Name</label>
                    <input
                      type="text"
                      value={newItem.name}
                      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Price (₹)</label>
                    <input
                      type="text"
                      value={newItem.price}
                      onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <select
                      value={newItem.category}
                      onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    >
                      <option value="starter">Starter</option>
                      <option value="main">Main Course</option>
                      <option value="dessert">Dessert</option>
                      <option value="beverage">Beverage</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <input
                      type="text"
                      value={newItem.description}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>
                </div>
                <button
                  onClick={addMenuItem}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-orange-500 hover:bg-orange-600"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Item
                </button>
              </div>

              {/* Menu items list */}
              <div className="space-y-4">
                {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white border rounded-lg">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                      <p className="text-sm text-gray-500">Category: {item.category}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-lg font-semibold text-gray-900">₹{item.price}</span>
                      <button
                        onClick={() => removeMenuItem(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Submit Button */}
            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Submit Registration
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}