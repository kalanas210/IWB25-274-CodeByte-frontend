import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ChatWidget from './components/common/ChatWidget';
import NotificationBell from './components/common/NotificationBell';
import Homepage from './pages/Homepage';
import ExploreGigs from './pages/ExploreGigs';
import BrowsePlatforms from './pages/BrowsePlatforms';
import AllInfluencers from './pages/AllInfluencers';
import InfluencerProfile from './pages/InfluencerProfile';
import GigDetail from './pages/GigDetail';
import ProductDetail from './pages/ProductDetail';
import CreateGig from './pages/CreateGig';
import SellerDashboard from './pages/SellerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/explore" element={<ExploreGigs />} />
            <Route path="/platforms" element={<BrowsePlatforms />} />
            <Route path="/influencers" element={<AllInfluencers />} />
            <Route path="/influencer/:id" element={<InfluencerProfile />} />
            <Route path="/gig/:id" element={<GigDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/create-gig" element={<CreateGig />} />
            <Route path="/seller-dashboard" element={<SellerDashboard />} />
            <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
        <NotificationBell />
      </div>
    </Router>
  );
}

export default App;