import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Zoum Mode</h3>
            <p className="text-gray-300">
              Temukan koleksi fashion eksklusif kami untuk tampilan yang elegan dan modern.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Kontak</h3>
            <div className="space-y-2 text-gray-300">
              <p>Jl. Fashion Street No. 123</p>
              <p>Muntilan, Indonesia</p>
              <p>Email: info@zoummode.com</p>
              <p>Tel: (021) 123-4567</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Ikuti Kami</h3>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-gray-300 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="https://facebook.com" className="text-gray-300 hover:text-white transition-colors">
                Facebook
              </Link>
              <Link href="https://twitter.com" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Zoum Mode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 