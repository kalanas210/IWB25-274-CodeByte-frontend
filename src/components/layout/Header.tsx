import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, LogOut, Bell, MessageCircle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Explore', href: '/explore' },
    { name: 'Creators', href: '/influencers' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Support', href: '/support' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors duration-200">
              Socyads
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search creators, services..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-all duration-200 text-slate-900 placeholder-slate-500"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-slate-900 ${
                  isActive(item.href) ? 'text-slate-900' : 'text-slate-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {isAuthenticated && user ? (
              <>
                {/* Notifications */}
                <button 
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                </button>

                {/* Messages */}
                <button 
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors duration-200"
                  aria-label="Messages"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>

                {/* Profile */}
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-slate-200"
                    />
                    <span className="text-sm font-medium text-slate-700 hidden sm:block">{user.name}</span>
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {user.role === 'seller' && (
                        <Link to="/seller-dashboard" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">
                          Dashboard
                        </Link>
                      )}
                      {(user.role === 'buyer' || user.role === 'seller') && (
                        <Link to="/buyer-dashboard" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">
                          My Orders
                        </Link>
                      )}
                      {user.role === 'admin' && (
                        <Link to="/admin" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">
                          Admin Panel
                        </Link>
                      )}
                      <Link to="/create-gig" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">
                        Create Gig
                      </Link>
                      <Link to="/messages" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">
                        Messages
                      </Link>
                      <hr className="my-2 border-slate-200" />
                      <Link to="/settings" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">
                        Settings
                      </Link>
                      <button 
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2"
                      >
                        <div className="flex items-center space-x-2">
                          <LogOut className="h-4 w-4" />
                          <span>Sign Out</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Login/Register Buttons */}
                <Link
                  to="/login"
                  className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors duration-200"
                >
                  Join Now
                </Link>
                <Link
                  to="/become-seller"
                  className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition-colors duration-200"
                >
                  Sell
                </Link>
              </>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-slate-700 hover:text-slate-900 font-medium transition-colors duration-200 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {!isAuthenticated && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <Link
                  to="/login"
                  className="block w-full text-center py-2.5 px-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block w-full text-center py-2.5 px-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Now
                </Link>
                <Link
                  to="/become-seller"
                  className="block w-full text-center py-2.5 px-4 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sell
                </Link>
              </div>
            )}

            {isAuthenticated && (
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left py-2.5 px-4 text-slate-700 hover:bg-slate-50 transition-colors duration-200 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;