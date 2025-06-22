import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Categories from '../components/home/Categories';
import FeaturedGigs from '../components/home/FeaturedGigs';
import TopInfluencers from '../components/home/TopInfluencers';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';

const Homepage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Categories />
      <FeaturedGigs />
      <TopInfluencers />
      <HowItWorks />
      <Testimonials />
    </div>
  );
};

export default Homepage;