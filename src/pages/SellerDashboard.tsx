import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  DollarSign,
  ShoppingCart,
  Star,
  TrendingUp,
  Users,
  Eye,
  MessageCircle,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  XCircle,
  RefreshCw,
  Plus,
  Edit,
  MoreHorizontal,
  Download,
  BarChart3,
  Settings,
  Bell,
  Target,
  Award,
  Zap,
  Heart,
  Share2,
  FileText,
  CreditCard,
  Package,
  Activity
} from 'lucide-react';

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState('30');

  // Mock data
  const stats = {
    totalEarnings: 12450,
    monthlyEarnings: 3200,
    activeOrders: 8,
    completedOrders: 156,
    avgRating: 4.9,
    totalReviews: 127,
    responseTime: '1 hour',
    completionRate: '98%',
    repeatClients: '45%',
    totalViews: '2.5M'
  };

  const orders = [
    {
      id: 'ORD-001',
      gigTitle: 'YouTube tech review for smartphone',
      buyer: 'Sarah Johnson',
      buyerAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Standard Review',
      price: 499,
      status: 'in-progress',
      orderDate: '2024-01-20',
      deliveryDate: '2024-01-25',
      progress: 60,
      requirements: 'Please focus on camera quality and battery life features.',
      platform: 'YouTube'
    },
    {
      id: 'ORD-002',
      gigTitle: 'Instagram story promotion for fitness brand',
      buyer: 'David Chen',
      buyerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Premium Package',
      price: 299,
      status: 'pending',
      orderDate: '2024-01-22',
      deliveryDate: '2024-01-27',
      progress: 0,
      requirements: 'Need emphasis on workout routines and nutrition tips.',
      platform: 'Instagram'
    },
    {
      id: 'ORD-003',
      gigTitle: 'TikTok viral dance with product placement',
      buyer: 'Emma Wilson',
      buyerAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Basic Package',
      price: 199,
      status: 'revision',
      orderDate: '2024-01-18',
      deliveryDate: '2024-01-23',
      progress: 85,
      requirements: 'Please make the dance more energetic and add trending hashtags.',
      platform: 'TikTok'
    },
    {
      id: 'ORD-004',
      gigTitle: 'Facebook business page promotion',
      buyer: 'Michael Rodriguez',
      buyerAvatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Standard Package',
      price: 179,
      status: 'completed',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-20',
      progress: 100,
      requirements: 'Focus on B2B audience and professional tone.',
      platform: 'Facebook'
    }
  ];

  const gigs = [
    {
      id: 1,
      title: 'I will create a detailed tech review video for your product',
      image: 'https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 299,
      orders: 234,
      rating: 4.9,
      reviews: 127,
      views: 15420,
      clicks: 892,
      impressions: 45600,
      conversionRate: '1.95%',
      status: 'active',
      platform: 'YouTube'
    },
    {
      id: 2,
      title: 'Instagram story promotion for your brand',
      image: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 149,
      orders: 156,
      rating: 4.8,
      reviews: 89,
      views: 8920,
      clicks: 445,
      impressions: 28400,
      conversionRate: '1.57%',
      status: 'active',
      platform: 'Instagram'
    },
    {
      id: 3,
      title: 'TikTok viral content creation',
      image: 'https://images.pexels.com/photos/4050417/pexels-photo-4050417.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: 199,
      orders: 98,
      rating: 4.7,
      reviews: 67,
      views: 5640,
      clicks: 312,
      impressions: 18900,
      conversionRate: '1.65%',
      status: 'paused',
      platform: 'TikTok'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'new_order',
      message: 'New order received from Sarah Johnson',
      time: '2 hours ago',
      icon: ShoppingCart,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'review_received',
      message: 'New 5-star review from David Chen',
      time: '4 hours ago',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      id: 3,
      type: 'message_received',
      message: 'New message from Emma Wilson',
      time: '6 hours ago',
      icon: MessageCircle,
      color: 'text-blue-600'
    },
    {
      id: 4,
      type: 'order_completed',
      message: 'Order ORD-004 marked as completed',
      time: '1 day ago',
      icon: CheckCircle,
      color: 'text-purple-600'
    }
  ];

  const statusColors = {
    'completed': 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800',
    'revision': 'bg-orange-100 text-orange-800',
    'pending': 'bg-yellow-100 text-yellow-800',
    'cancelled': 'bg-red-100 text-red-800'
  };

  const statusIcons = {
    'completed': CheckCircle,
    'in-progress': Clock,
    'revision': RefreshCw,
    'pending': AlertCircle,
    'cancelled': XCircle
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.gigTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         order.buyer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Seller Dashboard</h1>
              <p className="text-sm text-gray-600">Manage your gigs, orders, and earnings</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </button>
              <Link
                to="/create-gig"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Create Gig</span>
              </Link>
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Settings className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'orders', label: 'Active Orders', icon: ShoppingCart },
              { id: 'gigs', label: 'My Gigs', icon: Package },
              { id: 'earnings', label: 'Earnings', icon: DollarSign },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Earnings</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.totalEarnings.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+15% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-600">2 due this week</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Average Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.avgRating}</p>
                  </div>
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-600">{stats.totalReviews} reviews</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Response Time</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.responseTime}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-600">Excellent response rate</span>
                </div>
              </div>
            </div>

            {/* Recent Activity & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100`}>
                          <Icon className={`h-4 w-4 ${activity.color}`} />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">{activity.message}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button className="mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
                  View all activity
                </button>
              </div>

              {/* Performance Overview */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Completion Rate</span>
                    <span className="font-semibold text-gray-900">{stats.completionRate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Repeat Clients</span>
                    <span className="font-semibold text-gray-900">{stats.repeatClients}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Profile Views</span>
                    <span className="font-semibold text-gray-900">{stats.totalViews}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Orders Completed</span>
                    <span className="font-semibold text-gray-900">{stats.completedOrders}</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-lg font-bold text-green-600">${stats.monthlyEarnings}</div>
                    <div className="text-xs text-green-800">This Month</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">{stats.avgRating}</div>
                    <div className="text-xs text-blue-800">Avg Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link
                  to="/create-gig"
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group"
                >
                  <Plus className="h-8 w-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-sm font-medium text-gray-900">Create New Gig</p>
                </Link>
                <Link
                  to="/messages"
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group"
                >
                  <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-sm font-medium text-gray-900">Messages</p>
                </Link>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                  <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-sm font-medium text-gray-900">View Analytics</p>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center group">
                  <Settings className="h-8 w-8 text-gray-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200" />
                  <p className="text-sm font-medium text-gray-900">Settings</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search orders..."
                      className="pl-4 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="revision">Revision</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {filteredOrders.length} orders found
                  </span>
                </div>
              </div>
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {filteredOrders.map((order) => {
                const StatusIcon = statusIcons[order.status];
                return (
                  <div key={order.id} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        <img
                          src={order.buyerAvatar}
                          alt={order.buyer}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{order.gigTitle}</h3>
                          <p className="text-sm text-gray-600 mb-2">by {order.buyer}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Order #{order.id}</span>
                            <span>•</span>
                            <span>{order.package}</span>
                            <span>•</span>
                            <span>{order.platform}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                          <StatusIcon className="h-3 w-3" />
                          <span className="capitalize">{order.status.replace('-', ' ')}</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900 mt-2">${order.price}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Order Date</p>
                        <p className="font-medium text-gray-900">{order.orderDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Delivery Date</p>
                        <p className="font-medium text-gray-900">{order.deliveryDate}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Progress</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${order.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-900">{order.progress}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Requirements</p>
                      <p className="text-sm text-gray-900 bg-gray-50 p-3 rounded-lg">{order.requirements}</p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">Due in:</span>
                        <span className="text-sm font-medium text-gray-900">3 days</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <MessageCircle className="h-4 w-4 mr-2 inline" />
                          Message
                        </button>
                        <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                          <FileText className="h-4 w-4 mr-2 inline" />
                          Deliver Work
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredOrders.length === 0 && (
              <div className="text-center py-12">
                <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-600 mb-4">
                  {searchQuery || statusFilter !== 'all' 
                    ? 'Try adjusting your search or filter criteria.'
                    : 'You don\'t have any active orders yet.'}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Gigs Tab */}
        {activeTab === 'gigs' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">My Gigs</h3>
              <Link
                to="/create-gig"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Create New Gig</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gigs.map((gig) => (
                <div key={gig.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-200">
                  <div className="aspect-video relative">
                    <img
                      src={gig.image}
                      alt={gig.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${
                      gig.status === 'active' ? 'bg-green-100 text-green-800' :
                      gig.status === 'paused' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {gig.status}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">{gig.title}</h4>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div>
                        <span className="text-gray-600">Price:</span>
                        <span className="font-semibold text-gray-900 ml-1">${gig.price}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Orders:</span>
                        <span className="font-semibold text-gray-900 ml-1">{gig.orders}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Rating:</span>
                        <span className="font-semibold text-gray-900 ml-1">{gig.rating}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Views:</span>
                        <span className="font-semibold text-gray-900 ml-1">{gig.views.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Conversion Rate</span>
                        <span className="font-medium text-gray-900">{gig.conversionRate}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: gig.conversionRate }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                        <Edit className="h-4 w-4 mr-1 inline" />
                        Edit
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Earnings Tab */}
        {activeTab === 'earnings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Earnings Overview</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-green-50 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">${stats.totalEarnings.toLocaleString()}</div>
                  <div className="text-sm text-green-800">Total Earnings</div>
                  <div className="text-xs text-green-600 mt-1">+15% vs last month</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">${stats.monthlyEarnings.toLocaleString()}</div>
                  <div className="text-sm text-blue-800">This Month</div>
                  <div className="text-xs text-blue-600 mt-1">+8% vs last month</div>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-bold text-purple-600 mb-2">${Math.round(stats.totalEarnings / stats.completedOrders)}</div>
                  <div className="text-sm text-purple-800">Avg per Order</div>
                  <div className="text-xs text-purple-600 mt-1">+5% vs last month</div>
                </div>
              </div>

              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Detailed Earnings Analytics Coming Soon</h3>
                <p className="text-gray-600">
                  We're working on comprehensive earnings dashboard with charts, trends, and detailed breakdowns.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Performance Analytics</h3>
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="365">Last year</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">45.6K</div>
                  <div className="text-sm text-blue-800">Profile Views</div>
                  <div className="text-xs text-blue-600 mt-1">+12% vs last period</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">1.2K</div>
                  <div className="text-sm text-green-800">Gig Clicks</div>
                  <div className="text-xs text-green-600 mt-1">+8% vs last period</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">2.1%</div>
                  <div className="text-sm text-purple-800">Conversion Rate</div>
                  <div className="text-xs text-purple-600 mt-1">+0.3% vs last period</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">4.9</div>
                  <div className="text-sm text-orange-800">Avg Rating</div>
                  <div className="text-xs text-orange-600 mt-1">+0.1 vs last period</div>
                </div>
              </div>

              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                <Activity className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Analytics Coming Soon</h3>
                <p className="text-gray-600">
                  Detailed performance metrics, conversion funnels, and growth insights are being developed.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerDashboard;