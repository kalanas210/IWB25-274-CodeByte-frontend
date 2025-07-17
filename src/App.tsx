import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/clerk-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ChatWidget from './components/common/ChatWidget';
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
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Support from './pages/Support';
import SignInPage from './pages/sign-in';

function App() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  if (!PUBLISHABLE_KEY) {
    throw new Error('Add your Clerk Publishable Key to the .env file');
  }
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
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
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
              <Route path="/sign-in/*" element={<SignInPage />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;