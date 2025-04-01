'use client';

import React from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black z-50 py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-white hover:text-gold transition-colors py-2 border-b border-gray-800">Home</a>
            <a href="#" className="text-white hover:text-gold transition-colors py-2 border-b border-gray-800">Shop</a>
            <a href="#" className="text-white hover:text-gold transition-colors py-2 border-b border-gray-800">Lookbook</a>
            <a href="#" className="text-white hover:text-gold transition-colors py-2 border-b border-gray-800">About</a>
            <a href="#" className="text-white hover:text-gold transition-colors py-2">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
