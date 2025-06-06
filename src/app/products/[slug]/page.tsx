'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { CONTACT_INFO } from '@/constants/contact';

// Product data (in real app, this would come from an API or database)
const products = [
  {
    id: 1,
    name: 'Elegant Evening Dress',
    price: 'Rp 1.299.000',
    image: '/images/butik1.png',
    slug: 'elegant-evening-dress',
    discount: '15% OFF',
    description: 'Perfect for special occasions',
    details: {
      description: 'Anggun dan elegan, gaun malam ini dirancang khusus untuk momen spesial Anda. Dibuat dengan bahan berkualitas tinggi dan detail yang memukau.',
      material: 'Premium Silk Blend',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Burgundy'],
      features: [
        'Bahan premium berkualitas tinggi',
        'Detail payet mewah',
        'Desain slim fit yang anggun',
        'Nyaman digunakan',
      ]
    }
  },
  {
    id: 2,
    name: 'Classic Black Blazer',
    price: 'Rp 899.000',
    image: '/images/butik2.png',
    slug: 'classic-blazer',
    discount: null,
    description: 'Timeless professional wear',
    details: {
      description: 'Blazer klasik yang sempurna untuk tampilan profesional Anda. Potongan yang presisi dan bahan berkualitas menjadikannya pilihan sempurna untuk berbagai kesempatan.',
      material: 'Premium Wool Blend',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Grey'],
      features: [
        'Bahan wool blend premium',
        'Fully lined interior',
        'Perfect fit design',
        'Multi-functional pockets',
      ]
    }
  },
  {
    id: 3,
    name: 'Designer Leather Handbag',
    price: 'Rp 2.499.000',
    image: '/images/butik3.png',
    slug: 'designer-handbag',
    discount: '20% OFF',
    description: 'Luxury leather craftsmanship',
    details: {
      description: 'Tas tangan mewah yang menggabungkan gaya klasik dengan sentuhan modern. Dibuat dengan kulit asli berkualitas tinggi dan detail finishing yang sempurna.',
      material: 'Genuine Leather',
      sizes: ['One Size'],
      colors: ['Black', 'Brown', 'Tan'],
      features: [
        'Genuine leather premium',
        'Hardware gold-plated',
        'Multiple compartments',
        'Adjustable strap',
      ]
    }
  },
];

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya tertarik dengan produk ${product.name} (${product.price}). Apakah masih tersedia?`;
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Kembali
        </Link>

        {/* Product detail */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product image */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover"
              />
              {product.discount && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.discount}
                </div>
              )}
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-6">
                {product.price}
              </p>
              <p className="text-gray-600 mb-6">
                {product.details.description}
              </p>

              {/* Product details */}
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Material</h3>
                  <p className="text-gray-600">{product.details.material}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Ukuran Tersedia</h3>
                  <div className="flex gap-2">
                    {product.details.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Warna Tersedia</h3>
                  <div className="flex gap-2">
                    {product.details.colors.map((color) => (
                      <span
                        key={color}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fitur Produk</h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {product.details.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Order button */}
              <button
                onClick={handleWhatsAppOrder}
                className="btn-primary w-full py-3 flex items-center justify-center space-x-2 mt-auto"
              >
                <ShoppingBagIcon className="h-5 w-5" />
                <span>Pesan via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-playfair font-bold text-gray-900 mb-6">
            Hubungi Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Informasi Kontak</h3>
              <div className="space-y-3 text-gray-600">
                <p>WhatsApp: +{CONTACT_INFO.whatsapp.replace(/(\d{2})(\d{3})(\d{4})(\d{4})/, '$1 $2-$3-$4')}</p>
                <p>Email: {CONTACT_INFO.email}</p>
                <p>Instagram: {CONTACT_INFO.instagram}</p>
                <p className="pt-2">{CONTACT_INFO.address}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Jam Operasional</h3>
              <div className="space-y-3 text-gray-600">
                <p>Senin - Jumat: {CONTACT_INFO.operationalHours.weekdays}</p>
                <p>Sabtu - Minggu: {CONTACT_INFO.operationalHours.weekend}</p>
                <p>Hari Libur: {CONTACT_INFO.operationalHours.holiday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 