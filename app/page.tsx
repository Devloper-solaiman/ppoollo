import React from 'react';
import Navbar from './components/Navbar/page';
import HeroSection from './components/Hero/page';
import ServicesSection from './components/Services/page';
import BannerSection from './components/Banner/page';
import Footer from './components/footer/page';

const page = () => {
  
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <ServicesSection/>
      <BannerSection/>
      <Footer/>
    </div>
  );
};

export default page;