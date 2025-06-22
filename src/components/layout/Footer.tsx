import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Categories',
      links: [
        { name: 'YouTube Promotions', href: '/category/youtube' },
        { name: 'Instagram Marketing', href: '/category/instagram' },
        { name: 'TikTok Campaigns', href: '/category/tiktok' },
        { name: 'Facebook Advertising', href: '/category/facebook' },
        { name: 'Twitter Promotions', href: '/category/twitter' }
      ]
    },
    {
      title: 'For Businesses',
      links: [
        { name: 'Find Influencers', href: '/find-influencers' },
        { name: 'Advertising Solutions', href: '/advertising' },
        { name: 'Enterprise', href: '/enterprise' },
        { name: 'API Integration', href: '/api' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: 'For Creators',
      links: [
        { name: 'Start Selling', href: '/start-selling' },
        { name: 'Creator Resources', href: '/resources' },
        { name: 'Success Stories', href: '/success-stories' },
        { name: 'Creator Community', href: '/community' },
        { name: 'Payment & Fees', href: '/payments' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/help' },
        { name: 'Contact Us', href: '/contact' },
        { name: 'Safety & Trust', href: '/safety' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Privacy Policy', href: '/privacy' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Socyads
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-6 max-w-sm">
              The premier marketplace connecting advertisers with social media influencers. 
              Secure, transparent, and efficient collaborations.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
              <p className="text-gray-600 text-sm">
                Get the latest news, tips, and exclusive offers from Socyads.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:min-w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-gray-600 text-sm mb-4 md:mb-0">
              <p>&copy; 2024 Socyads. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/terms" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;