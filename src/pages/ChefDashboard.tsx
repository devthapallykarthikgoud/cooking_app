import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ChefDashboard() {
  const { state, dispatch } = useApp();
  const [activeTab, setActiveTab] = useState<'orders' | 'menu'>('orders');

  const chefId = 'current-chef-id'; // In a real app, this would come from authentication
  const chefOrders = state.orders.filter(order => order.chefId === chefId);

  const updateOrderStatus = (orderId: string, status: 'accepted' | 'preparing' | 'ready' | 'delivered') => {
    dispatch({
      type: 'UPDATE_ORDER_STATUS',
      payload: { orderId, status }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow">
            <div className="border-b">
              <nav className="flex">
                <button
                  onClick={() => setActiveTab('orders')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'orders'
                      ? 'border-b-2 border-orange-500 text-orange-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Active Orders
                </button>
                <button
                  onClick={() => setActiveTab('menu')}
                  className={`px-6 py-4 text-sm font-medium ${
                    activeTab === 'menu'
                      ? 'border-b-2 border-orange-500 text-orange-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Menu Management
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'orders' ? (
                <div className="space-y-6">
                  {chefOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">
                            Order #{order.id}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {new Date(order.timestamp).toLocaleString()}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                          order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          order.status === 'accepted' ? 'bg-blue-100 text-blue-800' :
                          order.status === 'preparing' ? 'bg-purple-100 text-purple-800' :
                          order.status === 'ready' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                      </div>

                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-gray-900">Items:</h4>
                        <ul className="mt-2 space-y-2">
                          {order.items.map((item) => (
                            <li key={item.itemId} className="text-sm text-gray-600">
                              {item.quantity}x {item.name} - ₹{item.price * item.quantity}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-lg font-medium text-gray-900">
                          Total: ₹{order.total}
                        </p>
                        {order.status === 'pending' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'accepted')}
                            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
                          >
                            Accept Order
                          </button>
                        )}
                        {order.status === 'accepted' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'preparing')}
                            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
                          >
                            Start Preparing
                          </button>
                        )}
                        {order.status === 'preparing' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'ready')}
                            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600"
                          >
                            Mark as Ready
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {/* Menu management UI would go here */}
                  <p className="text-gray-500">Menu management coming soon...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}