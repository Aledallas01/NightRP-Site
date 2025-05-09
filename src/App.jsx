import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Games from './pages/Games.jsx';
import About from './pages/About.jsx';
import Skyblock from './pages/SkyBlock.jsx';
import KitPvP from './pages/KitPVP.jsx';
import Prison from './pages/Prison.jsx';
import Roleplay from './pages/Roleplay.jsx';
import Forum from './pages/Forum.jsx';
import Store from './pages/Store.jsx';
import Cart from './pages/Store/Cart.jsx';
import CheckoutForm from './pages/Store/CheckoutForm.jsx';
import OrderConfirmation from './pages/Store/OrderConfirmation.jsx';


export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/about" element={<About />} />
            <Route path="/skyblock" element={<Skyblock />} />
            <Route path="/kitpvp" element={<KitPvP />} />
            <Route path="/prison" element={<Prison />} />
            <Route path="/roleplay" element={<Roleplay />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/cart" element={<Cart />} />
            <Route path="/store/checkout" element={<CheckoutForm />} />
            <Route path="/store/confirmation" element={<OrderConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
