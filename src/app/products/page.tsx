import Link from 'next/link';
import Header from '@/components/Header';

// Placeholder product data (boutique clothing)
const products = [
  { id: 1, name: 'Gaun Malam Elegan', price: 'Rp 1.200.000', slug: 'gaun-malam-elegan', image: '/images/gaun-malam.jpg' },
  { id: 2, name: 'Blouse Satin Premium', price: 'Rp 750.000', slug: 'blouse-satin-premium', image: '/images/blouse-satin.jpg' },
  { id: 3, name: 'Rok Tutu Mewah', price: 'Rp 950.000', slug: 'rok-tutu-mewah', image: '/images/rok-tutu.jpg' },
  { id: 4, name: 'Setelan Jas Wanita', price: 'Rp 1.500.000', slug: 'setelan-jas-wanita', image: '/images/setelan-jas.jpg' },
  { id: 5, name: 'Dress Batik Modern', price: 'Rp 1.100.000', slug: 'dress-batik-modern', image: '/images/dress-batik.jpg' },
];

export default function ProductCatalog() {
  return (
    <main className="min-h-screen py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
      <Header />
      <div className="container-custom">
        <h1 className="text-4xl font-playfair font-bold text-primary text-center mb-12">Katalog Baju Butik</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-center border border-primary/10">
              <div className="w-full h-56 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-300 hover:scale-105" />
              </div>
              <h2 className="text-xl font-playfair font-semibold text-primary mb-2 text-center">{product.name}</h2>
              <p className="text-lg text-gray-700 font-medium mb-2 text-center">{product.price}</p>
              <a href={`/products/${product.slug}`} className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-primary/90 transition">Lihat Detail</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 