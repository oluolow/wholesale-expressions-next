import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative h-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-braids.jpeg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-start container mx-auto px-4 md:px-8 lg:px-16 text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 max-w-3xl">
          Premium Braiding Hair for Melanin Queens
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Elevate your style with our luxury X-Pression braiding hair. Crafted for queens who demand excellence, comfort, and cultural pride.
        </p>
        <Link href="#featured-products">
          <span className="btn btn-primary border-2 border-gold hover:bg-transparent hover:text-gold transition-all duration-300">
            Shop Colour 1B
          </span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
