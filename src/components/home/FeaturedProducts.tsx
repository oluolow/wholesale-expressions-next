import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductProps {
  id: string;
  name: string;
  color: string;
  price: string;
  imageSrc: string;
}

const ProductCard = ({ id, name, color, price, imageSrc }: ProductProps) => {
  return (
    <div className="group">
      <div className="relative overflow-hidden bg-beige-light">
        <div className="aspect-square w-full">
          <Image 
            src={imageSrc} 
            alt={name} 
            width={400} 
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-gold text-sm">View Details</p>
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-serif text-xl font-medium">{name}</h3>
        <p className="text-gray-700">{color}</p>
        <p className="font-medium text-black">{price}</p>
      </div>
      <button className="mt-4 w-full bg-black text-white py-2 hover:bg-gold hover:text-black transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  );
};

const FeaturedProducts = () => {
  const products: ProductProps[] = [
    {
      id: 'colour-1b',
      name: 'X-Pression Premium',
      color: 'Colour 1B',
      price: '$8.99',
      imageSrc: '/images/products/product-1b.svg',
    },
    {
      id: 'colour-27',
      name: 'X-Pression Premium',
      color: 'Colour 27',
      price: '$9.99',
      imageSrc: '/images/products/product-27.svg',
    },
    {
      id: 'colour-613',
      name: 'X-Pression Premium',
      color: 'Colour 613',
      price: '$10.99',
      imageSrc: '/images/products/product-613.svg',
    },
    {
      id: 'colour-ombre',
      name: 'X-Pression Premium',
      color: 'Ombre',
      price: '$12.99',
      imageSrc: '/images/products/product-ombre.svg',
    },
  ];

  return (
    <section id="featured-products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">Our most popular premium braiding hair, crafted for queens who demand excellence.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/shop">
            <span className="btn btn-secondary">View All Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
