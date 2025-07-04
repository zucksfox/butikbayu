import Header from '@/components/Header';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 pb-16">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-3xl mx-auto text-center bg-white/80 rounded-3xl shadow-lg p-10">
          <h1 className="text-4xl font-playfair font-bold text-primary mb-6">Tentang Zoum Mode</h1>
          <p className="text-lg text-gray-700 mb-8">
            Zoum Mode adalah butik fashion premium yang menghadirkan koleksi pakaian dan aksesoris eksklusif untuk Anda yang mengutamakan kualitas dan gaya. Kami percaya bahwa setiap individu berhak tampil elegan dan percaya diri dengan busana terbaik.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-primary/10 rounded-xl p-6 shadow flex flex-col items-center">
              <span className="text-3xl font-bold text-primary mb-2">🌟</span>
              <h2 className="text-xl font-semibold text-primary mb-2">Visi</h2>
              <p className="text-gray-700">Menjadi butik pilihan utama untuk fashion eksklusif dan modern di Indonesia.</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 shadow flex flex-col items-center">
              <span className="text-3xl font-bold text-primary mb-2">💎</span>
              <h2 className="text-xl font-semibold text-primary mb-2">Misi</h2>
              <p className="text-gray-700">Memberikan pengalaman berbelanja yang personal, nyaman, dan memuaskan dengan koleksi terbaik.</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-6 shadow flex flex-col items-center">
              <span className="text-3xl font-bold text-primary mb-2">🤝</span>
              <h2 className="text-xl font-semibold text-primary mb-2">Nilai</h2>
              <p className="text-gray-700">Integritas, kualitas, dan pelayanan prima adalah komitmen kami untuk setiap pelanggan.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 