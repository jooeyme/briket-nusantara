// src/components/Contact.tsx

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react'; // Icons for contact info and social media

export const Contact: React.FC = () => {
     // --- GANTI DENGAN NOMOR WHATSAPP ANDA ---
    const WHATSAPP_NUMBER = '62895331447837'; // Contoh: Ganti dengan nomor WhatsApp Anda (format internasional, tanpa + atau spasi)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Mencegah reload halaman

        const form = event.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

        // Buat pesan untuk WhatsApp
        const whatsappMessage = `Halo, my name ${name} (${email}). ${message}`;
        // %0A adalah kode URL encoding untuk newline (baris baru)
        // %20 adalah spasi

        // Buat URL WhatsApp API
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;

        // Buka link WhatsApp di tab baru
        window.open(whatsappUrl, '_blank');

        // Opsional: reset form setelah membuka WhatsApp
        form.reset();

        // Opsional: Beri feedback ke user bahwa mereka akan diarahkan ke WhatsApp
        alert('Anda akan diarahkan ke WhatsApp untuk mengirim pesan. Mohon kirim pesan setelah diarahkan.');
    };

  return (
    <section id="contact" className="py-12 md:py-24 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Contact us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-primary w-6 h-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">Address </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Gg Cemani No 765B Pandeyan, Umbulharjo, Yogyakarta. <br />
                    
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">Phone </h4>
                  <p className="text-gray-600 dark:text-gray-400">+62 815-4846-8353</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="text-primary w-6 h-6 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-200">Email</h4>
                  <p className="text-gray-600 dark:text-gray-400">pradipamudanusantara@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/your_instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="w-8 h-8 text-gray-500 hover:text-primary transition-colors" />
                </a>
                <a href="https://facebook.com/your_facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="w-8 h-8 text-gray-500 hover:text-primary transition-colors" />
                </a>
                <a href="https://linkedin.com/company/your_linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="w-8 h-8 text-gray-500 hover:text-primary transition-colors" />
                </a>
                {/* Tambahkan ikon media sosial lainnya jika ada */}
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          {/* <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Kirim Pesan kepada Kami
            </h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Form submitted! (This is a dummy submission)'); }}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-100 dark:border-gray-600"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  placeholder="email@contoh.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Ketik pesan Anda di sini..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline transition-colors"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div> */}

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Nama Lengkap"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  placeholder="email@contoh.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Your message
                </label>
                <textarea
                  id="message"
                  name='message'
                  rows={5}
                  className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Ketik pesan Anda di sini..."
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-end">
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline transition-colors"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
          
        </div>

        {/* Google Map Embed */}
        <div className="mt-16 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Our Location on Map
          </h3>
          <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg">
            {/* Ganti iframe src ini dengan embed code dari Google Maps Anda */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.666324075191!2d106.79090687500001!3d-6.561939193437505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5e317042571%3A0xc3b8a36c6422f2c8!2sBogor%20Regency%20Government%20Office!5e0!3m2!1sen!2sid!4v1719927653549!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false} // Ubah jadi true jika ingin full screen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Kantor Kami"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
};