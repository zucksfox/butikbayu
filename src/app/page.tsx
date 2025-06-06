import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductSlider from '@/components/ProductSlider';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container-custom">
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
            Koleksi Terbaru
          </h2>
          <ProductSlider  />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-primary mb-6">
              Tentang Zoum Mode
            </h2>
            <p className="text-gray-600 mb-8">
              Zoum Mode adalah destinasi fashion premium yang menghadirkan koleksi pakaian
              dan aksesoris berkualitas tinggi. Kami berkomitmen untuk memberikan pengalaman
              berbelanja yang eksklusif dengan pelayanan personal yang memukau.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
