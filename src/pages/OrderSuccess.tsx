import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-center">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Order Placed Successfully!</h1>
            <p className="mt-2 text-gray-600">
              Your order has been received and is being prepared. You can track your order status in real-time.
            </p>
            <button
              onClick={() => navigate('/order')}
              className="mt-8 w-full bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}