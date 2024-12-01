import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import ChefRegistration from './pages/ChefRegistration';
import OrderPage from './pages/OrderPage';
import Cart from './pages/Cart';
import OrderSuccess from './pages/OrderSuccess';
import ChefDashboard from './pages/ChefDashboard';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/become-chef" element={<ChefRegistration />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/chef-dashboard" element={<ChefDashboard />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}