import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Heart, Eye, Clock, ChevronDown, Grid, List, SlidersHorizontal, MapPin, Shield, Zap, Award, Users, TrendingUp } from 'lucide-react';

const ExploreGigs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [deliveryTime, setDeliveryTime] = useState('all');
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [sellerLevel, setSellerLevel] = useState('all');
  const [location, setLocation] = useState('all');
  const [language, setLanguage] = useState('all');

  // Mock data for gigs
  const gigs = [
    {
      id: 1,
      title: 'I will promote your brand in my YouTube tech reviews with detailed analysis',
      creator: 'TechGuru Mike',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      reviews: 127,
      platform: 'YouTube',
      category: 'Technology',
      subscribers: '250K',
      deliveryTime: '3 days',
      featured: true,
      level: 'Top Rated',
      online: true,
      location: 'United States',
      language: 'English',
      responseTime: '1 hour',
      completedOrders: 234,
      inQueue: 3,
      badges: ['Pro Verified', 'Fast Delivery']
    },
    {
      id: 2,
      title: 'Instagram story shoutout to 180K fitness audience with engagement guarantee',
      creator: 'FitLifeAna',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 149,
      originalPrice: null,
      rating: 5.0,
      reviews: 89,
      platform: 'Instagram',
      category: 'Fitness',
      subscribers: '180K',
      deliveryTime: '1 day',
      featured: false,
      level: 'Level 2',
      online: false,
      location: 'Canada',
      language: 'English',
      responseTime: '2 hours',
      completedOrders: 156,
      inQueue: 1,
      badges: ['Rising Talent']
    },
    {
      id: 3,
      title: 'TikTok viral dance with your product placement and trending hashtags',
      creator: 'DanceQueenSarah',
      avatar: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=150',
      image: 'https://images.pexels.com/photos/4050417/pexels-photo-4050417.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 199,
      originalPrice: 249,
      rating: 4.8,
      reviews: 156,
      platform: 'TikTok',
      category: 'Entertainment',
      subscribers: '320K',
      deliveryTime: '2 days',
      featured: true,
      level: 'Top Rated',
      online: true,
      location: 'United Kingdom',
      language: 'English',
      responseTime: '30 minutes',
      completedOrders: 189,
      inQueue: 5,
      badges: ['Trending Creator', 'Fast Delivery']
    },
    {
      id: 4,
      title: 'Facebook page post and live stream mention for business growth',
      creator: 'BusinessBob',
      avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
      image: 'https://images.pexels.com/photos/4050288/pexels-photo-4050288.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 179,
      originalPrice: null,
      rating: 4.7,
      reviews: 94,
      platform: 'Facebook',
      category: 'Business',
      subscribers: '95K',
      deliveryTime: '2 days',
      featured: false,
      level: 'Level 1',
      online: true,
      location: 'Australia',
      language: 'English',
      responseTime: '3 hours',
      completedOrders: 167,
      inQueue: 2,
      badges: ['Business Expert']
    },
    {
      id: 5,
      title: 'Gaming livestream sponsorship integration with audience interaction',
      creator: 'GameMasterAlex',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 399,
      originalPrice: 499,
      rating: 4.9,
      reviews: 73,
      platform: 'Twitch',
      category: 'Gaming',
      subscribers: '150K',
      deliveryTime: '5 days',
      featured: false,
      level: 'Top Rated',
      online: false,
      location: 'Germany',
      language: 'English',
      responseTime: '4 hours',
      completedOrders: 98,
      inQueue: 7,
      badges: ['Gaming Pro', 'Live Expert']
    },
    {
      id: 6,
      title: 'Beauty tutorial featuring your products with detailed review',
      creator: 'GlowUpGuru',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 259,
      originalPrice: null,
      rating: 5.0,
      reviews: 112,
      platform: 'YouTube',
      category: 'Beauty',
      subscribers: '420K',
      deliveryTime: '4 days',
      featured: true,
      level: 'Level 2',
      online: true,
      location: 'France',
      language: 'English',
      responseTime: '1 hour',
      completedOrders: 203,
      inQueue: 4,
      badges: ['Beauty Expert', 'Top Seller']
    }
  ];

  const categories = [
    'All Categories', 'Technology', 'Fitness', 'Entertainment', 'Business', 'Gaming', 'Beauty', 'Fashion', 'Food', 'Travel', 'Education', 'Music'
  ];

  const platforms = [
    'All Platforms', 'YouTube', 'Instagram', 'TikTok', 'Facebook', 'Twitter', 'Twitch', 'LinkedIn', 'Snapchat'
  ];

  const deliveryOptions = [
    'Any Time', '24 Hours', '3 Days', '7 Days', '14 Days', '30 Days'
  ];

  const sellerLevels = [
    'All Levels', 'New Seller', 'Level 1', 'Level 2', 'Top Rated'
  ];

  const locations = [
    'All Locations', 'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Spain', 'Italy', 'Other'
  ];

  const languages = [
    'All Languages', 'English', 'Spanish', 'French', 'German', 'Italian', 'Portuguese', 'Other'
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Relevance' },
    { value: 'rating', label: 'Best Rating' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals'  },
    { value: 'popular', label: 'Most Popular' }
  ];

  const platformColors = {
    'YouTube': 'bg-red-100 text-red-800',
    'Instagram': 'bg-purple-100 text-purple-800',
    'TikTok': 'bg-pink-100 text-pink-800',
    'Facebook': 'bg-blue-100 text-blue-800',
    'Twitter': 'bg-sky-100 text-sky-800',
    'Twitch': 'bg-indigo-100 text-indigo-800',
    'LinkedIn': 'bg-blue-100 text-blue-800',
    'Snapchat': 'bg-yellow-100 text-yellow-800'
  };

  const levelColors = {
    'Top Rated': 'bg-yellow-100 text-yellow-800',
    'Level 2': 'bg-green-100 text-green-800',
    'Level 1': 'bg-blue-100 text-blue-800',
    'New Seller': 'bg-gray-100 text-gray-800'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Explore Gigs</h1>
              <p className="mt-2 text-gray-600">Find the perfect influencer for your next campaign</p>
            </div>
            
            {/* Search Bar */}
            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, influencers, or keywords..."
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 shadow-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-sm text-gray-600 mr-2">Popular:</span>
            {['YouTube Reviews', 'Instagram Stories', 'TikTok Trends', 'Gaming', 'Beauty'].map((tag) => (
              <button 
                key={tag} 
                className="px-3 py-1 bg-white border border-gray-200 hover:border-blue-300 rounded-full text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-400 hover:text-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category.toLowerCase().replace(' ', '-')}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Platform Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Platform</label>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {platforms.map((platform) => (
                    <option key={platform} value={platform.toLowerCase().replace(' ', '-')}>
                      {platform}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="relative pt-1">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      step="50"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Time */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Delivery Time</label>
                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {deliveryOptions.map((option) => (
                    <option key={option} value={option.toLowerCase().replace(' ', '-')}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Seller Level */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Seller Level</label>
                <select
                  value={sellerLevel}
                  onChange={(e) => setSellerLevel(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {sellerLevels.map((level) => (
                    <option key={level} value={level.toLowerCase().replace(' ', '-')}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Location */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Seller Location</label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc.toLowerCase().replace(' ', '-')}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Language</label>
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang.toLowerCase().replace(' ', '-')}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Minimum Rating</label>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((ratingValue) => (
                    <label key={ratingValue} className="flex items-center">
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        checked={rating === ratingValue}
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                        className="mr-2"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(ratingValue) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{ratingValue}+ ({Math.floor(Math.random() * 1000)})</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Pro Services */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">Pro Services</label>
                <div className="space-y-2">
                  {['Pro Verified', 'Fast Delivery', 'Top Seller'].map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2"
                      />
                      <span className="text-sm text-gray-600">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <button
                  onClick={() => setShowFilters(true)}
                  className="lg:hidden flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  <SlidersHorizontal className="h-4 w-4 mr-2" />
                  Filters
                </button>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{gigs.length}</span> services available
                </p>
              </div>

              <div className="flex items-center space-x-4">
                {/* View Mode Toggle */}
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>

                {/* Sort Dropdown */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategory !== 'all' && (
                <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Category: {selectedCategory.replace('-', ' ')}
                  <button className="ml-2 text-blue-500 hover:text-blue-700">×</button>
                </div>
              )}
              {selectedPlatform !== 'all' && (
                <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Platform: {selectedPlatform.replace('-', ' ')}
                  <button className="ml-2 text-blue-500 hover:text-blue-700">×</button>
                </div>
              )}
              {priceRange[0] > 0 || priceRange[1] < 1000 && (
                <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                  <button className="ml-2 text-blue-500 hover:text-blue-700">×</button>
                </div>
              )}
              {rating > 0 && (
                <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Rating: {rating}+
                  <button className="ml-2 text-blue-500 hover:text-blue-700">×</button>
                </div>
              )}
            </div>

            {/* Gigs Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'}>
              {gigs.map((gig) => (
                <div
                  key={gig.id}
                  className={`group bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  {/* Gig Image */}
                  <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-64 flex-shrink-0' : 'aspect-[4/3]'}`}>
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Featured Badge */}
                    {gig.featured && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}

                    {/* Favorite Button */}
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 group/heart">
                      <Heart className="h-4 w-4 text-gray-600 group-hover/heart:text-red-500 transition-colors duration-200" />
                    </button>

                    {/* Platform Badge */}
                    <div className={`absolute bottom-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${platformColors[gig.platform] || 'bg-gray-100 text-gray-800'}`}>
                      {gig.platform}
                    </div>

                    {/* Online Status */}
                    {gig.online && (
                      <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-green-100 px-2 py-1 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-800">Online</span>
                      </div>
                    )}
                  </div>

                  {/* Gig Content */}
                  <div className="p-4 flex-1">
                    {/* Creator Info */}
                    <div className="flex items-center space-x-3 mb-3">
                      <img
                        src={gig.avatar}
                        alt={gig.creator}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-gray-900 text-sm">{gig.creator}</h4>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${levelColors[gig.level]}`}>
                            {gig.level}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600">{gig.subscribers} followers</p>
                      </div>
                    </div>

                    {/* Gig Title */}
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {gig.title}
                    </h3>

                    {/* Rating and Reviews */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">{gig.rating}</span>
                      </div>
                      <span className="text-sm text-gray-600">({gig.reviews})</span>
                      <span className="text-xs text-gray-500">{gig.completedOrders} orders completed</span>
                    </div>

                    {/* Badges */}
                    {gig.badges && gig.badges.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-3">
                        {gig.badges.map((badge) => (
                          <span key={badge} className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs">
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Price and Delivery */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{gig.deliveryTime}</span>
                      </div>
                      <div className="text-right">
                        {gig.originalPrice && (
                          <p className="text-sm text-gray-500 line-through">${gig.originalPrice}</p>
                        )}
                        <p className="text-lg font-bold text-gray-900">${gig.price}</p>
                      </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="mt-4 flex space-x-2">
                      <Link
                        to={gig.id === 1 ? `/product/${gig.id}` : `/gig/${gig.id}`}
                        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                      >
                        View Details
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 rounded-lg ${
                      page === 1
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>

            {/* Promotion Banner */}
            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Are you an influencer?</h3>
                  <p className="text-blue-100 mb-4 md:mb-0">Start selling your services and reach thousands of potential clients</p>
                </div>
                <a
                  href="/create-gig"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
                >
                  Become a Seller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreGigs;