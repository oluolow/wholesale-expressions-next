import React from 'react';
import Image from 'next/image';

interface GalleryItemProps {
  imageSrc: string;
  title: string;
  description: string;
}

const GalleryItem = ({ imageSrc, title, description }: GalleryItemProps) => {
  return (
    <div className="group relative overflow-hidden">
      <div className="aspect-square w-full">
        <div className="w-full h-full bg-cocoa-light flex items-center justify-center">
          <p className="text-white text-center p-4">{title}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="font-serif text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

const Lookbook = () => {
  const galleryItems: GalleryItemProps[] = [
    {
      imageSrc: '/images/gallery/style-1.jpg',
      title: 'Box Braids with Colour 1B',
      description: 'Classic box braids styled with our premium Colour 1B hair for a timeless, elegant look.',
    },
    {
      imageSrc: '/images/gallery/style-2.jpg',
      title: 'Honey Blonde Twists',
      description: 'Stunning twist braids using our Colour 27 for a warm, sun-kissed glow.',
    },
    {
      imageSrc: '/images/gallery/style-3.jpg',
      title: 'Platinum Goddess Braids',
      description: 'Statement-making goddess braids with our Colour 613 for bold, platinum elegance.',
    },
    {
      imageSrc: '/images/gallery/style-4.jpg',
      title: 'Ombre Knotless Braids',
      description: 'Seamless transition with our Ombre hair creating depth and dimension in these knotless braids.',
    },
    {
      imageSrc: '/images/gallery/style-5.jpg',
      title: 'Fulani Braids',
      description: 'Cultural heritage celebrated with intricate Fulani braids using our premium hair.',
    },
    {
      imageSrc: '/images/gallery/style-6.jpg',
      title: 'Passion Twist Updo',
      description: 'Elegant updo created with our soft-textured hair for special occasions.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Styled With Expressions</h2>
          <p className="section-subtitle">Inspiration from our community of queens showcasing their creativity with our premium braiding hair.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={index}
              imageSrc={item.imageSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="btn btn-secondary">
            Share Your Style
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
