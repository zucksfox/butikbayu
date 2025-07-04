import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductSlider from '@/components/ProductSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-20 bg-gradient-to-r from-primary/5 to-secondary/5 overflow-hidden">
        {/* Floating Clouds Layer */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {/* Floating Clouds Left */}
          <img
            src="/images/awan_vector_batik.png"
            alt="Awan Batik Kiri 1"
            className="absolute left-[-80px] top-10 w-56 h-40 object-contain opacity-70 blur-sm animate-float-slow"
          />
          <img
            src="/images/awan_vector_batik.png"
            alt="Awan Batik Kiri 2"
            className="absolute left-[-100px] top-56 w-40 h-28 object-contain opacity-50 blur-sm animate-float-fast"
          />
          {/* Floating Clouds Right */}
          <img
            src="/images/awan_vector_batik.png"
            alt="Awan Batik Kanan 1"
            className="absolute right-[-80px] top-20 w-56 h-40 object-contain opacity-70 blur-sm animate-float-slow"
          />
          <img
            src="/images/awan_vector_batik.png"
            alt="Awan Batik Kanan 2"
            className="absolute right-[-100px] top-64 w-40 h-28 object-contain opacity-50 blur-sm animate-float-fast"
          />
        </div>
        {/* Main Hero Content */}
        <div className="container-custom relative z-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary mb-6">
              Zoum Mode
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Temukan koleksi fashion eksklusif untuk tampilan elegan dan modern Anda
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-primary text-center mb-12">
            Koleksi Teratas
          </h2>
          <ProductSlider  />
        </div>
      </section>

      {/* Product Catalog Section */}
      <section id="produk" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container-custom">
          <h2 className="text-4xl font-playfair font-bold text-primary text-center mb-12">Katalog Baju Butik</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { id: 1, name: 'Gaun Malam Elegan', price: 'Rp 1.200.000', slug: 'gaun-malam-elegan', image: '/images/gaun-malam.jpg' },
              { id: 2, name: 'Blouse Satin Premium', price: 'Rp 750.000', slug: 'blouse-satin-premium', image: '/images/blouse-satin.jpg' },
              { id: 3, name: 'Rok Tutu Mewah', price: 'Rp 950.000', slug: 'rok-tutu-mewah', image: '/images/rok-tutu.jpg' },
              { id: 4, name: 'Setelan Jas Wanita', price: 'Rp 1.500.000', slug: 'setelan-jas-wanita', image: '/images/setelan-jas.jpg' },
              { id: 5, name: 'Dress Batik Modern', price: 'Rp 1.100.000', slug: 'dress-batik-modern', image: '/images/dress-batik.jpg' },
              { id: 6, name: 'Kebaya Brokat Eksklusif', price: 'Rp 2.500.000', slug: 'kebaya-brokat-eksklusif', image: '/images/kebaya-brokat.jpg' },
            ].map(product => (
              <div key={product.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center border border-primary/10 transform hover:scale-105 hover:-translate-y-2 hover:rotate-1 perspective-1000">
                <div className="w-full h-56 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-gray-50 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                  <img src={product.image} alt={product.name} className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-primary mb-2 text-center transform transition-transform duration-300 group-hover:scale-105">{product.name}</h3>
                <p className="text-lg text-gray-700 font-medium mb-2 text-center transform transition-transform duration-300 group-hover:scale-105">{product.price}</p>
                <a href={`/products/${product.slug}`} className="mt-4 inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:bg-primary/90">Lihat Detail</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-white/80 rounded-3xl shadow-lg p-10 transform transition-all duration-500 hover:shadow-2xl hover:scale-105">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6 transform transition-transform duration-300 hover:scale-110">Tentang Zoum Mode</h2>
            <p className="text-lg text-gray-700 mb-8 transform transition-transform duration-300 hover:scale-105">
              Zoum Mode adalah butik fashion premium yang menghadirkan koleksi pakaian dan aksesoris eksklusif untuk Anda yang mengutamakan kualitas dan gaya. Kami percaya bahwa setiap individu berhak tampil elegan dan percaya diri dengan busana terbaik.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-primary/10 rounded-xl p-6 shadow-lg flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 hover:shadow-2xl hover:bg-primary/20 group">
                <span className="text-3xl font-bold text-primary mb-2 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🌟</span>
                <h3 className="text-xl font-semibold text-primary mb-2 transform transition-transform duration-300 group-hover:scale-110">Visi</h3>
                <p className="text-gray-700 transform transition-transform duration-300 group-hover:scale-105">Menjadi butik pilihan utama untuk fashion eksklusif dan modern di Indonesia.</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 shadow-lg flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 hover:shadow-2xl hover:bg-primary/20 group">
                <span className="text-3xl font-bold text-primary mb-2 transform transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-12">💎</span>
                <h3 className="text-xl font-semibold text-primary mb-2 transform transition-transform duration-300 group-hover:scale-110">Misi</h3>
                <p className="text-gray-700 transform transition-transform duration-300 group-hover:scale-105">Memberikan pengalaman berbelanja yang personal, nyaman, dan memuaskan dengan koleksi terbaik.</p>
              </div>
              <div className="bg-primary/10 rounded-xl p-6 shadow-lg flex flex-col items-center transform transition-all duration-500 hover:scale-110 hover:-translate-y-3 hover:shadow-2xl hover:bg-primary/20 group">
                <span className="text-3xl font-bold text-primary mb-2 transform transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">🤝</span>
                <h3 className="text-xl font-semibold text-primary mb-2 transform transition-transform duration-300 group-hover:scale-110">Nilai</h3>
                <p className="text-gray-700 transform transition-transform duration-300 group-hover:scale-105">Integritas, kualitas, dan pelayanan prima adalah komitmen kami untuk setiap pelanggan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center bg-white/80 rounded-3xl shadow-lg p-10">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-8">Hubungi Kami</h2>
            <p className="text-lg text-gray-700 mb-10">Kami siap membantu Anda! Silakan hubungi kami melalui salah satu platform berikut:</p>
            <div className="flex flex-col gap-8 items-center">
              <a
                href="https://instagram.com/zoummode" target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center gap-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <img src="/images/insta.png" alt="Instagram" className="w-8 h-8 rounded-full object-cover bg-white/80" />
                <span className="text-lg font-semibold">@zoummode</span>
              </a>
              <a
                href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center gap-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <img src="/images/whatsapp.png" alt="WhatsApp" className="w-8 h-8 rounded-full object-cover bg-white/80" />
                <span className="text-lg font-semibold">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
