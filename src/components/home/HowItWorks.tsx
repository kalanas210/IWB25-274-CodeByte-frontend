import React from 'react';
import { Search, MessageSquare, CreditCard, Star, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: Search,
      title: 'Discover & Browse',
      description: 'Search through thousands of verified influencers using our advanced filters. Find creators by platform, niche, audience size, and engagement rate.',
      details: ['Filter by platform, niche, and audience', 'View detailed analytics and portfolios', 'Check ratings and reviews from previous clients']
    },
    {
      step: 2,
      icon: MessageSquare,
      title: 'Connect & Negotiate',
      description: 'Chat directly with influencers to discuss your campaign requirements. Share briefs, negotiate terms, and finalize the collaboration details.',
      details: ['Direct messaging with creators', 'Share campaign briefs and requirements', 'Negotiate pricing and delivery timelines']
    },
    {
      step: 3,
      icon: CreditCard,
      title: 'Secure Payment',
      description: 'Make payments through our secure escrow system. Your funds are protected until the work is completed to your satisfaction.',
      details: ['Secure escrow payment protection', 'Multiple payment options available', 'Funds released upon completion']
    },
    {
      step: 4,
      icon: Star,
      title: 'Review & Rate',
      description: 'Review the delivered content and rate your experience. Help build trust in our community by sharing honest feedback.',
      details: ['Review delivered content', 'Rate and provide feedback', 'Build creator reputation scores']
    }
  ];

  const benefits = [
    { icon: CheckCircle, text: 'Verified influencer profiles' },
    { icon: CheckCircle, text: 'Secure escrow payments' },
    { icon: CheckCircle, text: '24/7 customer support' },
    { icon: CheckCircle, text: 'Dispute resolution system' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting started with Socyads is simple. Follow these four easy steps 
            to launch your next successful influencer marketing campaign.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2">
            <div className="flex justify-between items-center px-32">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex-1 flex items-center justify-center">
                  <ArrowRight className="h-6 w-6 text-blue-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details List */}
                  <ul className="space-y-2 text-sm text-gray-500">
                    {step.details.map((detail, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Hover Effect Decoration */}
                  <div className="mt-6 w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-500 ease-out mx-auto"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h3>
            <p className="text-gray-600">We provide everything you need for successful influencer collaborations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <Icon className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of successful brands and creators who trust Socyads 
              for their influencer marketing campaigns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                Find Influencers
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
                Become a Creator
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;