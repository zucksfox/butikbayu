'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { CONTACT_INFO } from '@/constants/contact';
import { useState } from 'react';

// Product data (in real app, this would come from an API or database)
const products = [
  {
    id: 1,
    name: 'Gaun Malam Elegan',
    price: 'Rp 1.200.000',
    image: '/images/gaun-malam.jpg',
    slug: 'gaun-malam-elegan',
    discount: '10% OFF',
    description: 'Gaun malam premium untuk acara spesial',
    details: {
      description: 'Anggun dan elegan, gaun malam ini dirancang khusus untuk momen spesial Anda. Dibuat dengan bahan silk premium dan detail payet mewah.',
      material: 'Silk Premium',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Navy', 'Merah', 'Hitam'],
      features: [
        'Bahan silk premium',
        'Detail payet mewah',
        'Desain slim fit',
        'Nyaman digunakan',
      ]
    }
  },
  {
    id: 2,
    name: 'Blouse Satin Premium',
    price: 'Rp 750.000',
    image: '/images/blouse-satin.jpg',
    slug: 'blouse-satin-premium',
    discount: null,
    description: 'Blouse satin modern dan elegan',
    details: {
      description: 'Blouse satin dengan potongan modern, cocok untuk tampilan formal maupun kasual. Bahan lembut dan nyaman.',
      material: 'Satin Premium',
      sizes: ['S', 'M', 'L'],
      colors: ['Putih', 'Pink', 'Biru'],
      features: [
        'Bahan satin lembut',
        'Desain modern',
        'Cocok untuk berbagai acara',
      ]
    }
  },
  {
    id: 3,
    name: 'Rok Tutu Mewah',
    price: 'Rp 950.000',
    image: '/images/rok-tutu.jpg',
    slug: 'rok-tutu-mewah',
    discount: '5% OFF',
    description: 'Rok tutu dengan layer mewah',
    details: {
      description: 'Rok tutu dengan banyak layer, memberikan volume dan kesan mewah. Cocok untuk pesta atau acara spesial.',
      material: 'Tulle Premium',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Putih', 'Cream', 'Pink'],
      features: [
        'Layer tulle premium',
        'Pinggang elastis',
        'Ringan dan nyaman',
      ]
    }
  },
  {
    id: 4,
    name: 'Setelan Jas Wanita',
    price: 'Rp 1.500.000',
    image: '/images/setelan-jas.jpg',
    slug: 'setelan-jas-wanita',
    discount: null,
    description: 'Setelan jas wanita elegan',
    details: {
      description: 'Setelan jas dengan potongan tailored, cocok untuk tampilan profesional dan elegan.',
      material: 'Wool Blend',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Hitam', 'Abu', 'Navy'],
      features: [
        'Potongan tailored',
        'Bahan wool blend',
        'Nyaman dan stylish',
      ]
    }
  },
  {
    id: 5,
    name: 'Dress Batik Modern',
    price: 'Rp 1.100.000',
    image: '/images/dress-batik.jpg',
    slug: 'dress-batik-modern',
    discount: '8% OFF',
    description: 'Dress batik dengan sentuhan modern',
    details: {
      description: 'Dress batik dengan motif eksklusif dan desain modern. Cocok untuk acara formal maupun santai.',
      material: 'Katun Batik',
      sizes: ['S', 'M', 'L'],
      colors: ['Biru', 'Coklat', 'Merah'],
      features: [
        'Motif batik eksklusif',
        'Desain modern',
        'Bahan katun nyaman',
      ]
    }
  },
  {
    id: 6,
    name: 'Kebaya Brokat Eksklusif',
    price: 'Rp 2.500.000',
    image: '/images/kebaya-brokat.jpg',
    slug: 'kebaya-brokat-eksklusif',
    discount: '12% OFF',
    description: 'Kebaya brokat mewah dan eksklusif',
    details: {
      description: 'Kebaya brokat dengan detail bordir halus dan desain eksklusif. Pilihan tepat untuk acara spesial.',
      material: 'Brokat Premium',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Emas', 'Hijau', 'Merah'],
      features: [
        'Brokat premium',
        'Bordir halus',
        'Desain eksklusif',
      ]
    }
  },
];

export default function ProductDetail() {
  const params = useParams();
  const product = products.find((p) => p.slug === params.slug);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    if (!selectedSize || !selectedColor) {
      alert('Silakan pilih ukuran dan warna terlebih dahulu.');
      return;
    }
    const message = `Halo, saya tertarik dengan produk ${product.name} (Ukuran: ${selectedSize}, Warna: ${selectedColor}, Harga: ${product.price}). Apakah masih tersedia?`;
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
                  <h3 className="font-semibold text-gray-900 mb-2">Pilih Ukuran</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.details.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium transition-colors ${
                          selectedSize === size
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Pilih Warna</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.details.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`flex items-center gap-2 px-4 py-2 border rounded-full text-sm font-medium transition-colors ${
                          selectedColor === color
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
                        }`}
                      >
                        <span 
                          className="h-5 w-5 rounded-full border border-gray-300"
                          style={{ backgroundColor: color.toLowerCase() }}
                        />
                        {color}
                      </button>
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