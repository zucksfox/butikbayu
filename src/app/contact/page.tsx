import Header from '@/components/Header';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10 pb-16">
      <Header />
      <section className="pt-32 pb-20">
        <div className="container-custom max-w-xl mx-auto text-center bg-white/80 rounded-3xl shadow-lg p-10">
          <h1 className="text-4xl font-playfair font-bold text-primary mb-8">Hubungi Kami</h1>
          <p className="text-lg text-gray-700 mb-10">Kami siap membantu Anda! Silakan hubungi kami melalui salah satu platform berikut:</p>
          <div className="flex flex-col gap-8 items-center">
            <a
              href="https://instagram.com/zoummode" target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center gap-4 bg-gradient-to-r from-pink-500 to-yellow-400 text-white px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="currentColor"/><path fill="#fff" d="M12 8.4A3.6 3.6 0 1 0 12 15.6 3.6 3.6 0 0 0 12 8.4Zm0 5.9A2.3 2.3 0 1 1 12 9.7a2.3 2.3 0 0 1 0 4.6Zm4.5-6.1a.84.84 0 1 1-1.68 0 .84.84 0 0 1 1.68 0ZM17.7 8.6a5.7 5.7 0 0 0-1.5-2.1A5.7 5.7 0 0 0 14.4 5.3c-.6-.2-1.2-.3-2.4-.3s-1.8.1-2.4.3a5.7 5.7 0 0 0-1.8 1.2A5.7 5.7 0 0 0 6.3 8.6c-.2.6-.3 1.2-.3 2.4s.1 1.8.3 2.4a5.7 5.7 0 0 0 1.2 1.8 5.7 5.7 0 0 0 1.8 1.2c.6.2 1.2.3 2.4.3s1.8-.1 2.4-.3a5.7 5.7 0 0 0 1.8-1.2 5.7 5.7 0 0 0 1.2-1.8c.2-.6.3-1.2.3-2.4s-.1-1.8-.3-2.4Zm-1.1 5.7a4.1 4.1 0 0 1-1.1 1.7 4.1 4.1 0 0 1-1.7 1.1c-.5.2-1.1.3-2.2.3s-1.7-.1-2.2-.3a4.1 4.1 0 0 1-1.7-1.1 4.1 4.1 0 0 1-1.1-1.7c-.2-.5-.3-1.1-.3-2.2s.1-1.7.3-2.2a4.1 4.1 0 0 1 1.1-1.7 4.1 4.1 0 0 1 1.7-1.1c.5-.2 1.1-.3 2.2-.3s1.7.1 2.2.3a4.1 4.1 0 0 1 1.7 1.1 4.1 4.1 0 0 1 1.1 1.7c.2.5.3 1.1.3 2.2s-.1 1.7-.3 2.2Z"/></svg>
              <span className="text-lg font-semibold">@zoummode</span>
            </a>
            <a
              href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center gap-4 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="6" fill="currentColor"/><path fill="#fff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347Z"/></svg>
              <span className="text-lg font-semibold">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 