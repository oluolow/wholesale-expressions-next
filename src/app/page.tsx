import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyOurHair from '@/components/home/WhyOurHair';
import Lookbook from '@/components/home/Lookbook';
import Testimonials from '@/components/home/Testimonials';
import CtaBanner from '@/components/home/CtaBanner';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <WhyOurHair />
      <Lookbook />
      <Testimonials />
      <CtaBanner />
    </main>
  );
}
