// src/components/Certifications.tsx

import React from 'react';

// Import logo-logo sertifikasi Anda
// Pastikan path ini sesuai dengan lokasi gambar Anda
import certi1 from '../assets/certif-1.jpg'; // Ganti dengan path logo Anda
import certi2 from '../assets/certif-2.jpg';       // Ganti dengan path logo Anda
import certi3 from '../assets/certif-3.jpg'; // Ganti dengan path logo Anda

// --- Definisi Tipe Data untuk Sertifikasi ---
interface CertificationProps {
  id: number;
  logoSrc: string;
  altText: string;
  link?: string; // Opsional: jika logo bisa diklik ke website sertifikasi
}

// Data Sertifikasi
const certifications: CertificationProps[] = [
  {
    id: 1,
    logoSrc: certi1,
    altText: "Certified by Kementerian Perdagangan Republik Indonesia",
    link: "https://www.kemendag.go.id/", // Contoh link
  },
  {
    id: 2,
    logoSrc: certi2,
    altText: "Material Data Safety Sheets (MSDS) Certified",
    link: "https://www.example.com/msds-info", // Contoh link
  },
  {
    id: 3,
    logoSrc: certi3,
    altText: "Certified by Carsurin 1968",
    link: "https://carsurin.com/", // Contoh link
  },
];

export const Certifications: React.FC = () => {
  return (
    <section className="py-12 bg-black text-white"> {/* Background hitam sesuai gambar */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Certified by
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-16 gap-8 justify-items-center">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-lg shadow-lg flex items-center justify-center h-40 w-full max-w-[280px] md:w-full md:max-w-xs" // Kotak putih untuk logo
            >
              {/* Tautan jika ada link */}
              {cert.link ? (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={cert.altText}>
                  <img
                    src={cert.logoSrc}
                    alt={cert.altText}
                    className="max-h-full max-w-full object-contain" // Gambar menyesuaikan kotak
                  />
                </a>
              ) : (
                <img
                  src={cert.logoSrc}
                  alt={cert.altText}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};