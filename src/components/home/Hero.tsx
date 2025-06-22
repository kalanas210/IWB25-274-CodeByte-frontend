import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Play, Star, TrendingUp, Shield, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-gray-900">
            <div className="flex items-center space-x-2 mb-6">
              <div className="px-4 py-2 bg-white border border-blue-200 rounded-full text-sm font-medium shadow-sm">
                🚀 #1 Influencer Marketplace
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Connect with 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Top Influencers
              </span>
              <br />
              for Your Brand
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              The premier marketplace where advertisers discover verified social media influencers 
              for authentic, targeted campaigns across all major platforms.
            </p>

            {/* Search Bar */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search for services, influencers..."
                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-900 placeholder-gray-500 shadow-sm"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Search
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/explore"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore Gigs
              </Link>
              <Link
                to="/start-selling"
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200"
              >
                <Play className="h-5 w-5 mr-2" />
                Start Selling
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">10K+</div>
                <div className="text-sm text-gray-600">Verified Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">50K+</div>
                <div className="text-sm text-gray-600">Successful Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">$5M+</div>
                <div className="text-sm text-gray-600">Paid to Creators</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Video */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              {/* Mock Video Player */}
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6 flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Influencer creating content"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 transform hover:scale-110 shadow-lg">
                    <Play className="h-8 w-8 text-blue-600 ml-1" />
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-gray-700">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Secure Escrow</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Users className="h-5 w-5 text-blue-500" />
                  <span className="text-sm">Verified Creators</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-700">
                  <TrendingUp className="h-5 w-5 text-purple-500" />
                  <span className="text-sm">Growing Fast</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;