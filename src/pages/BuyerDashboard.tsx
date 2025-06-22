import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  MessageCircle, 
  Eye, 
  Download,
  MoreHorizontal,
  TrendingUp,
  Users,
  DollarSign,
  ShoppingCart,
  Calendar,
  CheckCircle,
  AlertCircle,
  XCircle,
  RefreshCw,
  Heart,
  Share2,
  FileText,
  CreditCard,
  Bell,
  Settings,
  BarChart3,
  Target,
  Zap
} from 'lucide-react';

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [dateRange, setDateRange] = useState('30');

  // Mock data
  const stats = {
    totalSpent: 2450,
    activeOrders: 3,
    completedOrders: 12,
    savedInfluencers: 8,
    avgRating: 4.8,
    totalReach: '2.5M',
    engagementRate: '5.2%',
    roi: '320%'
  };

  const orders = [
    {
      id: 'ORD-001',
      gigTitle: 'YouTube tech review for smartphone',
      seller: 'TechGuru Mike',
      sellerAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Standard Review',
      price: 499,
      status: 'completed',
      orderDate: '2024-01-15',
      deliveryDate: '2024-01-20',
      rating: 5,
      platform: 'YouTube',
      views: '125K',
      engagement: '4.2%',
      deliverables: ['Video Review', 'Analytics Report', 'Social Media Posts']
    },
    {
      id: 'ORD-002',
      gigTitle: 'Instagram story promotion for fitness brand',
      seller: 'FitLifeAna',
      sellerAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Premium Package',
      price: 299,
      status: 'in-progress',
      orderDate: '2024-01-18',
      deliveryDate: '2024-01-22',
      rating: null,
      platform: 'Instagram',
      views: 'Pending',
      engagement: 'Pending',
      deliverables: ['Story Posts', 'Highlight Feature', 'Analytics']
    },
    {
      id: 'ORD-003',
      gigTitle: 'TikTok viral dance with product placement',
      seller: 'DanceQueenSarah',
      sellerAvatar: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Basic Package',
      price: 199,
      status: 'revision',
      orderDate: '2024-01-20',
      deliveryDate: '2024-01-25',
      rating: null,
      platform: 'TikTok',
      views: 'In Review',
      engagement: 'In Review',
      deliverables: ['Dance Video', 'Product Integration']
    },
    {
      id: 'ORD-004',
      gigTitle: 'Facebook business page promotion',
      seller: 'BusinessBob',
      sellerAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
      package: 'Standard Package',
      price: 179,
      status: 'pending',
      orderDate: '2024-01-22',
      deliveryDate: '2024-01-27',
      rating: null,
      platform: 'Facebook',
      views: 'Not Started',
      engagement: 'Not Started',
      deliverables: ['Page Posts', 'Live Stream Mention']
    }
  ];

  const savedInfluencers = [
    {
      id: 1,
      name: 'TechGuru Mike',
      username: '@techguruofficial',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      platform: 'YouTube',
      followers: '250K',
      rating: 4.9,
      startingPrice: 299,
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'FitLifeAna',
      username: '@fitlifeana',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      platform: 'Instagram',
      followers: '180K',
      rating: 4.8,
      startingPrice: 149,
      lastActive: '1 day ago'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'order_completed',
      message: 'Order ORD-001 has been completed by TechGuru Mike',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'message_received',
      message: 'New message from FitLifeAna about your order',
      time: '4 hours ago',
      icon: MessageCircle,
      color: 'text-blue-600'
    },
    {
      id: 3,
      type: 'revision_requested',
      message: 'Revision requested for order ORD-003',
      time: '1 day ago',
      icon: RefreshCw,
      color: 'text-orange-600'
    },
    {
      id: 4,
      type: 'order_placed',
      message: 'New order ORD-004 placed successfully',
      time: '2 days ago',
      icon: ShoppingCart,
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
                         order.seller.toLowerCase().includes(searchQuery.toLowerCase());
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
              <h1 className="text-2xl font-bold text-gray-900">Buyer Dashboard</h1>
              <p className="text-sm text-gray-600">Manage your orders and campaigns</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                <Bell className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
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
              { id: 'orders', label: 'My Orders', icon: ShoppingCart },
              { id: 'saved', label: 'Saved Influencers', icon: Heart },
              { id: 'analytics', label: 'Analytics', icon: TrendingUp },
              { id: 'billing', label: 'Billing', icon: CreditCard }
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
                    <p className="text-sm text-gray-600">Total Spent</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.totalSpent.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-green-600">+12% from last month</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Active Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.activeOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <span className="text-gray-600">2 in progress, 1 pending</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Completed Orders</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.completedOrders}</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <Star className="h-4 w-4 text-yellow-400 mr-1 fill-current" />
                  <span className="text-gray-600">{stats.avgRating} avg rating</span>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Total Reach</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalReach}</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center text-sm">
                  <Target className="h-4 w-4 text-purple-500 mr-1" />
                  <span className="text-gray-600">{stats.engagementRate} engagement</span>
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

              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/explore"
                    className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center"
                  >
                    <Search className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">Find Influencers</p>
                  </Link>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center">
                    <MessageCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">Messages</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center">
                    <BarChart3 className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">Analytics</p>
                  </button>
                  <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-center">
                    <Settings className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">Settings</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Performance Overview */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Campaign Performance</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{stats.roi}</div>
                  <div className="text-sm text-blue-800">Return on Investment</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">{stats.totalReach}</div>
                  <div className="text-sm text-green-800">Total Reach</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">{stats.engagementRate}</div>
                  <div className="text-sm text-purple-800">Avg Engagement Rate</div>
                </div>
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
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search orders..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                          src={order.sellerAvatar}
                          alt={order.seller}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{order.gigTitle}</h3>
                          <p className="text-sm text-gray-600 mb-2">by {order.seller}</p>
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
                        <p className="text-sm text-gray-600">Performance</p>
                        <p className="font-medium text-gray-900">{order.views} views • {order.engagement} engagement</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Deliverables</p>
                      <div className="flex flex-wrap gap-2">
                        {order.deliverables.map((deliverable, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        {order.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium text-gray-900">{order.rating}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <MessageCircle className="h-4 w-4 mr-2 inline" />
                          Message
                        </button>
                        <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                          <Eye className="h-4 w-4 mr-2 inline" />
                          View Details
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
                    : 'You haven\'t placed any orders yet.'}
                </p>
                <Link
                  to="/explore"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Browse Gigs
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Saved Influencers Tab */}
        {activeTab === 'saved' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Saved Influencers</h3>
                <span className="text-sm text-gray-600">{savedInfluencers.length} saved</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {savedInfluencers.map((influencer) => (
                  <div key={influencer.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={influencer.avatar}
                        alt={influencer.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{influencer.name}</h4>
                        <p className="text-sm text-gray-600">{influencer.username}</p>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <span>{influencer.platform}</span>
                          <span>•</span>
                          <span>{influencer.followers} followers</span>
                        </div>
                      </div>
                      <button className="text-red-500 hover:text-red-700">
                        <Heart className="h-5 w-5 fill-current" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium text-gray-900">{influencer.rating}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Starting at</p>
                        <p className="font-bold text-gray-900">${influencer.startingPrice}</p>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link
                        to={`/influencer/${influencer.id}`}
                        className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200"
                      >
                        View Profile
                      </Link>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <MessageCircle className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {savedInfluencers.length === 0 && (
                <div className="text-center py-12">
                  <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No saved influencers</h3>
                  <p className="text-gray-600 mb-4">
                    Save influencers you're interested in working with for easy access later.
                  </p>
                  <Link
                    to="/influencers"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Browse Influencers
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Campaign Analytics</h3>
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
                  <div className="text-2xl font-bold text-blue-600 mb-2">2.5M</div>
                  <div className="text-sm text-blue-800">Total Impressions</div>
                  <div className="text-xs text-blue-600 mt-1">+15% vs last period</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">125K</div>
                  <div className="text-sm text-green-800">Total Engagements</div>
                  <div className="text-xs text-green-600 mt-1">+8% vs last period</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">5.2%</div>
                  <div className="text-sm text-purple-800">Avg Engagement Rate</div>
                  <div className="text-xs text-purple-600 mt-1">+0.3% vs last period</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 mb-2">320%</div>
                  <div className="text-sm text-orange-800">Return on Investment</div>
                  <div className="text-xs text-orange-600 mt-1">+45% vs last period</div>
                </div>
              </div>

              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Detailed Analytics Coming Soon</h3>
                <p className="text-gray-600">
                  We're working on comprehensive analytics dashboard with charts, insights, and detailed performance metrics.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Billing Tab */}
        {activeTab === 'billing' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Billing & Payments</h3>
              
              <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
                <CreditCard className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Billing Dashboard Coming Soon</h3>
                <p className="text-gray-600">
                  Manage your payment methods, view invoices, and track your spending all in one place.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BuyerDashboard;