// src/components/MockupProfile.tsx

import React from 'react';
// Pastikan path ke gambar mockup Anda benar.
// Contoh: Asumsikan Anda menyimpan gambar mockup di src/assets/company-profile-mockup.png
import mockupImage from '../assets/mockup.jpg'; // <-- Ganti dengan path gambar mockup Anda yang sesuai

// Jika Anda menggunakan ikon untuk tombol download, Anda bisa mengimpornya di sini
// Misalnya, jika menggunakan Lucide React:
// import { Download } from 'lucide-react'; 

interface MockupProfileProps {
  // pdfUrl adalah URL ke file PDF yang ingin diunduh
  pdfUrl: string; 
}

export const MockupProfile: React.FC<MockupProfileProps> = ({ pdfUrl }) => {
  return (
    <section className="py-16 container">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Gambar Mockup Profil Perusahaan */}
          <div className="relative rounded-lg shadow-xl overflow-hidden">
            {/* Menggunakan tag <img> standar untuk proyek React/Vite */}
            <img
              src={mockupImage}
              alt="Company Profile Mockup"
              className="w-full h-auto object-cover rounded-lg"
              // Anda bisa menambahkan dimensi eksplisit jika gambar perlu preload atau untuk LCP optimization
              // width={500} 
              // height={400} 
            />
          </div>

          {/* Tombol Unduh dan Teks Pendukung */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Download Our Company Profile
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Learn more about PT Pradipa Muda Nusantara, our vision, mission, values, and high-quality products. Download our complete company profile in PDF format for more information. 
            </p>
            <a
              href={pdfUrl}
              target="_blank" // Membuka link di tab baru
              rel="noopener noreferrer" // Penting untuk keamanan
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-md shadow-md transition duration-300 ease-in-out"
              // Anda bisa menambahkan ikon di sini, contoh:
              // <Download className="w-5 h-5 mr-2" />
            >
              Download Company Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};