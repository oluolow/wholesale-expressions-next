import React from 'react';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  hasImage: boolean;
}

const Testimonial = ({ quote, name, role, hasImage }: TestimonialProps) => {
  return (
    <div className="bg-beige-light p-6 md:p-8 flex flex-col h-full">
      <div className="mb-6">
        <svg className="h-8 w-8 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-lg mb-6 flex-grow">{quote}</p>
      <div className="flex items-center">
        {hasImage ? (
          <div className="w-12 h-12 bg-cocoa rounded-full mr-4 flex items-center justify-center text-white">
            {name.charAt(0)}
          </div>
        ) : (
          <div className="w-12 h-12 bg-gold rounded-full mr-4 flex items-center justify-center text-black">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-serif font-bold">{name}</p>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials: TestimonialProps[] = [
    {
      quote: "As a professional stylist, I've used many brands, but Wholesale Expressions stands out for its consistent quality and durability. My clients love how their braids maintain that fresh look for weeks.",
      name: "Aisha Johnson",
      role: "Celebrity Stylist",
      hasImage: true,
    },
    {
      quote: "The pre-stretched feature saves me so much time! I can create styles faster without sacrificing quality. The Colour 613 is the perfect platinum blonde - no yellow tones!",
      name: "Tiana Williams",
      role: "Salon Owner",
      hasImage: false,
    },
    {
      quote: "I've been using X-Pression braiding hair for years, but Wholesale Expressions takes it to another level. The hair is softer, more manageable, and the colors are rich and vibrant.",
      name: "Michelle Carter",
      role: "Customer",
      hasImage: true,
    },
    {
      quote: "The ombre braiding hair creates the most beautiful, natural-looking color transition. My clients are always asking where I source my hair from!",
      name: "Jasmine Taylor",
      role: "Braiding Specialist",
      hasImage: false,
    },
  ];

  return (
    <section className="py-16 bg-beige-light bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">What Queens Are Saying</h2>
          <p className="section-subtitle">Hear from stylists and customers who have experienced the Wholesale Expressions difference.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              hasImage={testimonial.hasImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
