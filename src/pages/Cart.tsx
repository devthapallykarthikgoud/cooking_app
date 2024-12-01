import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Cart() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();

  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (chefId: string, itemId: string, quantity: number) => {
    if (quantity === 0) {
      dispatch({
        type: 'REMOVE_FROM_CART',
        payload: { chefId, itemId }
      });
    } else {
      dispatch({
        type: 'UPDATE_CART_QUANTITY',
        payload: { chefId, itemId, quantity }
      });
    }
  };

  const placeOrder = () => {
    if (state.cart.length === 0) return;

    const order = {
      id: Math.random().toString(36).substr(2, 9),
      chefId: state.cart[0].chefId,
      items: state.cart,
      status: 'pending' as const,
      total,
      deliveryAddress: state.currentLocation,
      timestamp: Date.now(),
    };

    dispatch({ type: 'ADD_ORDER', payload: order });
    dispatch({ type: 'CLEAR_CART' });
    navigate('/order-success');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Cart</h1>
            
            {state.cart.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Your cart is empty</p>
            ) : (
              <>
                <div className="space-y-4">
                  {state.cart.map((item) => (
                    <div key={item.itemId} className="flex justify-between items-center border-b pb-4">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="text-gray-500">₹{item.price}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.chefId, item.itemId, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-orange-500 border border-orange-500 rounded-full"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.chefId, item.itemId, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-orange-500 border border-orange-500 rounded-full"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 border-t pt-8">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                  <button
                    onClick={placeOrder}
                    className="mt-8 w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}