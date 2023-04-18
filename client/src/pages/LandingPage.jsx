import React, { useEffect } from 'react';
import Product from '../components/Products/Product';
import NavigationBar from '../components/Navigation/NavigationBar';
import HeroSection from '../components/HeroSection';
import LandingNavbar from '../components/Navigation/LandingNavbar';
import SecondHero from './SecondHero';

function LandingPage() {
  return (
    <div className="bg-[#F3F4F7]">
      <LandingNavbar />
      <HeroSection />
      <SecondHero Product={Product} />
      {/* <Product /> */}
    </div>
  );
}

export default LandingPage;
