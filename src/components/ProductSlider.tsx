'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import Link from 'next/link';

// Sample product data with real images
const products = [
  {
    id: 1,
    name: 'Elegant Evening Dress',
    price: 'Rp 1.299.000',
    image: '/images/butik1.png',
    slug: 'elegant-evening-dress',
    discount: '15% OFF',
    description: 'Perfect for special occasions',
  },
  {
    id: 2,
    name: 'Classic Black Blazer',
    price: 'Rp 899.000',
    image: '/images/butik2.png',
    slug: 'classic-blazer',
    discount: null,
    description: 'Timeless professional wear',
  },
  {
    id: 3,
    name: 'Designer Leather Handbag',
    price: 'Rp 2.499.000',
    image: '/images/butik3.png',
    slug: 'designer-handbag',
    discount: '20% OFF',
    description: 'Luxury leather craftsmanship',
  },
];

export default function ProductSlider() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          // Mobile
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // Tablet
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          }
        }}
        className="py-8 px-4"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="pb-8">
            <div className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={product.id <= 3}
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                    {product.discount}
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm md:text-base px-4 text-center">
                    {product.description}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-playfair text-base md:text-lg font-semibold mb-2 group-hover:text-primary transition-colors truncate">
                  {product.name}
                </h3>
                <p className="text-primary font-medium mb-4">{product.price}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="btn-primary inline-block text-center w-full transform transition-all duration-300 hover:bg-primary-dark text-sm md:text-base py-2"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
} 