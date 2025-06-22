import React from 'react';
import { Shield, Users, Search, CreditCard, MessageSquare, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Escrow System',
      description: 'Your payments are protected with our secure escrow system. Funds are released only when work is completed to satisfaction.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      title: 'Verified Creators',
      description: 'All influencers are thoroughly vetted and verified. Check their portfolio, reviews, and engagement metrics before hiring.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Search,
      title: 'Powerful Search',
      description: 'Find the perfect influencer with advanced filters by platform, niche, audience size, engagement rate, and more.',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees. Compare rates and packages from multiple creators easily.',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      description: 'Chat directly with influencers, share briefs, and collaborate seamlessly through our built-in messaging system.',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Award,
      title: 'Quality Guarantee',
      description: 'Our rating system and dispute resolution ensure high-quality deliverables and professional service standards.',
      color: 'from-yellow-500 to-amber-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}Socyads
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need for successful influencer marketing campaigns. 
            From discovery to payment, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Decoration */}
                <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full border-2 border-white"></div>
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-sm font-bold">+</span>
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-gray-900">Join 10,000+ creators</p>
              <p className="text-sm text-gray-600">Start earning with Socyads today</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;