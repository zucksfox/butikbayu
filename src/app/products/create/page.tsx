import Link from 'next/link';

export default function CreateProduct() {
  return (
    <main className="min-h-screen py-16">
      <div className="container-custom max-w-xl mx-auto">
        <h1 className="text-3xl font-playfair font-bold text-primary mb-8">Tambah Produk Baru</h1>
        <form className="space-y-6 bg-white p-8 rounded shadow">
          <div>
            <label className="block text-gray-700 mb-2">Nama Produk</label>
            <input type="text" className="w-full border rounded px-4 py-2" placeholder="Nama produk" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Harga</label>
            <input type="text" className="w-full border rounded px-4 py-2" placeholder="Harga" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Deskripsi</label>
            <textarea className="w-full border rounded px-4 py-2" placeholder="Deskripsi produk" rows={4}></textarea>
          </div>
          <div className="flex justify-between items-center">
            <Link href="/products" className="text-primary hover:underline">Kembali ke Katalog</Link>
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 transition">Simpan</button>
          </div>
        </form>
      </div>
    </main>
  );
} 