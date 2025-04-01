import React from 'react';
import Link from 'next/link';

const CtaBanner = () => {
  return (
    <section className="py-16 bg-gold relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-gold-dark opacity-20 rounded-full -translate-x-12 -translate-y-12"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold-dark opacity-20 rounded-full translate-x-16 translate-y-16"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-black">
          Ready to braid like a queen?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-black-light">
          Elevate your style with our premium collection of X-Pression braiding hair. 
          Designed for melanin queens who demand excellence.
        </p>
        <Link href="/shop">
          <span className="btn bg-black text-white hover:bg-black-light transition-colors duration-300 inline-block px-8 py-4">
            Shop Full Collection
          </span>
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
